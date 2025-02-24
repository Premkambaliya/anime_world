// import React from "react";
// import { motion } from "framer-motion";

// export default function Genres() {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-10">
      
//       {/* Page Title */}
//       <motion.h1 
//         className="text-5xl font-extrabold text-center mb-10 text-red-400 neon-glow"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Explore Anime Genres
//       </motion.h1>

//       {/* Genres Grid */}
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto">
//         {genres.map((genre, index) => (
//           <motion.div 
//             key={index} 
//             className="p-6 bg-gray-800/40 backdrop-blur-lg rounded-xl shadow-lg border border-gray-700 hover:border-red-400 hover:shadow-red-400/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1, duration: 0.5 }}
//           >
//             <h2 className="text-2xl font-bold text-red-400">{genre.name}</h2>
//             <p className="text-gray-300 text-sm mt-2">{genre.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // Anime Genres Data
// const genres = [
//   { name: "Action", description: "High-energy battles, fast-paced fights, and intense scenes." },
//   { name: "Adventure", description: "Embark on thrilling journeys and explore new worlds." },
//   { name: "Comedy", description: "Laughter, fun, and lighthearted storytelling." },
//   { name: "Drama", description: "Emotional stories that touch the heart and soul." },
//   { name: "Fantasy", description: "Magical worlds, mythical creatures, and epic quests." },
//   { name: "Horror", description: "Spine-chilling anime filled with suspense and fear." },
//   { name: "Isekai", description: "Transported to another world for adventures beyond imagination." },
//   { name: "Mecha", description: "Giant robots, sci-fi battles, and futuristic tech." },
//   { name: "Mystery", description: "Unravel secrets, solve crimes, and uncover hidden truths." },
//   { name: "Romance", description: "Heartwarming stories of love and relationships." },
//   { name: "Sci-Fi", description: "Advanced technology, space travel, and futuristic themes." },
//   { name: "Slice of Life", description: "Real-life moments, relatable characters, and everyday experiences." },
//   { name: "Sports", description: "Competitive matches, intense rivalries, and inspiring victories." },
//   { name: "Supernatural", description: "Ghosts, spirits, and unexplained phenomena." },
// ];

import React from "react";
import { motion } from "framer-motion";

export default function Genres() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-10 pt-24">
      {/* Added pt-24 to push content down (Adjust based on navbar height) */}
      
      {/* Page Title */}
      <motion.h1 
        className="text-5xl font-extrabold text-center mb-10 text-red-400 neon-glow"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Explore Anime Genres
      </motion.h1>

      {/* Genres Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto">
        {genres.map((genre, index) => (
          <motion.div 
            key={index} 
            className="p-6 bg-gray-800/40 backdrop-blur-lg rounded-xl shadow-lg border border-gray-700 hover:border-red-400 hover:shadow-red-400/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-red-400">{genre.name}</h2>
            <p className="text-gray-300 text-sm mt-2">{genre.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Anime Genres Data
const genres = [
  { name: "Action", description: "High-energy battles, fast-paced fights, and intense scenes." },
  { name: "Adventure", description: "Embark on thrilling journeys and explore new worlds." },
  { name: "Comedy", description: "Laughter, fun, and lighthearted storytelling." },
  { name: "Drama", description: "Emotional stories that touch the heart and soul." },
  { name: "Fantasy", description: "Magical worlds, mythical creatures, and epic quests." },
  { name: "Horror", description: "Spine-chilling anime filled with suspense and fear." },
  { name: "Isekai", description: "Transported to another world for adventures beyond imagination." },
  { name: "Mecha", description: "Giant robots, sci-fi battles, and futuristic tech." },
  { name: "Mystery", description: "Unravel secrets, solve crimes, and uncover hidden truths." },
  { name: "Romance", description: "Heartwarming stories of love and relationships." },
  { name: "Sci-Fi", description: "Advanced technology, space travel, and futuristic themes." },
  { name: "Slice of Life", description: "Real-life moments, relatable characters, and everyday experiences." },
  { name: "Sports", description: "Competitive matches, intense rivalries, and inspiring victories." },
  { name: "Supernatural", description: "Ghosts, spirits, and unexplained phenomena." },
];
