export interface Property {
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
}

export const sampleProperties: Property[] = [
  {
    id: 1,
    title: "Luxury 3BHK Apartment",
    location: "Bandra West, Mumbai",
    price: "₹2.5 Cr",
    beds: 3,
    baths: 3,
    sqft: "1,850 sq ft",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop",
    badge: "Featured",
    badgeVariant: "primary",
    amenities: ["Parking", "Gym", "Swimming Pool", "Security"],
    propertyType: "Apartment",
    builtYear: "2020",
    lotSize: "2,000 sq ft",
    pricePerSqft: "₹13,514/sq ft",
    estimatedRent: "₹85,000/month",
    description: "This stunning 3BHK apartment in the heart of Bandra West offers luxury living at its finest. The property features modern amenities, high-quality finishes, and breathtaking views. Perfect for families looking for a premium lifestyle in one of Mumbai's most sought-after neighborhoods.",
    agent: {
      name: "Priya Sharma",
      phone: "+91 98765 43210",
      email: "priya.sharma@realestate.com",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 4.8,
      experience: "8 years"
    },
    history: {
      lastSold: "March 2020",
      lastSoldPrice: "₹1.8 Cr",
      propertyTax: "₹45,000/year"
    },
    features: ["Modular Kitchen", "Balcony", "Power Backup", "Lift"],
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Modern 2BHK Flat",
    location: "Koramangala, Bangalore",
    price: "₹85 Lakhs",
    beds: 2,
    baths: 2,
    sqft: "1,200 sq ft",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&h=300&fit=crop",
    badge: "New",
    badgeVariant: "success",
    amenities: ["Balcony", "Power Backup", "Lift", "Park"],
    propertyType: "Apartment",
    builtYear: "2022",
    lotSize: "1,500 sq ft",
    pricePerSqft: "₹7,083/sq ft",
    estimatedRent: "₹35,000/month",
    description: "A contemporary 2BHK flat in Koramangala, perfect for young professionals and small families. The property offers modern amenities, excellent connectivity, and a vibrant neighborhood with shopping, dining, and entertainment options just minutes away.",
    agent: {
      name: "Rahul Verma",
      phone: "+91 98765 43211",
      email: "rahul.verma@realestate.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 4.6,
      experience: "5 years"
    },
    history: {
      lastSold: "New Property",
      lastSoldPrice: "N/A",
      propertyTax: "₹25,000/year"
    },
    features: ["Smart Home System", "Gym", "Swimming Pool", "Cafeteria"],
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Premium 3BHK Villa",
    location: "Gurgaon, Delhi NCR",
    price: "₹3.2 Cr",
    beds: 3,
    baths: 4,
    sqft: "2,500 sq ft",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop",
    badge: "Premium",
    badgeVariant: "secondary",
    amenities: ["Garden", "Servant Quarter", "Car Parking", "Club House"],
    propertyType: "Villa",
    builtYear: "2019",
    lotSize: "4,000 sq ft",
    pricePerSqft: "₹12,800/sq ft",
    estimatedRent: "₹1,20,000/month",
    description: "An exclusive 3BHK villa in Gurgaon offering luxury living with private garden, servant quarters, and premium amenities. This property is perfect for families seeking privacy, space, and high-end lifestyle in the heart of Delhi NCR.",
    agent: {
      name: "Anjali Patel",
      phone: "+91 98765 43212",
      email: "anjali.patel@realestate.com",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 4.9,
      experience: "12 years"
    },
    history: {
      lastSold: "December 2019",
      lastSoldPrice: "₹2.8 Cr",
      propertyTax: "₹75,000/year"
    },
    features: ["Private Terrace", "Jacuzzi", "Home Theater", "Chef Kitchen"],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop"
    ]
  },
  {
    id: 4,
    title: "Cozy 2BHK Apartment",
    location: "Pune, Maharashtra",
    price: "₹65 Lakhs",
    beds: 2,
    baths: 2,
    sqft: "1,100 sq ft",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop",
    amenities: ["Modular Kitchen", "Balcony", "Security", "Water Supply"],
    propertyType: "Apartment",
    builtYear: "2021",
    lotSize: "1,200 sq ft",
    pricePerSqft: "₹5,909/sq ft",
    estimatedRent: "₹28,000/month",
    description: "A comfortable 2BHK apartment in Pune, ideal for families and professionals. The property offers all essential amenities, good connectivity, and a peaceful neighborhood perfect for raising a family.",
    agent: {
      name: "Suresh Kumar",
      phone: "+91 98765 43213",
      email: "suresh.kumar@realestate.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 4.5,
      experience: "6 years"
    },
    history: {
      lastSold: "January 2021",
      lastSoldPrice: "₹55 Lakhs",
      propertyTax: "₹20,000/year"
    },
    features: ["Parking", "Gym", "Swimming Pool", "Security"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop"
    ]
  },
  {
    id: 5,
    title: "Luxury 4BHK Penthouse",
    location: "Juhu, Mumbai",
    price: "₹5.8 Cr",
    beds: 4,
    baths: 5,
    sqft: "3,200 sq ft",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=300&fit=crop",
    badge: "Luxury",
    badgeVariant: "primary",
    amenities: ["Private Terrace", "Jacuzzi", "Home Theater", "Chef Kitchen"],
    propertyType: "Penthouse",
    builtYear: "2023",
    lotSize: "3,500 sq ft",
    pricePerSqft: "₹18,125/sq ft",
    estimatedRent: "₹2,50,000/month",
    description: "An ultra-luxurious 4BHK penthouse in Juhu, Mumbai's most prestigious address. This property offers panoramic sea views, private terrace, home theater, and world-class amenities. Perfect for those seeking the ultimate luxury lifestyle.",
    agent: {
      name: "Meera Kapoor",
      phone: "+91 98765 43214",
      email: "meera.kapoor@realestate.com",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      rating: 4.9,
      experience: "15 years"
    },
    history: {
      lastSold: "New Property",
      lastSoldPrice: "N/A",
      propertyTax: "₹1,20,000/year"
    },
    features: ["Balcony", "Power Backup", "Lift", "Park"],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop"
    ]
  },
  {
    id: 6,
    title: "Smart 2BHK Flat",
    location: "Electronic City, Bangalore",
    price: "₹72 Lakhs",
    beds: 2,
    baths: 2,
    sqft: "1,150 sq ft",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=500&h=300&fit=crop",
    badge: "Smart Home",
    badgeVariant: "success",
    amenities: ["Smart Home System", "Gym", "Swimming Pool", "Cafeteria"],
    propertyType: "Apartment",
    builtYear: "2022",
    lotSize: "1,300 sq ft",
    pricePerSqft: "₹6,261/sq ft",
    estimatedRent: "₹32,000/month",
    description: "A modern smart home 2BHK flat in Electronic City, Bangalore. This property features cutting-edge smart home technology, energy-efficient systems, and modern amenities perfect for tech-savvy professionals.",
    agent: {
      name: "Arjun Reddy",
      phone: "+91 98765 43215",
      email: "arjun.reddy@realestate.com",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 4.7,
      experience: "7 years"
    },
    history: {
      lastSold: "New Property",
      lastSoldPrice: "N/A",
      propertyTax: "₹22,000/year"
    },
    features: ["Garden", "Servant Quarter", "Car Parking", "Club House"],
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop"
    ]
  }
];

export const stats = [
  {
    label: "Properties Sold",
    value: "2,500+",
    description: "Happy families found their dream homes"
  },
  {
    label: "Cities Covered",
    value: "25+",
    description: "Across major Indian cities"
  },
  {
    label: "Years Experience",
    value: "15+",
    description: "Trusted real estate partner"
  },
  {
    label: "Customer Rating",
    value: "4.8/5",
    description: "Based on 10,000+ reviews"
  }
]; 