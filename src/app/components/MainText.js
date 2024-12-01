"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const MainText = () => {
  const text = "Code your way to success"; // Full text

  return (
    <motion.h1
      className="text-7xl tracking-tight font-semibold bg-gradient-to-b from-white via-gray-400 to-white bg-clip-text text-transparent animate-gradient leading-[1.2] pb-2"
      style={{
        backgroundSize: "200% 200%", // Enable smooth transitions
      }}
      initial={{ opacity: 0, y: 10 }} // Start off-screen (20px below)
      animate={{ opacity: 1, y: 0 }} // Fade in and move up to the original position
      transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth transition
    >
      {text}
    </motion.h1>
  );
};

export default MainText;
