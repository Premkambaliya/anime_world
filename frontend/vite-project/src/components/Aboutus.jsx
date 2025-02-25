import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate(); // Navigation ke liye

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-10 flex flex-col items-center pt-30">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-10 text-red-400 neon-glow"
      >
        About AnimeHub
      </motion.h1>

      {/* Description Section */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-lg md:text-xl text-gray-300 max-w-3xl text-center mb-8 cursor-pointer"
      >
        AnimeHub is your one-stop platform for exploring and discovering your
        favorite anime. From trending series to timeless classics, we bring you
        the best anime experience with detailed info, reviews, and more.
      </motion.p>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center max-w-6xl"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-gray-800/40 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 hover:border-red-400 hover:shadow-red-400/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-red-400">{feature.title}</h3>
            <p className="text-gray-400 mt-2">{feature.content}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Event Section with Clickable Navigation */}
      <div
        className="mt-12 bg-gray-800 p-10 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 cursor-pointer"
        onClick={() => navigate("/anime-event-2025")} // Click karne pe navigate hoga
      >
        <h3 className="text-xl font-semibold text-red-400">Anime Event 2025</h3>
        <p className="text-gray-400 mt-2">
          " Join us for this exciting upcoming event, packed with fun activities and special surprises ! "
        </p>
      </div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16 text-center bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl border border-gray-700 hover:border-blue-400 hover:shadow-blue-400/50 transition-all duration-300"
      >
        <h2 className="text-2xl font-bold text-blue-400">Get in Touch</h2>
        <p className="text-gray-300 mt-2">
          Have questions or feedback? <br />
          <a href="mailto:contact@animehub.com" className="text-red-400 underline hover:text-red-500">
            Email Us
          </a>
        </p>
      </motion.div>
    </div>
  );
};

const features = [
  {
    title: "What is AnimeWorld?",
    content: "AnimeWorld is your one-stop platform for discovering and exploring the world of anime. Whether you're a hardcore otaku or a casual viewer, we bring you the best anime recommendations, genres, and reviews."
  },
  {
    title: "User Reviews",
    content: "Read and share reviews about your favorite anime."
  },
  {
    title: "Features of AnimeWorld",
    content: "✔ Browse anime by genre ✔ Read detailed anime descriptions & reviews ✔ Stay updated with trending anime ✔ Join a growing anime community"
  },
  {
    title: "Future Plans",
    content: "In the future, we plan to introduce personalized anime recommendations, user ratings, and a discussion forum for anime fans."
  },
  {
    title: "Meet the Team",
    content: "AnimeWorld is created by passionate anime fans who love sharing their knowledge with the community. If you have any suggestions, feel free to reach out!"
  },
  {
    title: "Our Mission & Vision",
    content: "Our goal is to create a community where anime lovers can explore different genres, discover new shows, and stay updated with the latest anime trends."
  }
];

export default AboutUs;
