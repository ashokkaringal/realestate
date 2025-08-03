# RealEstate - Modern Indian Real Estate Website

A modern, responsive real estate website built for the Indian market using React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, premium UI with smooth animations and hover effects
- **Mobile-First**: Fully responsive design that works on all devices
- **Indian Market Focus**: Pricing in ₹ Lakhs/Crores format, Indian locations
- **Component Library**: Reusable UI components with TypeScript support
- **Fast Performance**: Built with Vite for optimal development and build times
- **Custom Design System**: Tailwind CSS with custom color palette and spacing

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Button component with variants
│   ├── Card.tsx        # Card and PropertyCard components
│   ├── Input.tsx       # Form input component
│   ├── Badge.tsx       # Badge component for tags
│   ├── Container.tsx   # Layout container component
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── Layout.tsx      # Main layout wrapper
│   └── index.ts        # Component exports
├── pages/              # Page components
│   └── Homepage.tsx    # Homepage with hero, properties, stats
├── utils/              # Utility functions and data
│   └── sampleData.ts   # Sample property data
├── assets/             # Static assets
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Design System

### Colors
- **Primary**: Modern blue/teal palette (#0ea5e9 to #0c4a6e)
- **Secondary**: Orange accents for CTAs (#f97316 to #7c2d12)
- **Gray**: Neutral grays for text and backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Scale**: Responsive text sizes from xs to 6xl

### Components
- **Button**: Primary, secondary, and outline variants
- **Card**: Property cards with hover animations
- **Input**: Form inputs with focus states
- **Badge**: Property tags (Featured, New, etc.)
- **Container**: Max-width wrapper for content

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd realestate
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- Responsive navigation with mobile menu
- Adaptive property grid (1 column on mobile, 3 on desktop)
- Flexible hero section with stacked search bar on mobile
- Optimized typography and spacing for all screen sizes

## 🏠 Sample Data

The website includes 6 sample properties featuring:
- **Locations**: Mumbai, Bangalore, Delhi NCR, Pune
- **Property Types**: 2BHK, 3BHK apartments and villas
- **Pricing**: Realistic Indian pricing in ₹ Lakhs/Crores format
- **Amenities**: Common Indian property amenities
- **Badges**: Featured, New, Premium, Luxury, Smart Home tags

## 🎯 Key Features Implemented

- ✅ Vite + React + TypeScript setup
- ✅ Tailwind CSS with custom design system
- ✅ Lucide React icons integration
- ✅ Responsive header with mobile menu
- ✅ Hero section with search functionality
- ✅ Featured properties grid (3x2 layout)
- ✅ Stats section with animated counters
- ✅ Footer with contact information
- ✅ Mobile-first responsive design
- ✅ Smooth hover animations
- ✅ Indian market-specific content

## 🔮 Future Enhancements

- Property detail pages
- Advanced search and filtering
- Image carousels and galleries
- Contact forms and lead generation
- Property comparison tools
- User authentication and favorites
- Admin dashboard for property management

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

Built with ❤️ for the Indian real estate market
