import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';
import LoadingSpinner from '../components/LoadingSpinner';
import Footer from '../components/Footer';
import { searchMovies } from '../services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('batman');

  // Fetch movies
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await searchMovies(searchTerm);
        setMovies(data.movies || []);
      } catch (err) {
        setError(err.error || 'Failed to fetch movies');
        console.error('Error fetching movies:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term || 'batman');
  };

  return (
    <div className="min-h-screen bg-netflix-black">
      <Navbar onSearch={handleSearch} />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-black/80" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Unlimited movies, TV shows, and more.
          </h1>
          <p className="text-xl text-white mb-6">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-lg text-gray-300">
            Ready to watch? Search for your favorite movies below.
          </p>
        </div>
      </div>

      {/* Movies Section */}
      <div className="relative -mt-20 z-20 px-4 md:px-8 pb-16">
        <h2 className="text-2xl font-bold text-white mb-6">
          {searchTerm === 'batman' ? 'Trending Movies' : `Results for "${searchTerm}"`}
        </h2>
        
        {loading && (
          <div className="py-20">
            <LoadingSpinner size="large" />
          </div>
        )}

        {error && (
          <div className="py-20 text-center">
            <p className="text-red-500 text-lg">{error}</p>
            <button 
              onClick={() => handleSearch('batman')}
              className="mt-4 px-4 py-2 bg-netflix-red text-white rounded hover:bg-red-700 transition"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && movies.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-400 text-lg">No movies found. Try a different search.</p>
          </div>
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
