import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Home';
import Navbar from './components/Navbar';
import AnimePage from './components/AnimePage';
import Solo from './components/Solo';
import IGotCheatSkill from './components/IGotCheatSkill';
import ClassroomOfTheElite from './components/Classroom';
import YourName from './components/YourName';
import DaysWithMyStepSister from './components/DaysWithMy';
import Horimiya from './components/Horimiya';
import BlueLock from './components/BlueLock';
import DemonSlayer from './components/DemonSlayer';
import ViralHit from './components/ViralHitanime';
import Haikyuu from './components/Haikyuu';

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/AnimePage" element={<AnimePage />} /> {/* Anime Gallery */}
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