# Netflix-Inspired Full Stack Web Application

A Full Stack Netflix-inspired movie browsing application with authentication and OMDB API integration.

## Tech Stack

- **Frontend**: React.js (Vite), React Router DOM, Axios, Tailwind CSS
- **Backend**: Node.js, Express
- **Authentication**: LocalStorage (frontend-based)
- **API**: OMDB API

## Features

- 🔐 User Authentication (Signup/Login)
- 🔒 Protected Routes
- 🎬 Movie Search with Debounce
- 📱 Responsive Design
- ✨ Netflix-style Dark UI
- 🎯 Movie Details Page
- ⭐ IMDB Ratings Display

## Project Structure

```
netflix_proj_demo/
├── server/                 # Backend
│   ├── .env              # Environment variables
│   ├── package.json      # Server dependencies
│   └── server.js         # Express server
├── client/               # Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API services
│   │   ├── context/      # Auth context
│   │   ├── App.jsx       # Main app component
│   │   └── main.jsx      # Entry point
│   ├── package.json      # Client dependencies
│   ├── vite.config.js    # Vite configuration
│   ├── tailwind.config.js
│   └── postcss.config.js
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**

2. **Install Backend Dependencies**
   
```
bash
   cd server
   npm install
   
```

3. **Install Frontend Dependencies**
   
```
bash
   cd client
   npm install
   
```

### Running the Application

1. **Start the Backend Server**
   
```
bash
   cd server
   npm start
   
```
   Server will run on http://localhost:5000

2. **Start the Frontend Development Server**
   
```
bash
   cd client
   npm run dev
   
```
   Client will run on http://localhost:5173

### Usage

1. Open http://localhost:5173 in your browser
2. Click "Sign up now" to create an account
3. Enter your name, email, and password
4. After signup, you'll be redirected to the home page
5. Search for movies using the search bar
6. Click on any movie card to view details
7. Click "Sign Out" to logout

## API Endpoints

- `GET /api/movies?search=term` - Search movies
- `GET /api/movies/:id` - Get movie details by IMDb ID
- `GET /` - Health check

## Environment Variables

### Server (.env)
```
OMDB_API_KEY=5de543b
PORT=5000
```

## Key Features Implementation

- **Debounced Search**: 500ms delay to reduce API calls
- **LocalStorage**: User credentials and session stored locally
- **Protected Routes**: Only authenticated users can access home/details
- **Error Handling**: Graceful error messages and fallback UI
- **Loading States**: Spinners while fetching data

## License

This is a demo application for educational purposes.

## Credits

- OMDB API: https://www.omdbapi.com/
- Netflix for design inspiration
