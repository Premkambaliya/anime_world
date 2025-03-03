import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AnimeEvent = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white p-10 flex flex-col items-center pt-20">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-5 left-5 px-4 py-2 bg-red-500 hover:bg-red-700 rounded-lg text-white shadow-lg transition"
      >
        ← Back
      </button>

      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-6 text-red-400 neon-glow"
      >
        Anime Event 2025 🎉
      </motion.h1>

      {/* Event Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg md:text-xl text-gray-300 max-w-3xl text-center mb-8"
      >
      
      </motion.p>

      {/* Event Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center max-w-6xl"
      >
        {eventFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 hover:border-red-400 hover:shadow-red-400/50 transition-all duration-300 transform hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold text-red-400">{feature.title}</h3>
            <p className="text-gray-400 mt-2">{feature.content}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-10 p-6 bg-gray-800/50 rounded-lg text-center shadow-lg border border-gray-700 hover:border-blue-400 hover:shadow-blue-400/50 transition-all duration-300"
      >
        <h2 className="text-2xl font-bold text-blue-400">Join the Event Now!</h2>

        <button className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-700 rounded-lg text-white shadow-lg transition">
          Register Now
        </button>
      </motion.div>
    </div>
  );
};

// Features List
const eventFeatures = [
  { title: "Cosplay Competition 🎭", content: "Show off your best anime cosplay and win amazing prizes!" },
  { title: "Live Anime Screenings 🎥", content: "Enjoy exclusive anime premieres and movie screenings!" },
  { title: "Anime Quiz & Trivia 🧠", content: "Test your anime knowledge and win exciting rewards!" },
  { title: "Meet Famous Cosplayers 🌟", content: "Interact with popular cosplayers and get autographs!" },
  { title: "Merchandise Stalls 🛒", content: "Buy exclusive anime merchandise, figures, and posters!" },
  { title: "Live Performances 🎶", content: "Enjoy live J-Pop performances and anime theme song concerts!" },
];

export default AnimeEvent;
