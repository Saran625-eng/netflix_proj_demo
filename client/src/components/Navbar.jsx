import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SearchBar from './SearchBar';

const Navbar = ({ onSearch }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 to-transparent">
      <div className="px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-netflix-red text-3xl font-bold tracking-tight">
            NETFLIX
          </h1>
        </Link>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:block flex-1 max-w-md mx-8">
          <SearchBar onSearch={onSearch} />
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Mobile Search - Visible only on mobile */}
          <div className="md:hidden">
            <SearchBar onSearch={onSearch} />
          </div>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition"
            >
              <div className="w-8 h-8 bg-netflix-red rounded flex items-center justify-center">
                <span className="text-sm font-semibold">
                  {user?.name?.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="hidden sm:block text-sm">{user?.name}</span>
            </button>

            {/* Dropdown */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg py-2 border border-gray-800">
                <div className="px-4 py-2 border-b border-gray-800">
                  <p className="text-sm text-gray-400">Signed in as</p>
                  <p className="text-sm font-medium truncate">{user?.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 transition"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
