import React, { useState, useEffect } from 'react';
import { Rocket, Satellite, ArrowRight, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NewsArticle {
  id: string;
  title: string;
  description: string;
  date: string;
  source: string;
  image: string;
  category: 'space' | 'satellite';
  url: string;
}

const News = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchSpaceNews = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/?limit=12');
      if (response.ok) {
        const data = await response.json();
        const processedArticles: NewsArticle[] = data.results.map((article: any) => ({
          id: article.id.toString(),
          title: article.title || 'Space Technology Update',
          description: article.summary || 'Latest space technology updates.',
          date: new Date(article.published_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
          source: article.news_site || 'Space News',
          image: article.image_url || '',
          category: article.title.toLowerCase().includes('satellite') ? 'satellite' : 'space',
          url: article.url || '#',
        }));
        setArticles(processedArticles);
      } else {
        setArticles(getMockArticles());
      }
    } catch (err) {
      console.error('API failed, using mock data');
      setArticles(getMockArticles());
    } finally {
      setLoading(false);
    }
  };

  const getMockArticles = (): NewsArticle[] => [];

  const getCategoryIcon = (category: 'space' | 'satellite') =>
    category === 'space' ? (
      <Rocket className="w-5 h-5 text-orange-400" />
    ) : (
      <Satellite className="w-5 h-5 text-blue-400" />
    );

  useEffect(() => {
    fetchSpaceNews();
  }, []);

  return (
    <section id="news" className="section-padding relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="cloud-layer cloud-1"></div>
        <div className="cloud-layer cloud-2"></div>
        <div className="cloud-layer cloud-3"></div>
        <div className="cloud-layer cloud-4"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Latest Space Technology News
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto rounded-full mb-6"></div>

          <Button
            onClick={fetchSpaceNews}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Loading News...
              </>
            ) : (
              <>
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh News
              </>
            )}
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(loading ? Array(6).fill(null) : articles.slice(1)).map((article, index) =>
            loading ? (
              <div key={index} className="glass-card p-6 animate-pulse">
                <div className="aspect-video bg-blue-800/30 rounded-lg mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-blue-800/30 rounded w-3/4"></div>
                  <div className="h-4 bg-blue-800/30 rounded w-1/2"></div>
                  <div className="h-12 bg-blue-800/30 rounded"></div>
                </div>
              </div>
            ) : (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 hover-lift animate-fade-in-up group cursor-pointer transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                    }}
                  />
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {getCategoryIcon(article.category)}
                    <span className="text-sm text-sky-300 font-medium">{article.source}</span>
                  </div>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-sky-300 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  {article.description}
                </p>

                <Button
                  variant="ghost"
                  className="text-orange-400 hover:text-orange-300 hover:bg-orange-400/10 p-0 h-auto font-medium group"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default News;
