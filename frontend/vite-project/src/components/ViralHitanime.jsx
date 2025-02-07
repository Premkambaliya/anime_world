import { useEffect, useState } from "react";
import React from "react";
import { AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
import axios from "axios";

const ViralHit = () => {
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    axios
      .get("https://anime-world-1.onrender.com/anime/679a667dd4902dee19968a7f")
      .then((response) => {
        setAnime(response.data);
      })
      .catch((error) => {
        console.error("Error fetching anime data:", error);
      });
  }, []);

  if (!anime)
    return (
      <div className="flex justify-center items-center min-h-screen text-white text-xl">
        Loading...
      </div>
    );

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#121212] px-5">
      <div className="max-w-3xl bg-[#1e1e1e] rounded-xl p-6 shadow-lg">
        {/* Header Section */}
        <div className="text-center">
          <img
            src="https://res.cloudinary.com/doqzxuxb1/image/upload/v1738905271/dqgkhrou1pqdvaxajxgk.png"
            alt={anime.title}
            className="w-full rounded-xl max-h-96 object-cover"
          />
          <h1 className="text-2xl font-bold text-white mt-4">{anime.title}</h1>
          <div className="flex justify-center gap-4 mt-3">
            <AiFillHeart className="text-2xl cursor-pointer text-white hover:text-red-500 transition duration-300" />
            <AiOutlineShareAlt className="text-2xl cursor-pointer text-white hover:text-blue-500 transition duration-300" />
          </div>
        </div>

        {/* Anime Info Section */}
        <div className="mt-6 p-4 bg-[#292929] rounded-lg">
          <p className="text-white mb-2">
            <strong className="font-semibold">Type:</strong>{" "}
            {anime.type.join(", ")}
          </p>
          <p className="text-white mb-2">
            <strong className="font-semibold">Episodes:</strong>{" "}
            {anime.episodes}
          </p>
          <p className="text-white mb-2">
            <strong className="font-semibold">Rating:</strong> {anime.rating} ⭐
          </p>
          <p className="text-white mb-2">
            <strong className="font-semibold">Release Year:</strong>{" "}
            {anime.releaseYear}
          </p>
          <p className="text-[#bbbbbb] text-sm mt-2">
            <strong className="font-semibold">Synopsis:</strong> {anime.synopsis}
          </p>
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

export default ViralHit;