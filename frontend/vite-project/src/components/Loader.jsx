import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-90 z-50">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-16 h-16 border-t-4 border-red-500 border-solid rounded-full"
      />
      <p className="text-white text-xl ml-4">Loading...</p>
    </div>
  );
};

export default Loader;
