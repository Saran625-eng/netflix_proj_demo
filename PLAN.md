# Netflix-Inspired Full Stack Web Application Plan

## Project Overview
A Netflix-inspired movie browsing application with authentication and OMDB API integration.

## Tech Stack
- **Frontend**: React.js (Vite), React Router DOM, Axios, Tailwind CSS
- **Backend**: Node.js, Express
- **Authentication**: LocalStorage
- **API**: OMDB API (key: 5de543b)

## Folder Structure
```
netflix_proj_demo/
├── server/
│   ├── .env
│   ├── package.json
│   └── server.js
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── MovieCard.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── MovieDetails.jsx
│   │   │   └── NotFound.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
└── README.md
```

## Implementation Plan

### Phase 1: Backend Setup
1. Create server/package.json with dependencies
2. Create .env file with OMDB_API_KEY
3. Create server.js with Express setup, CORS, and routes
4. Create GET /api/movies?search=movieName endpoint

### Phase 2: Frontend Setup
1. Initialize Vite + React project
2. Configure Tailwind CSS
3. Set up project structure

### Phase 3: Authentication
1. Create AuthContext for managing auth state
2. Create Login page with validation
3. Create Signup page with form
4. Implement ProtectedRoute component
5. Add logout functionality

### Phase 4: Core Features
1. Create Navbar with search and logout
2. Create Home page with movie grid
3. Create MovieCard component
4. Create MovieDetails page
5. Implement debounced search

### Phase 5: Polish
1. Add loading spinners
2. Handle errors gracefully
3. Make responsive design
4. Add 404 page

## API Integration
- Backend route: GET /api/movies?search=movieName
- Frontend calls backend, not OMDB directly (protects API key)
- Default search: "trending" movies on initial load

## Setup Instructions
1. Install backend: cd server && npm install
2. Install frontend: cd client && npm install
3. Run backend: node server.js (port 5000)
4. Run frontend: npm run dev (port 5173)
