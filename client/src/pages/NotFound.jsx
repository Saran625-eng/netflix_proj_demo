import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-netflix-black px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-netflix-red">404</h1>
        <h2 className="text-2xl text-white font-semibold mt-4">Page Not Found</h2>
        <p className="text-gray-400 mt-2">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link 
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-netflix-red text-white font-semibold rounded hover:bg-red-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
