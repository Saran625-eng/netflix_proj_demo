import axios from 'axios';

// Use relative URL to work with Vite proxy
const API_BASE_URL = '/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Search movies
export const searchMovies = async (searchTerm, page = 1) => {
  try {
    const response = await api.get('/movies', {
      params: { search: searchTerm, page },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error.response?.data || { error: 'Failed to search movies' };
  }
};

// Get movie details by ID
export const getMovieDetails = async (id) => {
  try {
    const response = await api.get(`/movies/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error.response?.data || { error: 'Failed to fetch movie details' };
  }
};

// Get trending/popular movies (default search)
export const getTrendingMovies = async (page = 1) => {
  return searchMovies('popular', page);
};

export default api;
