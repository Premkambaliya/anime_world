import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
import axios from "axios";
import "./dayswith.css"; // Importing CSS file

const dayswithmystepsister = () => {
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    axios
      .get("https://anime-world-1.onrender.com/anime/679a667dd4902dee19968a81")
      .then((response) => {
        setAnime(response.data);
      })
      .catch((error) => {
        console.error("Error fetching anime data:", error);
      });
  }, []);

  if (!anime) return <div className="loading">Loading...</div>;

  return (
    <div className="anime-detail-container">
      <div className="anime-content">
        <div className="anime-header">
          <img src={`https://res.cloudinary.com/doqzxuxb1/image/upload/v1738733692/kjhtz5exwwkmu4idw7kj.png`} alt={anime.title} className="anime-image" />
          <h1 className="anime-title">{anime.title}</h1>
          <div className="icons">
            <AiFillHeart className="heart-icon" />
            <AiOutlineShareAlt className="share-icon" />
          </div>
        </div>

        {/* Anime Details */}
        <div className="anime-info">
          <p><strong>Type:</strong> {anime.type.join(", ")}</p>
          <p><strong>Episodes:</strong> {anime.episodes}</p>
          <p><strong>Rating:</strong> {anime.rating} ⭐</p>
          <p><strong>Release Year:</strong> {anime.releaseYear}</p>
          <p className="synopsis"><strong>Synopsis:</strong> {anime.synopsis}</p>
        </div>

        {/* Trailer */}
        <div className="trailer">
          <h2 className="trailer-title">Watch Trailer</h2>
          <iframe
            src={anime.trailer.replace("/view?usp=drive_link", "/preview")}
            title="Trailer"
            className="trailer-video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default dayswithmystepsister;