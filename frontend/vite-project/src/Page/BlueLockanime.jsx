import { useEffect, useState } from "react";
import React from "react";
import { AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FaWhatsapp, FaInstagram, FaTelegram } from "react-icons/fa";
import axios from "axios";
import Loader from "../components/Loader.jsx";

const BlueLock = () => {
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState(Number(localStorage.getItem("likes_bluelock")) || 0);
  const [shares, setShares] = useState(Number(localStorage.getItem("shares_bluelock")) || 0);
  const [showSharePopup, setShowSharePopup] = useState(false);

  const currentUrl = window.location.href; // Get current page URL

  useEffect(() => {
    axios
      .get("https://anime-world-1.onrender.com/anime/6799e376d4902dee19968a7d")
      .then((response) => {
        setAnime(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching anime data:", error);
        setLoading(false);
      });
  }, []);

  // Like Button Function
  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem("likes_bluelock", newLikes);
  };

  // Share Button Function
  const handleShare = () => {
    const newShares = shares + 1;
    setShares(newShares);
    localStorage.setItem("shares_bluelock", newShares);
    setShowSharePopup(true);
  };

  if (loading) return <Loader />;

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#121212] px-5 relative">
      <div className="max-w-3xl bg-[#1e1e1e] rounded-xl p-6 shadow-lg">
        {/* Header Section */}
        <div className="text-center">
          <img
            src="https://res.cloudinary.com/doqzxuxb1/image/upload/v1738671873/lkoryebobyqal49lbrtl.png"
            alt={anime.title}
            className="w-full rounded-xl max-h-96 object-cover"
          />
          <h1 className="text-2xl font-bold text-white mt-4">{anime.title}</h1>

          {/* Like & Share Buttons */}
          <div className="flex justify-center gap-4 mt-3">
            <button
              onClick={handleLike}
              className="flex items-center gap-1 text-white hover:text-red-500 transition duration-300"
            >
              <AiFillHeart className="text-2xl cursor-pointer" />
              {likes > 0 && <span>{likes}</span>}
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-1 text-white hover:text-blue-500 transition duration-300"
            >
              <AiOutlineShareAlt className="text-2xl cursor-pointer" />
              {shares > 0 && <span>{shares}</span>}
            </button>
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

      {/* Share Pop-up */}
      {showSharePopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-center">
            <h2 className="text-white text-lg font-semibold mb-4">Share This Anime</h2>

            {/* Social Media Buttons */}
            <div className="flex justify-center gap-4">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 text-3xl hover:text-green-400 transition duration-300"
              >
                <FaWhatsapp />
              </a>
              <a
                href={`https://www.instagram.com/?url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 text-3xl hover:text-pink-400 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href={`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-3xl hover:text-blue-400 transition duration-300"
              >
                <FaTelegram />
              </a>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowSharePopup(false)}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlueLock;
