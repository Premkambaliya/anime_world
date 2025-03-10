// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import { motion } from "framer-motion";
// import A1 from '../assets/sololeveling.png';
// import A2 from '../assets/igot.png';
// import A3 from '../assets/classroom.png';
// import A4 from '../assets/yourname1.png';
// import A5 from '../assets/dayswith1.png';
// import A6 from '../assets/horimiya1.png';
// import A7 from '../assets/bluelock.png';
// import A8 from '../assets/demonslayer.png';
// import A9 from '../assets/viralhit.png';
// import A10 from '../assets/Haikyuu.png';

// const animeData = [
//   { name: "Solo Leveling", genres: ["Action", "Fantasy"], route: "/SoloLeveling" },
//   { name: "I Got Cheat Skill", genres: ["Fantasy", "Isekai"], route: "/IGotCheatSkillInAnotherWorld" },
//   { name: "Classroom of the Elite", genres: ["Psychological", "School"], route: "/classroomOfTheElite" },
//   { name: "Your Name", genres: ["Romance", "Drama"], route: "/YourName" },
//   { name: "Days With My Step Sister", genres: ["Slice of Life", "Romance"], route: "/DaysWithMyStepSister" },
//   { name: "Horimiya", genres: ["Romance", "Comedy"], route: "/Horimiya" },
//   { name: "Blue Lock", genres: ["Sports", "Psychological"], route: "/BlueLock" },
//   { name: "Demon Slayer", genres: ["Action", "Fantasy"], route: "/DemonSlayer" },
//   { name: "Viral Hit", genres: ["Martial Arts", "Action"], route: "/ViralHit" },
//   { name: "Haikyuu", genres: ["Sports", "School"], route: "/Haikyuu" },
//   { name: "Black Clover", genres: ["Action", "Fantasy"], route: "/BlackClover" },
//   { name: "Jujutsu Kaisen", genres: ["Action", "Supernatural"], route: "/JujutsuKaisen" },
//   { name: "Wind Breaker", genres: ["Sports", "Action"], route: "/WindBreaker" },
// ];

// const genres = ["All", "Action", "Fantasy", "Psychological", "Romance", "Slice of Life", "Sports", "Martial Arts", "Drama", "Comedy", "School", "Isekai"];

// const AnimeList = () => {
//   const [search, setSearch] = useState("");
//   const [selectedGenre, setSelectedGenre] = useState("All");
//   const navigate = useNavigate(); // Hook for navigation

//   const filteredAnime = animeData.filter(
//     (anime) =>
//       anime.name.toLowerCase().includes(search.toLowerCase()) &&
//       (selectedGenre === "All" || anime.genres.includes(selectedGenre))
//   );

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-10 pt-24">
//       <h1 className="text-4xl md:text-5xl font-bold text-center text-red-400 mb-8">
//         Anime List
//       </h1>

//       {/* Search Bar & Genre Dropdown */}
//       <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search anime..."
//           className="p-3 w-full max-w-md rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         {/* Genre Dropdown */}
//         <select
//           className="p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//           value={selectedGenre}
//           onChange={(e) => setSelectedGenre(e.target.value)}
//         >
//           {genres.map((genre, index) => (
//             <option key={index} value={genre}>
//               {genre}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Anime Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredAnime.length > 0 ? (
//           filteredAnime.map((anime, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-red-500/50 transition duration-300 cursor-pointer text-center"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.6 }}
//             >
//               {/* Clickable Image Placeholder */}
//               <div
//                 className="w-full h-40 bg-gray-700 rounded-lg mb-4 flex items-center justify-center hover:bg-gray-600 transition"
//                 onClick={() => navigate(anime.route)}
//               >
//                 <span className="text-gray-400 text-lg">No Image</span>
//               </div>
//               {/* Anime Name */}
//               <h3 className="text-xl font-bold text-red-400">{anime.name}</h3>
//               {/* Genres */}
//               <p className="text-gray-300 text-sm mt-1">
//                 {anime.genres.join(", ")}
//               </p>
//             </motion.div>
//           ))
//         ) : (
//           <p className="text-center text-gray-400 col-span-full">
//             No anime found.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AnimeList;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import A1 from "../assets/sololeveling.png";
import A2 from "../assets/igot.png";
import A3 from "../assets/classroom.png";
import A4 from "../assets/yourname1.png";
import A5 from "../assets/dayswith1.png";
import A6 from "../assets/horimiya1.png";
import A7 from "../assets/bluelock.png";
import A8 from "../assets/demonslayer.png";
import A9 from "../assets/viralhit.png";
import A10 from "../assets/Haikyuu.png";
import A11 from "../assets/Black clover.png";
import A12 from "../assets/wind breacker 1.png";
import A13 from "../assets/KaijuNo8.png";
import A14 from "../assets/JJK.png";

