import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import YourName from "./components/yourname";

// Home Component
const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Welcome to Anime World 🌸</h1>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yourname" element={<YourName />} />

      </Routes>
    </Router>
  );
};

export default App;
