import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-800 to-red-600 text-white py-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-2xl font-bold">AnimeHub</Link>
        
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/AnimePage" className="hover:text-gray-300">Anime Page</Link></li>
          <li><Link to="/genres" className="hover:text-gray-300">Genres</Link></li>
          <li><Link to="/AboutUs" className="hover:text-gray-300">About Us</Link></li>
        </ul>

        <div className="hidden md:block">
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <img src={user.picture} alt="User" className="w-8 h-8 rounded-full" />
              <button 
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} 
                className="bg-red-500 text-white font-bold rounded-full px-4 py-2 shadow-lg hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <button 
              onClick={() => loginWithRedirect()} 
              className="bg-white text-gray-800 font-bold rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition"
            >
              Sign Up / Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
