"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const MainTextTypingEffect = () => {
  const text = "Code your way to success"; // Full text
  const typingSpeed = 100; // Speed in ms per character
  const [displayedText, setDisplayedText] = useState(""); // Text currently displayed
  const [cursorVisible, setCursorVisible] = useState(true); // Controls cursor blinking
  const [isTypingComplete, setIsTypingComplete] = useState(false); // To track typing completion
  const indexRef = useRef(0); // Store the current index without re-rendering

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayedText((prev) => prev + text[indexRef.current]); // Add next character
        indexRef.current++; // Increment index
      } else {
        clearInterval(typingInterval); // Stop typing when done
        setIsTypingComplete(true); // Mark typing as complete
      }
    }, typingSpeed); // Set typing speed

    return () => clearInterval(typingInterval); // Cleanup on component unmount
  }, [text, typingSpeed]); // Only rerun when `text` or `typingSpeed` changes

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      if (isTypingComplete) {
        setCursorVisible((prev) => !prev); // Toggle cursor visibility after typing is complete
      }
    }, 500); // Adjust cursor blink speed

    return () => clearInterval(cursorInterval); // Cleanup when component unmounts
  }, [isTypingComplete]); // Run this effect only after typing is complete

  return (
    <motion.h1
      className="text-7xl tracking-tight font-regular"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <span
        className={`inline-block ${
          cursorVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        |
      </span>
    </motion.h1>
  );
};

export default MainTextTypingEffect;
