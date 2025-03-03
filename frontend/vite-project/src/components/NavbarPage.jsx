import React, { useState, useEffect } from "react"; // Added useEffect import
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [userRegistered, setUserRegistered] = useState(false);

  useEffect(() => {
    const checkUserRegistration = async () => {
      if (isAuthenticated && user) {
        try {
          const response = await fetch(`http://localhost:5000/users/${user.email}`);
          
          if (response.ok) {
            const data = await response.json();
            console.log("User Profile:", data);
            setUserRegistered(true);
          } else if (response.status === 404) {
            // User not found, so register
            const registerResponse = await fetch("http://localhost:5000/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: user.email,
                name: user.name,
                picture: user.picture
              }),
            });

            if (registerResponse.ok) {
              console.log("User registered successfully");
              setUserRegistered(true);
            }
          }
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      }
    };

    if (!userRegistered) {
      checkUserRegistration();
    }
  }, [isAuthenticated, user]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-red-900 to-black shadow-lg border-b border-red-700 z-50"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-white text-2xl font-bold cursor-pointer"
          >
            AnimeHub
          </motion.div>
        </Link>

        <div className="hidden md:flex space-x-6">
          <NavItem to="/" text="Home" />
          <NavItem to="/animelist" text="Anime List" />
          <NavItem to="/about" text="About Us" />

          {/* Authentication Button */}
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <Link to="/profile">
                <img src={user.picture} alt="User" className="w-8 h-8 rounded-full cursor-pointer hover:opacity-80 transition" />
              </Link>
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

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black flex flex-col space-y-4 p-4 text-white border-t border-red-700"
        >
          <NavItem to="/" text="Home" mobile onClick={toggleMenu} />
          <NavItem to="/animelist" text="Anime List" mobile onClick={toggleMenu} />
          <NavItem to="/about" text="About Us" mobile onClick={toggleMenu} />

          {/* Authentication Button in Mobile Menu */}
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <Link to="/profile">
                <img src={user.picture} alt="User" className="w-8 h-8 rounded-full cursor-pointer hover:opacity-80 transition" />
              </Link>
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
        </motion.div>
      )}
    </motion.nav>
  );
};

// NavItem Component
const NavItem = ({ to, text, mobile, onClick }) => (
  <Link to={to} onClick={onClick}>
    <motion.div
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 4px 10px rgba(255, 0, 0, 0.5)",
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
      className={`cursor-pointer text-white font-semibold px-4 py-2 rounded-md ${
        mobile ? "text-center" : ""
      }`}
    >
      {text}
    </motion.div>
  </Link>
);

export default Navbar;
