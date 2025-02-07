import React from 'react';
import { useNavigate } from 'react-router-dom';
import A1 from '../assets/sololeveling.png';
import A2 from '../assets/igot.png';
import A3 from '../assets/classroom.png';
import A4 from '../assets/yourname1.png';
import A5 from '../assets/dayswith1.png';
import A6 from '../assets/horimiya1.png';
import A7 from '../assets/bluelock.png';
import A8 from '../assets/demonslayer.png';
import A9 from '../assets/viralhit.png';
import A10 from '../assets/Haikyuu.png';

const AnimePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  // Array of anime images with their names and additional info
  const animeImages = [
    { name: 'Solo Leveling', src: A1, route: '/SoloLeveling' },
    { name: 'I Got', src: A2, route: '/IGotCheatSkillInAnotherWorld' },
    { name: 'Classroom', src: A3, route: '/classroomOfTheElite' },
    { name: 'Your Name', src: A4, route: '/YourName' },
    { name: 'Days With', src: A5, route: '/DaysWithMyStepSister' },
    { name: 'Horimiya', src: A6, route: '/Horimiya' },
    { name: 'Blue Lock', src: A7, route: '/BlueLock' },
    { name: 'Demon Slayer', src: A8, route: '/DemonSlayer' },
    { name: 'Viral Hit', src: A9, route: '/ViralHit' },
    { name: 'Haikyu', src: A10, route: '/Haikyuu' },
  ];

  return (
    <div className="anime-page">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center my-8">Anime Gallery</h1>
      {/* Anime Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {animeImages.map(({ name, src, route }, index) => (
          <div key={index} className="anime-card flex flex-col items-center">
            {/* Image with fixed size */}
            <img
              className="w-full h-auto rounded-lg shadow-lg"
              src={src}
              alt={name}
              style={{ width: '300px', height: '450px', objectFit: 'cover' }} // Set fixed size here
            />
            {/* Name */}
            <p className="text-center mt-2 text-lg font-semibold">{name}</p>
            {/* Info Button */}
            <button
              className="mt-4 bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-4 rounded text-sm" // Adjusted button size
              onClick={() => navigate(route)} // Navigate to the specific route
            >
              Show Info
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimePage;