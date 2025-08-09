# RealEstate Website

A modern real estate website built with React, TypeScript, and Tailwind CSS. Features property listings, search functionality, and real estate news integration.

## Features

- **Property Listings**: Browse and search for properties with detailed information
- **Real Estate News**: Stay updated with the latest real estate news from local, national, and international sources
- **Responsive Design**: Modern, mobile-friendly interface
- **Search & Filter**: Advanced search and filtering capabilities
- **RSS Integration**: Real-time news from multiple RSS feeds

## News Features

The website includes a comprehensive news section that:

- Displays real estate news from multiple sources
- Categorizes news by Local, National, and International
- Provides search functionality
- Shows news with cover images and descriptions
- Links directly to original articles
- Supports pagination for better performance

## Tech Stack

### Frontend
- React 19
- TypeScript
- Tailwind CSS
- React Router DOM
- Lucide React (Icons)

### Backend (Optional)
- Node.js
- Express.js
- RSS Parser
- CORS support

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Backend Setup (Optional)

The backend provides RSS feed integration for real-time news. If you want to use real RSS feeds instead of sample data:

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Start the RSS proxy server:
```bash
npm start
```

The backend will run on `http://localhost:3001`

### Environment Variables

Create a `.env` file in the root directory to configure the API URL:

```env
REACT_APP_API_URL=http://localhost:3001
```

## Project Structure

```
realestate/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Page components
│   │   ├── Homepage.tsx    # Main homepage
│   │   └── News.tsx        # News page
│   ├── utils/              # Utility functions
│   │   ├── sampleData.ts   # Sample property data
│   │   └── newsService.ts  # News API service
│   └── App.tsx             # Main app component
├── server/                 # Backend RSS proxy
│   ├── rss-proxy.js        # Express server
│   └── package.json        # Backend dependencies
└── package.json            # Frontend dependencies
```

## News Sources

The news section aggregates content from various real estate RSS feeds:

### Local News
- MoneyControl Real Estate
- 99acres News
- PropMart News

### National News
- LiveMint Real Estate
- Business Standard Real Estate
- Financial Express

### International News
- Reuters Real Estate
- Bloomberg Real Estate
- Financial Times Real Estate

## API Endpoints

When the backend is running, the following endpoints are available:

- `GET /api/news` - Get all news articles
- `GET /api/news/:category` - Get news by category (local, national, international)
- `GET /api/news/search/:query` - Search news articles
- `GET /api/health` - Health check endpoint

## Customization

### Adding New RSS Feeds

To add new RSS feeds, edit the `RSS_FEEDS` object in `server/rss-proxy.js`:

```javascript
const RSS_FEEDS = {
  local: [
    // Add your local RSS feeds here
  ],
  national: [
    // Add your national RSS feeds here
  ],
  international: [
    // Add your international RSS feeds here
  ]
};
```

### Styling

The project uses Tailwind CSS for styling. You can customize the design by modifying:

- `src/index.css` - Global styles and custom utilities
- `tailwind.config.js` - Tailwind configuration
- Component-specific styles in individual component files

## Deployment

### Frontend Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Backend Deployment

The backend can be deployed to any Node.js hosting platform (Heroku, Vercel, Railway, etc.).

Set the `PORT` environment variable for production deployment.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository.
