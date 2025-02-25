import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  // Local state for editing
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState(user.nickname || '');
  const [gender, setGender] = useState('');
  const [favoriteAnime, setFavoriteAnime] = useState('');

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
  }

  const handleSave = () => {
    setIsEditing(false);
    // Future Scope: Backend me data save karna
    console.log("Saved Nickname:", nickname);
    console.log("Saved Gender:", gender);
    console.log("Saved Favorite Anime:", favoriteAnime);
  };

  return (
    isAuthenticated && (
      <div className="flex flex-col items-center mt-10 p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
        <img src={user.picture} alt={user.name} className="w-24 h-24 rounded-full shadow-md" />
        <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>

        {/* Profile Details Section */}
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md w-full">
          <h3 className="text-lg font-semibold">Profile Details:</h3>
          <p><strong>Nickname:</strong> {nickname || "Not Set"}</p>
          <p><strong>Updated At:</strong> {new Date(user.updated_at).toLocaleString()}</p>
          <p><strong>Gender:</strong> {gender || "Not Set"}</p>
          <p><strong>Favorite Anime:</strong> {favoriteAnime || "Not Set"}</p>
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
          <div className="mt-4 w-full p-4 bg-white rounded-lg shadow-md">
            <label className="block text-sm font-semibold">Nickname:</label>
            <input 
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter Nickname"
            />

            <label className="block text-sm font-semibold mt-2">Gender:</label>
            <select 
              value={gender} 
              onChange={(e) => setGender(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <label className="block text-sm font-semibold mt-2">Favorite Anime:</label>
            <input 
              type="text"
              value={favoriteAnime}
              onChange={(e) => setFavoriteAnime(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
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
