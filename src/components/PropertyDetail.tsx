import React from 'react';
import { X, Phone, Mail, MapPin, Star } from 'lucide-react';
import Button from './Button';

interface PropertyDetailProps {
  property: {
    id: number;
    title: string;
    location: string;
    price: string;
    beds: number;
    baths: number;
    sqft: string;
    image: string;
    badge?: string;
    badgeVariant?: 'primary' | 'secondary' | 'success';
    amenities: string[];
    // Additional detailed properties
    propertyType: string;
    builtYear: string;
    lotSize: string;
    pricePerSqft: string;
    estimatedRent: string;
    description: string;
    agent: {
      name: string;
      phone: string;
      email: string;
      image: string;
      rating: number;
      experience: string;
    };
    history: {
      lastSold: string;
      lastSoldPrice: string;
      propertyTax: string;
    };
    features: string[];
    images: string[];
  };
  onClose: () => void;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property, onClose }) => {
  const badgeClasses = {
    primary: 'bg-primary-100 text-primary-800',
    secondary: 'bg-secondary-100 text-secondary-800',
    success: 'bg-green-100 text-green-800',
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">{property.title}</h1>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Property Images */}
              <div className="mb-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-80 object-cover rounded-xl"
                    />
                  </div>
                  {property.images?.slice(0, 4).map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${property.title} ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>

              {/* Property Overview */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Property Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{property.beds}</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{property.baths}</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{property.sqft}</div>
                    <div className="text-sm text-gray-600">Square Feet</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{property.lotSize}</div>
                    <div className="text-sm text-gray-600">Lot Size</div>
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Property Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Basic Information</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Property Type:</span>
                        <span className="font-medium">{property.propertyType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Built Year:</span>
                        <span className="font-medium">{property.builtYear}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Price per Sq Ft:</span>
                        <span className="font-medium">{property.pricePerSqft}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Estimated Rent:</span>
                        <span className="font-medium">{property.estimatedRent}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Property History</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Last Sold:</span>
                        <span className="font-medium">{property.history.lastSold}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Last Sold Price:</span>
                        <span className="font-medium">{property.history.lastSoldPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Property Tax:</span>
                        <span className="font-medium">{property.history.propertyTax}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              {/* Features & Amenities */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Features & Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Price Section */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary-600 mb-2">{property.price}</div>
                <div className="text-sm text-gray-600 mb-4">{property.pricePerSqft} per sq ft</div>
                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    Schedule Viewing
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    Contact Agent
                  </Button>
                </div>
              </div>

              {/* Agent Information */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Listed by</h3>
                <div className="flex items-center mb-4">
                  <img
                    src={property.agent.image}
                    alt={property.agent.name}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{property.agent.name}</div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {property.agent.rating} ({property.agent.experience})
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    {property.agent.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    {property.agent.email}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Location</h3>
                <div className="flex items-start text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{property.location}</span>
                </div>
              </div>

              {/* Property Highlights */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Property Highlights</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Property Type</span>
                    <span className="font-medium">{property.propertyType}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Built Year</span>
                    <span className="font-medium">{property.builtYear}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Lot Size</span>
                    <span className="font-medium">{property.lotSize}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Estimated Rent</span>
                    <span className="font-medium">{property.estimatedRent}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail; 