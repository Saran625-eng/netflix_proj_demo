import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  // Handle missing poster
  const posterSrc = movie.Poster !== 'N/A' 
    ? movie.Poster 
    : 'https://via.placeholder.com/300x450?text=No+Poster';

  return (
    <Link 
      to={`/movie/${movie.imdbID}`}
      className="movie-card group relative bg-netflix-dark rounded-lg overflow-hidden cursor-pointer"
    >
      {/* Poster */}
      <div className="aspect-[2/3] relative overflow-hidden">
        <img
          src={posterSrc}
          alt={movie.Title}
          className="w-full h-full object-cover transition duration-300 group-hover:opacity-80"
          loading="lazy"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-sm font-medium text-white line-clamp-2">
              {movie.Title}
            </p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-gray-400">{movie.Year}</span>
              <span className="text-xs px-2 py-1 bg-netflix-red/20 text-netflix-red rounded">
                {movie.Type}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Info - Visible on mobile or when not hovered */}
      <div className="p-3 md:hidden">
        <h3 className="text-sm font-medium text-white truncate">{movie.Title}</h3>
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs text-gray-400">{movie.Year}</span>
          <span className="text-xs px-2 py-1 bg-netflix-red/20 text-netflix-red rounded">
            {movie.Type}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
