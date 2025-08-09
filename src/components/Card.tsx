import React from 'react';
import { ExternalLink, Calendar, MapPin, Globe } from 'lucide-react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  const classes = `bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden ${onClick ? 'cursor-pointer' : ''} ${className}`;
  
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  badge?: string;
  badgeVariant?: 'primary' | 'secondary' | 'success';
  onClick?: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  location,
  price,
  beds,
  baths,
  sqft,
  badge,
  badgeVariant = 'primary',
  onClick,
}) => {
  const badgeClasses = {
    primary: 'bg-primary-100 text-primary-800',
    secondary: 'bg-secondary-100 text-secondary-800',
    success: 'bg-green-100 text-green-800',
  };

  return (
    <Card onClick={onClick} className="group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <div className="absolute top-4 left-4">
            <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full ${badgeClasses[badgeVariant]}`}>
              {badge}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-primary-600">{price}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <span>{sqft}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

interface NewsCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  publishedAt: string;
  source: string;
  category: 'local' | 'national' | 'international';
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  image,
  link,
  publishedAt,
  source,
  category,
}) => {
  const categoryConfig = {
    local: { label: 'Local', icon: <MapPin className="w-3 h-3" />, color: 'bg-blue-100 text-blue-800' },
    national: { label: 'National', icon: <MapPin className="w-3 h-3" />, color: 'bg-green-100 text-green-800' },
    international: { label: 'International', icon: <Globe className="w-3 h-3" />, color: 'bg-purple-100 text-purple-800' },
  };

  const config = categoryConfig[category];

  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card onClick={handleClick} className="group h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium rounded-full ${config.color}`}>
            {config.icon}
            {config.label}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-black bg-opacity-50 text-white p-2 rounded-full group-hover:bg-opacity-70 transition-all">
            <ExternalLink className="w-4 h-4" />
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{publishedAt}</span>
          <span className="mx-2">•</span>
          <span className="font-medium text-gray-700">{source}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
          {description}
        </p>
        
        <div className="mt-auto">
          <div className="flex items-center text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors">
            <span>Read Full Article</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export { Card, PropertyCard, NewsCard };
export default Card; 