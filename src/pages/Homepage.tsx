import React, { useState } from 'react';
import { Search, Home1, TrendingUp, Star } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import Input from '../components/Input';
import { PropertyCard } from '../components/Card';
import PropertyDetail from '../components/PropertyDetail';
import { sampleProperties, stats } from '../utils/sampleData';
import type { Property } from '../utils/sampleData';

const Homepage: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
  };

  const handleClosePropertyDetail = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Find Your Dream Home in{' '}
              <span className="text-secondary-300">India</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Discover the perfect property from our curated collection of premium homes 
              across India's most sought-after locations.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-2 shadow-xl max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1">
                  <Input
                    placeholder="Search by location, property type..."
                    icon={<Search className="w-5 h-5" />}
                    className="border-0 focus:ring-0 text-gray-900"
                  />
                </div>
                <Button variant="secondary" className="whitespace-nowrap">
                  Search Properties
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of premium properties in prime locations 
              across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProperties.map((property) => (
              <PropertyCard
                key={property.id}
                image={property.image}
                title={property.title}
                location={property.location}
                price={property.price}
                beds={property.beds}
                baths={property.baths}
                sqft={property.sqft}
                badge={property.badge}
                badgeVariant={property.badgeVariant}
                onClick={() => handlePropertyClick(property)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Properties
            </Button>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose RealEstate?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've helped thousands of families find their perfect homes with our 
              trusted services and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary-50 rounded-2xl p-8 mb-6 group-hover:bg-primary-100 transition-colors">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {index === 0 && <Home className="w-8 h-8 text-white" />}
                    {index === 1 && <TrendingUp className="w-8 h-8 text-white" />}
                    {index === 2 && <Star className="w-8 h-8 text-white" />}
                    {index === 3 && <Star className="w-8 h-8 text-white" />}
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of satisfied customers who found their perfect property 
              with RealEstate. Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Browse Properties
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <PropertyDetail
          property={selectedProperty}
          onClose={handleClosePropertyDetail}
        />
      )}
    </div>
  );
};

export default Homepage; 