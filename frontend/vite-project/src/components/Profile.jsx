import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState("");
  const [gender, setGender] = useState("");
  const [favoriteAnime, setFavoriteAnime] = useState("");
  const [profile, setProfile] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      fetchProfile();
    }
  }, [isAuthenticated]);

  const fetchProfile = async () => {
    try {
      setLoadingProfile(true);
      const response = await axios.get(`http://localhost:5000/users?email=${user.email}`);
      if (response.data) {
        setProfile(response.data);
        setNickname(response.data.nickname || "");
        setGender(response.data.gender || "");
        setFavoriteAnime(response.data.favoriteAnime || "");
      } else {
        createProfile(); // If profile doesn't exist, create it
      }
    } catch (error) {
      console.error("❌ Error fetching profile:", error);
    } finally {
      setLoadingProfile(false);
    }
  };

  const createProfile = async () => {
    try {
      const newProfile = {
        email: user.email,
        name: user.name,
        picture: user.picture,
        nickname: "",
        gender: "",
        favoriteAnime: "",
      };
          console.log(newProfile);
      await axios.post("http://localhost:5000/users", newProfile);
      setProfile(newProfile);
    } catch (error) {
      console.error("❌ Error creating profile:", error);
    }
  };

  const handleSave = async () => {
    setIsEditing(false);
    try {
      await axios.patch(`http://localhost:5000/users?email=${user.email}`, {
        nickname,
        gender,
        favoriteAnime,
      });

      alert("✅ Profile updated successfully!");
      fetchProfile(); // Refresh profile data
    } catch (error) {
      console.error("❌ Error updating profile:", error);
      // alert("⚠️ Failed to update profile.");
    }
  };

  if (isLoading || loadingProfile) {
    return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex flex-col items-center mt-10 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto">
        <img src={user.picture} alt={user.name} className="w-24 h-24 rounded-full shadow-md" />
        <h2 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">{user.name}</h2>
        <p className="text-gray-600 dark:text-gray-300">{user.email}</p>

        {/* Profile Details Section */}
        <div className="mt-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md w-full">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Profile Details:</h3>
          <p className="text-gray-700 dark:text-gray-300"><strong>Nickname:</strong> {nickname || "Not Set"}</p>
          <p className="text-gray-700 dark:text-gray-300"><strong>Gender:</strong> {gender || "Not Set"}</p>
          <p className="text-gray-700 dark:text-gray-300"><strong>Favorite Anime:</strong> {favoriteAnime || "Not Set"}</p>
        </div>

        {/* Edit Button */}
        {!isEditing ? (
          <button 
            onClick={() => setIsEditing(true)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Edit Profile
          </button>
        ) : (
          <div className="mt-4 w-full p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <label className="block text-sm font-semibold text-gray-900 dark:text-gray-300">Nickname:</label>
            <input 
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md dark:bg-gray-600 dark:text-white"
              placeholder="Enter Nickname"
            />

            <label className="block text-sm font-semibold mt-2 text-gray-900 dark:text-gray-300">Gender:</label>
            <select 
              value={gender} 
              onChange={(e) => setGender(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md dark:bg-gray-600 dark:text-white"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <label className="block text-sm font-semibold mt-2 text-gray-900 dark:text-gray-300">Favorite Anime:</label>
            <input 
              type="text"
              value={favoriteAnime}
              onChange={(e) => setFavoriteAnime(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md dark:bg-gray-600 dark:text-white"
              placeholder="Enter favorite anime"
            />

            <button 
              onClick={handleSave}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition"
            >
              Save
            </button>
          </div>
        )}
      </div>
    )
  );
};

export default Profile;
