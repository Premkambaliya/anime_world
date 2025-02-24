import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();  // Initialize the navigate hook

  const handleSignUpClick = () => {
    navigate('/signup');  // Navigate to the Sign Up page
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-800 to-red-600 text-white py-4 shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          <Link to="/" className="text-2xl font-bold">
            AnimeHub
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-300 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/AnimePage" className="hover:text-gray-300 transition duration-300">
                Anime Page
              </Link>
            </li>
            <li>
              <Link to="/genres" className="hover:text-gray-300 transition duration-300">
                Genres
              </Link>
            </li>
            <li>
              <Link to="/Aboutus" className="hover:text-gray-300 transition duration-300">
              Aboutus
              </Link>
            </li>
          </ul>
          <div className="hidden md:block">
            <button
              onClick={handleSignUpClick}  // Add the onClick event to trigger navigation
              className="bg-white text-gray-800 font-bold rounded-full my-2 py-2 px-4 shadow-lg hover:shadow-xl transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      {/* <div className="h-16"></div> */}
    </>
  );
};

export default Navbar;
