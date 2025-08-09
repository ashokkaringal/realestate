import React, { useState, useEffect } from 'react';
import { MapPin, Globe, Search } from 'lucide-react';
import Container from '../components/Container';
import { NewsCard } from '../components/Card';
import { fetchNewsWithPagination, searchNews, type NewsArticle } from '../utils/newsService';

const News: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'local' | 'national' | 'international'>('all');
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (searchQuery.trim()) {
          const searchResults = await searchNews(searchQuery);
          setArticles(searchResults);
          setHasMore(false);
        } else {
          const category = selectedCategory === 'all' ? undefined : selectedCategory;
          const result = await fetchNewsWithPagination(currentPage, 12, category);
          setArticles(result.articles);
          setHasMore(result.hasMore);
        }
      } catch (err) {
        setError('Failed to fetch news articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [selectedCategory, searchQuery, currentPage]);

  const handleCategoryChange = (category: 'all' | 'local' | 'national' | 'international') => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setSearchQuery('');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const categories = [
    { id: 'all', name: 'All News', icon: <Globe className="w-4 h-4" /> },
    { id: 'local', name: 'Local', icon: <MapPin className="w-4 h-4" /> },
    { id: 'national', name: 'National', icon: <MapPin className="w-4 h-4" /> },
    { id: 'international', name: 'International', icon: <Globe className="w-4 h-4" /> }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <Container>
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading latest real estate news...</p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 lg:py-20">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Real Estate News & Insights
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Stay updated with the latest trends, market analysis, and developments 
              in the real estate industry across local, national, and international markets.
            </p>
          </div>
        </Container>
      </section>

      {/* News Content */}
      <section className="py-16 lg:py-20">
        <Container>
          {/* Search Bar */}
          <div className="mb-8">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search news articles..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id as any)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-center mb-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-600">{error}</p>
              </div>
            </div>
          )}

          {/* News Grid */}
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <NewsCard
                  key={article.id}
                  title={article.title}
                  description={article.description}
                  image={article.image}
                  link={article.link}
                  publishedAt={formatDate(article.publishedAt)}
                  source={article.source}
                  category={article.category}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Globe className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {searchQuery ? 'No search results found' : 'No news articles found'}
              </h3>
              <p className="text-gray-600">
                {searchQuery 
                  ? 'Try adjusting your search terms or browse by category.'
                  : 'Try selecting a different category or check back later for updates.'
                }
              </p>
            </div>
          )}

          {/* Load More Button */}
          {hasMore && articles.length > 0 && !searchQuery && (
            <div className="text-center mt-12">
              <button 
                onClick={handleLoadMore}
                disabled={loading}
                className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Loading...' : 'Load More Articles'}
              </button>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

export default News; 