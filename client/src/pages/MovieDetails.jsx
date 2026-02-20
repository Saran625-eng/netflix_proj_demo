import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LoadingSpinner from '../components/LoadingSpinner';
import { getMovieDetails } from '../services/api';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch movie details
  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!id) {
        setError('No movie ID provided');
        setLoading(false);
        return;
      }
      
      setLoading(true);
      setError(null);
      
      try {
        const data = await getMovieDetails(id);
        if (data.Error) {
          setError(data.Error);
        } else {
          setMovie(data);
        }
      } catch (err) {
        setError(err.error || 'Failed to fetch movie details');
        console.error('Error fetching movie details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  // Handle missing poster
  const posterSrc = movie?.Poster && movie?.Poster !== 'N/A' 
    ? movie.Poster 
    : 'https://via.placeholder.com/300x450?text=No+Poster';

  if (loading) {
    return (
      <div className="min-h-screen bg-netflix-black">
        <Navbar />
        <div className="pt-24 flex items-center justify-center min-h-screen">
          <LoadingSpinner size="large" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-netflix-black">
        <Navbar />
        <div className="pt-24 flex flex-col items-center justify-center min-h-screen">
          <p className="text-red-500 text-lg mb-4">{error}</p>
          <button 
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-netflix-red text-white rounded hover:bg-red-700 transition"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-netflix-black">
        <Navbar />
        <div className="pt-24 flex flex-col items-center justify-center min-h-screen">
          <p className="text-white text-lg mb-4">Movie not found</p>
          <button 
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-netflix-red text-white rounded hover:bg-red-700 transition"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-netflix-black">
      <Navbar />
      
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-20 left-4 z-40 flex items-center px-4 py-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      {/* Movie Details */}
      <div className="pt-20">
        {/* Background Banner */}
        <div className="relative h-[50vh]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${posterSrc})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-netflix-black via-netflix-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-netflix-black" />
        </div>

        {/* Content */}
        <div className="relative -mt-40 z-10 px-4 md:px-8 pb-16">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Poster */}
            <div className="flex-shrink-0">
              <img
                src={posterSrc}
                alt={movie.Title || 'Movie'}
                className="w-full md:w-80 rounded-lg shadow-2xl"
              />
            </div>

            {/* Details */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {movie.Title || 'Unknown Title'}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="text-gray-400">{movie.Year || 'N/A'}</span>
                <span className="text-gray-400">{movie.Runtime || 'N/A'}</span>
                <span className="text-gray-400">{movie.Rated || 'N/A'}</span>
                {movie.Genre?.split(',').map((g, i) => (
                  <span key={i} className="px-3 py-1 text-sm border border-gray-600 rounded-full text-gray-300">
                    {g.trim()}
                  </span>
                ))}
              </div>

              {/* Ratings */}
              {movie.imdbRating && movie.imdbRating !== 'N/A' && (
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-2xl mr-2">★</span>
                    <span className="text-white text-xl font-bold">{movie.imdbRating}</span>
                    <span className="text-gray-400 text-sm ml-1">/10</span>
                  </div>
                  <span className="text-gray-400">{movie.imdbVotes || 'N/A'} votes</span>
                </div>
              )}

              {/* Plot */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-2">Plot</h2>
                <p className="text-gray-300 leading-relaxed">{movie.Plot || 'No plot available'}</p>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {movie.Director && movie.Director !== 'N/A' && (
                  <div>
                    <span className="text-gray-400">Director: </span>
                    <span className="text-white">{movie.Director}</span>
                  </div>
                )}
                {movie.Writer && movie.Writer !== 'N/A' && (
                  <div>
                    <span className="text-gray-400">Writer: </span>
                    <span className="text-white">{movie.Writer}</span>
                  </div>
                )}
                {movie.Actors && movie.Actors !== 'N/A' && (
                  <div>
                    <span className="text-gray-400">Cast: </span>
                    <span className="text-white">{movie.Actors}</span>
                  </div>
                )}
                {movie.Language && movie.Language !== 'N/A' && (
                  <div>
                    <span className="text-gray-400">Language: </span>
                    <span className="text-white">{movie.Language}</span>
                  </div>
                )}
                {movie.Country && movie.Country !== 'N/A' && (
                  <div>
                    <span className="text-gray-400">Country: </span>
                    <span className="text-white">{movie.Country}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
