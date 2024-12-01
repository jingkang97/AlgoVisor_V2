"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Tile() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    let timer;
    if (isHovered) {
      timer = setTimeout(() => {
        // Reset background color to bg-neutral-950 after 3 seconds of hover
        controls.start({ backgroundColor: "#0a0a0a" });
      }, 200);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isHovered, controls]);

  return (
    <motion.div className="aspect-square bg-[#222222] bg-opacity-40 z-10 p-[0.5px]">
      <motion.div
        className="aspect-square bg-neutral-950 z-10"
        whileHover={{
          zIndex: 10,
          backgroundColor: "#d0d0d0",
        }}
        onHoverStart={() => setIsHovered(true)} // Trigger hover state
        onHoverEnd={() => setIsHovered(false)} // Reset hover state
        animate={controls} // Link the animation control
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      ></motion.div>
    </motion.div>
  );
}
