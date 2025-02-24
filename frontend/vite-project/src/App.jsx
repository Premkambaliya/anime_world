import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Home.jsx';
import Navbar from './components/NavbarPage.jsx';
import AnimePage from './components/AnimePage.jsx';
import Aboutus from './components/Aboutus.jsx';
import Genres from './components/Genres.jsx';
import Solo from './components/Solo.jsx';
import IGotCheatSkill from './components/IGot.jsx';
import ClassroomOfTheElite from './components/Classroomanime.jsx';
import YourName from './components/YourName.jsx';
import DaysWithMyStepSister from './components/DaysWithMy.jsx';
import Horimiya from './components/Horimiyaanime.jsx';
import BlueLock from './components/BlueLockanime.jsx';
import DemonSlayer from './components/DemonSlayeranime.jsx';
import ViralHit from './components/ViralHitanime.jsx';
import Haikyuu from './components/Haikyuuanime.jsx';

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/AnimePage" element={<AnimePage />} /> {/* Anime Gallery */}
        <Route path="/Aboutus" element={<Aboutus />} /> {/* Anime Gallery */}
        <Route path="/genres" element={<Genres />} /> {/* Anime Gallery */}
        <Route path="/SoloLeveling" element={<Solo />} />
        <Route path="/IGotCheatSkillInAnotherWorld" element={<IGotCheatSkill />} />
        <Route path="/classroomOfTheElite" element={<ClassroomOfTheElite />} />
        <Route path="/YourName" element={<YourName />} />
        <Route path="/DaysWithMyStepSister" element={<DaysWithMyStepSister />} />
        <Route path="/Horimiya" element={<Horimiya />} />
        <Route path="/BlueLock" element={<BlueLock />} />
        <Route path="/DemonSlayer" element={<DemonSlayer />} />
        <Route path="/ViralHit" element={<ViralHit />} />
        <Route path="/Haikyuu" element={<Haikyuu />} />
      </Routes>
    </Router>
  );
}

export default App;