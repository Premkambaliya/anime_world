import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaDownload, FaBookmark, FaUser } from "react-icons/fa"; // Import icons

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-purple-500 to-pink-500 p-4 flex justify-around items-center shadow-lg">
      <Link to="/search" className="nav-link group">
        <FaSearch className="nav-icon text-white text-2xl group-hover:text-yellow-300 transition-all duration-200" />
      </Link>
      <Link to="/downloads" className="nav-link group">
        <FaDownload className="nav-icon text-white text-2xl group-hover:text-yellow-300 transition-all duration-200" />
      </Link>
      <Link to="/saved" className="nav-link group">
        <FaBookmark className="nav-icon text-white text-2xl group-hover:text-yellow-300 transition-all duration-200" />
      </Link>
      <Link to="/profile" className="nav-link group">
        <FaUser className="nav-icon text-white text-2xl group-hover:text-yellow-300 transition-all duration-200" />
      </Link>
    </nav>
  );
};

export default Navbar;
