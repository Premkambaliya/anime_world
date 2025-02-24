import React from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-10 flex flex-col items-center">
      
      <motion.h1 
        className="text-5xl font-extrabold text-center mb-10 text-red-400 neon-glow"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About AnimeWorld
      </motion.h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {sections.map((section, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-800/40 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-700 hover:border-red-400 hover:shadow-red-400/50 transition-all duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-red-400 mb-3">{section.title}</h2>
            <p className="text-gray-300">{section.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Contact Section */}
      <motion.div 
        className="mt-16 text-center bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl border border-gray-700 hover:border-blue-400 hover:shadow-blue-400/50 transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-blue-400">Get in Touch</h2>
        <p className="text-gray-300 mt-2">
          Have questions or feedback? <br />
          <a href="mailto:contact@animeworld.com" className="text-red-400 underline hover:text-red-500">
            Email Us
          </a>
        </p>
      </motion.div>
    </div>
  );
}

// Content Sections
const sections = [
  {
    title: "What is AnimeWorld?",
    content: "AnimeWorld is your one-stop platform for discovering and exploring the world of anime. Whether you're a hardcore otaku or a casual viewer, we bring you the best anime recommendations, genres, and reviews."
  },
  {
    title: "Our Mission & Vision",
    content: "Our goal is to create a community where anime lovers can explore different genres, discover new shows, and stay updated with the latest anime trends."
  },
  {
    title: "Features of AnimeWorld",
    content: "✔ Browse anime by genre \n✔ Read detailed anime descriptions & reviews \n✔ Stay updated with trending anime \n✔ Join a growing anime community"
  },
  {
    title: "Future Plans",
    content: "In the future, we plan to introduce personalized anime recommendations, user ratings, and a discussion forum for anime fans."
  },
  {
    title: "Meet the Team",
    content: "AnimeWorld is created by passionate anime fans who love sharing their knowledge with the community. If you have any suggestions, feel free to reach out!"
  }
];
