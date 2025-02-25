import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleExploreClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      navigate("/animelist"); // Page change after animation
    }, 500);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dczue3n9b/image/upload/v1740479632/gbysngrfbmk0gxnbenuv.png')`,
      }}
    >
      {/* Dark Overlay for Better Readability */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 0.3 }} 
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black"
      ></motion.div>
      
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-extrabold mb-4 text-red-500 drop-shadow-lg"
        >
          Welcome to AnimeHub
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl"
        >
          Your ultimate destination to explore and watch trending anime. Start your journey now!
        </motion.p>

        {/* Animated Explore Button */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <motion.button
            className="bg-red-600 hover:bg-red-700 px-8 py-3 text-lg rounded-lg shadow-lg transition duration-300"
            onClick={handleExploreClick}
            animate={isClicked ? { x: 100, opacity: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Explore Anime
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
