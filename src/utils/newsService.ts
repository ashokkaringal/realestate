// News service for fetching real estate news from RSS feeds
// Note: Due to CORS restrictions, in a production app you'd need a backend proxy
// For now, we'll use sample data and provide the structure for RSS integration

export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  publishedAt: string;
  source: string;
  category: 'local' | 'national' | 'international';
}

// RSS Feed URLs for real estate news (these would be used in a backend service)
export const RSS_FEEDS = {
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

// Sample news data for development
export const sampleNewsData: NewsArticle[] = [
  {
    id: '1',
    title: 'Mumbai Real Estate Market Shows Strong Recovery in Q4 2024',
    description: 'The Mumbai real estate market has demonstrated remarkable resilience with a 15% increase in property sales compared to the previous quarter.',
    link: 'https://example.com/mumbai-real-estate-recovery',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop',
    publishedAt: '2024-12-15T10:30:00Z',
    source: 'Real Estate Times',
    category: 'local'
  },
  {
    id: '2',
    title: 'Government Announces New Housing Policy for Affordable Homes',
    description: 'The central government has introduced a comprehensive housing policy aimed at making homeownership more accessible to middle-income families.',
    link: 'https://example.com/new-housing-policy',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop',
    publishedAt: '2024-12-14T14:20:00Z',
    source: 'National Property News',
    category: 'national'
  },
  {
    id: '3',
    title: 'Global Real Estate Investment Trends 2024',
    description: 'International investors are increasingly focusing on emerging markets, with India ranking among the top destinations for real estate investment.',
    link: 'https://example.com/global-real-estate-trends',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop',
    publishedAt: '2024-12-13T09:15:00Z',
    source: 'Global Property Insights',
    category: 'international'
  },
  {
    id: '4',
    title: 'Bangalore Tech Corridor Property Prices Surge 25%',
    description: 'Properties in Bangalore\'s tech corridor have seen unprecedented growth, driven by the expanding IT sector and improved infrastructure.',
    link: 'https://example.com/bangalore-tech-corridor',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop',
    publishedAt: '2024-12-12T16:45:00Z',
    source: 'Tech Real Estate Weekly',
    category: 'local'
  },
  {
    id: '5',
    title: 'RBI Maintains Interest Rates, Good News for Homebuyers',
    description: 'The Reserve Bank of India\'s decision to keep interest rates unchanged provides stability for the housing market and home loan borrowers.',
    link: 'https://example.com/rbi-interest-rates-housing',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
    publishedAt: '2024-12-11T11:30:00Z',
    source: 'Financial Property Review',
    category: 'national'
  },
  {
    id: '6',
    title: 'Singapore Real Estate Investment in India Reaches Record High',
    description: 'Singapore-based investors have increased their real estate investments in India by 40% this year, focusing on commercial and residential projects.',
    link: 'https://example.com/singapore-india-real-estate',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=250&fit=crop',
    publishedAt: '2024-12-10T13:20:00Z',
    source: 'International Property Journal',
    category: 'international'
  },
  {
    id: '7',
    title: 'Delhi NCR Luxury Housing Market Booms',
    description: 'The luxury housing segment in Delhi NCR has witnessed a surge in demand, with premium properties selling out within weeks of launch.',
    link: 'https://example.com/delhi-ncr-luxury-housing',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop',
    publishedAt: '2024-12-09T15:10:00Z',
    source: 'Luxury Real Estate Magazine',
    category: 'local'
  },
  {
    id: '8',
    title: 'Real Estate Regulatory Authority Introduces New Guidelines',
    description: 'RERA has announced updated guidelines to enhance transparency and protect homebuyers\' interests across the country.',
    link: 'https://example.com/rera-new-guidelines',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
    publishedAt: '2024-12-08T10:45:00Z',
    source: 'Real Estate Regulatory News',
    category: 'national'
  },
  {
    id: '9',
    title: 'Chennai Real Estate Market: Emerging Hotspots in 2024',
    description: 'Chennai\'s real estate market is witnessing growth in new areas, with IT corridors and metro connectivity driving property demand.',
    link: 'https://example.com/chennai-real-estate-hotspots',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop',
    publishedAt: '2024-12-07T12:30:00Z',
    source: 'Chennai Property Times',
    category: 'local'
  },
  {
    id: '10',
    title: 'US Real Estate Market Trends: Impact on Global Investments',
    description: 'Recent developments in the US real estate market are influencing global investment patterns, with implications for emerging markets.',
    link: 'https://example.com/us-real-estate-global-impact',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop',
    publishedAt: '2024-12-06T08:15:00Z',
    source: 'Global Real Estate Monitor',
    category: 'international'
  },
  {
    id: '11',
    title: 'Pune Real Estate: Affordable Housing Projects Gain Momentum',
    description: 'Pune\'s affordable housing segment is experiencing significant growth, with new projects being launched across the city.',
    link: 'https://example.com/pune-affordable-housing',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop',
    publishedAt: '2024-12-05T14:45:00Z',
    source: 'Pune Property News',
    category: 'local'
  },
  {
    id: '12',
    title: 'Real Estate Technology: AI and VR Transforming Property Viewing',
    description: 'Artificial Intelligence and Virtual Reality are revolutionizing how properties are marketed and viewed in the real estate industry.',
    link: 'https://example.com/real-estate-technology-ai-vr',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
    publishedAt: '2024-12-04T11:20:00Z',
    source: 'Tech Property Weekly',
    category: 'national'
  }
];

// Function to fetch news from RSS feeds
export const fetchNewsFromRSS = async (category?: 'local' | 'national' | 'international'): Promise<NewsArticle[]> => {
  try {
    // Try to fetch from backend API first
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';
    const categoryParam = category ? `/${category}` : '';
    const response = await fetch(`${apiUrl}/api/news${categoryParam}`);
    
    if (response.ok) {
      const data = await response.json();
      return data.articles;
    }
  } catch (error) {
    console.warn('Backend API not available, using sample data:', error);
  }
  
  // Fallback to sample data
  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (category) {
    return sampleNewsData.filter(article => article.category === category);
  }
  
  return sampleNewsData;
};

// Function to fetch news with pagination
export const fetchNewsWithPagination = async (
  page: number = 1,
  limit: number = 12,
  category?: 'local' | 'national' | 'international'
): Promise<{ articles: NewsArticle[]; total: number; hasMore: boolean }> => {
  const allArticles = await fetchNewsFromRSS(category);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const articles = allArticles.slice(startIndex, endIndex);
  
  return {
    articles,
    total: allArticles.length,
    hasMore: endIndex < allArticles.length
  };
};

// Function to search news articles
export const searchNews = async (query: string): Promise<NewsArticle[]> => {
  try {
    // Try to fetch from backend API first
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';
    const response = await fetch(`${apiUrl}/api/news/search/${encodeURIComponent(query)}`);
    
    if (response.ok) {
      const data = await response.json();
      return data.articles;
    }
  } catch (error) {
    console.warn('Backend API not available, using local search:', error);
  }
  
  // Fallback to local search
  const allArticles = await fetchNewsFromRSS();
  const searchTerm = query.toLowerCase();
  
  return allArticles.filter(article => 
    article.title.toLowerCase().includes(searchTerm) ||
    article.description.toLowerCase().includes(searchTerm) ||
    article.source.toLowerCase().includes(searchTerm)
  );
};

// Function to get trending news (most recent)
export const getTrendingNews = async (limit: number = 6): Promise<NewsArticle[]> => {
  const allArticles = await fetchNewsFromRSS();
  return allArticles
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}; 