const animeData = [
  { name: "Solo Leveling", genres: ["Action", "Fantasy"], route: "/SoloLeveling", image: A1 },
  { name: "I Got Cheat Skill", genres: ["Fantasy", "Isekai","Adventure"], route: "/IGotCheatSkillInAnotherWorld", image: A2 },
  { name: "Classroom of the Elite", genres: ["Psychological", "School"], route: "/classroomOfTheElite", image: A3 },
  { name: "Your Name", genres: ["Romance", "Drama"], route: "/YourName", image: A4 },
  { name: "Days With My Step Sister", genres: ["Slice of Life", "Romance"], route: "/DaysWithMyStepSister", image: A5 },
  { name: "Horimiya", genres: ["Romance", "Comedy"], route: "/Horimiya", image: A6 },
  { name: "Blue Lock", genres: ["Sports", "Fantasy"], route: "/BlueLock", image: A7 },
  { name: "Demon Slayer", genres: ["Action", "Fantasy", "Adventure"], route: "/DemonSlayer", image: A8 },
  { name: "Viral Hit", genres: ["Martial Arts", "Action"], route: "/ViralHit", image: A9 },
  { name: "Haikyuu", genres: ["Action", "School","Comedy"], route: "/Haikyuu", image: A10 },
  { name: "Black Clover", genres: ["Sports", "Adventure","Fantasy"], route: "/BlackClover", image: A11 },
  { name: "Wind Breaker", genres: ["Action", "Adventure", "School"], route: "/WindBreaker", image: A12},
  { name: "Kaiju No.8", genres: ["Action", "Fantasy", "Adventure"], route: "/KaijuNo8", image: A13 },
  { name: "JuJUtsu Kaisen", genres: ["Action", "Fantasy","Supernatural"], route: "/JuJUtsuKaisen", image: A14 }
];

const genres = ["All", "Action", "Fantasy", "Psychological", "Romance", "Slice of Life", "Sports", "Martial Arts", "Drama", "Comedy", "School", "Isekai", "Supernatural"];

const AnimeList = () => {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const navigate = useNavigate();

  const filteredAnime = animeData.filter(
    (anime) =>
      anime.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedGenre === "All" || anime.genres.includes(selectedGenre))
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 pt-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-red-400 mb-8">
        Anime List
      </h1>

      {/* Search Bar & Genre Dropdown */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search anime..."
          className="p-3 w-full max-w-md rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Genre Dropdown */}
        <select
          className="p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      {/* Anime Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredAnime.length > 0 ? (
          filteredAnime.map((anime, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg hover:shadow-red-500/50 transition duration-300 cursor-pointer flex flex-col items-center h-[300px] overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => navigate(anime.route)}
            >
              {/* Clickable Image */}
              <img
                src={anime.image}
                alt={anime.name}
                className="w-full h-56 object-cover rounded-t-lg"
              />

              <div className="p-3 text-center w-full">
                {/* Anime Name */}
                <h3 className="text-lg font-bold text-red-400">{anime.name}</h3>

                {/* Genres */}
                <p className="text-gray-300 text-sm mt-1">{anime.genres.join(", ")}</p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No anime found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AnimeList;
