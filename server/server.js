const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config({ path: __dirname + '/.env' });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// OMDB API Base URL
const OMDB_API_URL = 'https://www.omdbapi.com/';

// Route to search movies
app.get('/api/movies', async (req, res) => {
  try {
    const { search = 'batman', page = 1 } = req.query;
    
    if (!search) {
      return res.status(400).json({ error: 'Search term is required' });
    }

    const response = await axios.get(OMDB_API_URL, {
      params: {
        apikey: process.env.OMDB_API_KEY,
        s: search,
        page: page,
        type: 'movie'
      }
    });

    if (response.data.Response === 'False') {
      return res.status(404).json({ 
        error: response.data.Error || 'No movies found' 
      });
    }

    // Return clean JSON response
    res.json({
      movies: response.data.Search || [],
      totalResults: response.data.totalResults || 0,
      page: parseInt(page)
    });
  } catch (error) {
    console.error('Error fetching movies:', error.message);
    res.status(500).json({ error: 'Failed to fetch movies from OMDB API' });
  }
});

// Route to get movie details by IMDb ID
app.get('/api/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'Movie ID is required' });
    }

    const response = await axios.get(OMDB_API_URL, {
      params: {
        apikey: process.env.OMDB_API_KEY,
        i: id,
        plot: 'full'
      }
    });

    if (response.data.Response === 'False') {
      return res.status(404).json({ 
        error: response.data.Error || 'Movie not found' 
      });
    }

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching movie details:', error.message);
    res.status(500).json({ error: 'Failed to fetch movie details from OMDB API' });
  }
});

// Default route
app.get('/', (req, res) => {
  res.json({ message: 'Netflix Movie API is running', endpoints: ['/api/movies', '/api/movies/:id'] });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
