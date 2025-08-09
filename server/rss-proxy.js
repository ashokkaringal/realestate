const express = require('express');
const cors = require('cors');
const axios = require('axios');
const xml2js = require('xml2js');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS
app.use(cors());
app.use(express.json());

// RSS Feed URLs for real estate news
const RSS_FEEDS = {
  local: [
    'https://www.moneycontrol.com/rss/realestate.xml',
    'https://www.99acres.com/news/rss.xml',
    'https://www.propmart.com/news/rss.xml'
  ],
  national: [
    'https://www.livemint.com/rss/real-estate',
    'https://www.business-standard.com/rss/real-estate-106.rss',
    'https://www.financialexpress.com/feed/'
  ],
  international: [
    'https://www.reuters.com/rss/realestate',
    'https://www.bloomberg.com/feed/podcast/etf-report.xml',
    'https://www.ft.com/real-estate?format=rss'
  ]
};

// Function to extract image from content or use default
const extractImage = (item) => {
  // Try to extract image from various possible sources
  if (item['media:content'] && item['media:content'][0] && item['media:content'][0].$.url) {
    return item['media:content'][0].$.url;
  }
  if (item['media:thumbnail'] && item['media:thumbnail'][0] && item['media:thumbnail'][0].$.url) {
    return item['media:thumbnail'][0].$.url;
  }
  if (item.enclosure && item.enclosure[0] && item.enclosure[0].$.type && item.enclosure[0].$.type.startsWith('image/')) {
    return item.enclosure[0].$.url;
  }
  
  // Default real estate image
  return 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop';
};

// Function to parse RSS feed
const parseRSSFeed = async (url) => {
  try {
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RealEstateNewsBot/1.0)'
      }
    });
    
    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(response.data);
    
    const items = result.rss?.channel?.[0]?.item || result.feed?.entry || [];
    
    return items.map((item, index) => ({
      id: `${url}-${index}`,
      title: item.title?.[0] || item.title || 'No Title',
      description: item.description?.[0] || item.summary?.[0] || item.content?.[0] || 'No description available',
      link: item.link?.[0] || item.link?.[0]?.href || '#',
      image: extractImage(item),
      publishedAt: item.pubDate?.[0] || item.published?.[0] || new Date().toISOString(),
      source: result.rss?.channel?.[0]?.title?.[0] || result.feed?.title?.[0] || 'Unknown Source',
      category: 'local' // Default category, would be determined by feed URL
    }));
  } catch (error) {
    console.error(`Error fetching RSS feed from ${url}:`, error.message);
    return [];
  }
};

// API endpoint to fetch news by category
app.get('/api/news/:category?', async (req, res) => {
  try {
    const { category } = req.params;
    const { page = 1, limit = 12 } = req.query;
    
    let feeds = [];
    if (category && RSS_FEEDS[category]) {
      feeds = RSS_FEEDS[category];
    } else {
      // Return all feeds if no category specified
      feeds = [...RSS_FEEDS.local, ...RSS_FEEDS.national, ...RSS_FEEDS.international];
    }
    
    // Fetch from all feeds in parallel
    const feedPromises = feeds.map(url => parseRSSFeed(url));
    const feedResults = await Promise.allSettled(feedPromises);
    
    // Combine all successful results
    let allArticles = [];
    feedResults.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        allArticles = allArticles.concat(result.value);
      }
    });
    
    // Sort by publication date (newest first)
    allArticles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    
    // Apply pagination
    const startIndex = (parseInt(page) - 1) * parseInt(limit);
    const endIndex = startIndex + parseInt(limit);
    const articles = allArticles.slice(startIndex, endIndex);
    
    res.json({
      articles,
      total: allArticles.length,
      hasMore: endIndex < allArticles.length,
      page: parseInt(page),
      limit: parseInt(limit)
    });
    
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news articles' });
  }
});

// API endpoint to search news
app.get('/api/news/search/:query', async (req, res) => {
  try {
    const { query } = req.params;
    const searchTerm = query.toLowerCase();
    
    // Fetch from all feeds
    const allFeeds = [...RSS_FEEDS.local, ...RSS_FEEDS.national, ...RSS_FEEDS.international];
    const feedPromises = allFeeds.map(url => parseRSSFeed(url));
    const feedResults = await Promise.allSettled(feedPromises);
    
    // Combine and filter results
    let allArticles = [];
    feedResults.forEach((result) => {
      if (result.status === 'fulfilled') {
        allArticles = allArticles.concat(result.value);
      }
    });
    
    // Filter by search term
    const filteredArticles = allArticles.filter(article => 
      article.title.toLowerCase().includes(searchTerm) ||
      article.description.toLowerCase().includes(searchTerm) ||
      article.source.toLowerCase().includes(searchTerm)
    );
    
    res.json({
      articles: filteredArticles,
      total: filteredArticles.length,
      query: searchTerm
    });
    
  } catch (error) {
    console.error('Error searching news:', error);
    res.status(500).json({ error: 'Failed to search news articles' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`RSS Proxy Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  console.log(`News API: http://localhost:${PORT}/api/news`);
});

module.exports = app; 