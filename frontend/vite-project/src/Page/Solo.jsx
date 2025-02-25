import { useEffect, useState } from "react";
import React from "react";
import { useLocation } from "react-router-dom";
import { AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
import axios from "axios";
import photo from "../assets/a1.png";
import Loader from "../components/Loader.jsx"; // Import Loader Component

const Solo = () => {
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true); // State for Loader
  const location = useLocation();
  const { image } = location.state || {};

  useEffect(() => {
    axios
      .get("https://anime-world-1.onrender.com/anime/6799bc27d4902dee19968a77")
      .then((response) => {
        setAnime(response.data);
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching anime data:", error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  if (loading) return <Loader />; // Show Loader while fetching

  return (
    <div className="flex justify-center items-center min-h-screen px-5 bg-black">
      <div className="max-w-3xl bg-gray-900 rounded-xl p-6 shadow-lg">
        {/* Header Section */}
        <div className="relative text-center">
          <img
            src={image || photo}
            alt={anime.title}
            className="w-full rounded-xl max-h-96 object-cover"
          />
          <h1 className="text-2xl text-white font-bold mt-4">{anime.title}</h1>
          <div className="flex justify-center gap-4 mt-3">
            <AiFillHeart className="text-2xl cursor-pointer text-white hover:text-red-500 transition duration-300" />
            <AiOutlineShareAlt className="text-2xl cursor-pointer text-white hover:text-blue-500 transition duration-300" />
          </div>
        </div>

        {/* Anime Info Section */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <p className="text-white mb-2"><strong>Type:</strong> {anime.type.join(", ")}</p>
          <p className="text-white mb-2"><strong>Episodes:</strong> {anime.episodes}</p>
          <p className="text-white mb-2"><strong>Rating:</strong> {anime.rating} ⭐</p>
          <p className="text-white mb-2"><strong>Release Year:</strong> {anime.releaseYear}</p>
          <p className="text-white mt-2"><strong>Synopsis:</strong> {anime.synopsis}</p>
        </div>

        {/* Trailer Section */}
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold text-white">Watch Trailer</h2>
          <iframe
            src={anime.trailer.replace("/view?usp=drive_link", "/preview")}
            title="Trailer"
            className="w-full h-64 mt-4 rounded-lg border-none"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Solo;
