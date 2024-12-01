"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TileGrid() {
  return (
    <>
      <motion.div
        className="absolute top-[143px] left-0 w-[100vw] h-[3px]"
        initial={{
          background:
            "linear-gradient(to right, transparent 0%, white 10%, transparent 20%)",
          backgroundPosition: "-100% 0%", // Start with the gradient off-screen to the left
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["-100% 0%", "100% 0%"], // Animate the gradient from left to right
        }}
        transition={{
          duration: 6, // Control the speed
          ease: "linear",
          repeat: Infinity, // Repeat the animation infinitely
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-[173px] left-0 w-[100vw] h-[3px]"
        initial={{
          background:
            "linear-gradient(to right, transparent 0%, white 10%, transparent 20%)",
          backgroundPosition: "100% 0%", // Start with the gradient off-screen to the right
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["100% 0%", "-100% 0%"], // Animate the gradient from right to left
        }}
        transition={{
          duration: 6, // Control the speed
          ease: "linear",
          repeat: Infinity, // Repeat the animation infinitely
        }}
      ></motion.div>

      <motion.div
        className="absolute top-0 left-[502px] w-[3px] h-[100vh]"
        initial={{
          background:
            "linear-gradient(to bottom, transparent 0%, white 10%, transparent 20%)",
          backgroundPosition: "0% -100%",
          backgroundSize: "100% 200%",
        }}
        animate={{
          backgroundPosition: ["0% -100%", "0% 200%"], // Animate gradient downwards
        }}
        transition={{
          duration: 6, // Control the speed
          ease: "linear",
          repeat: Infinity, // Repeat the animation infinitely
        }}
      ></motion.div>
      <motion.div
        className="absolute top-0 right-[502px] w-[3px] h-[100vh]"
        initial={{
          background:
            "linear-gradient(to top, transparent 0%, white 10%, transparent 20%)",
          backgroundPosition: "0% 100%",
          backgroundSize: "100% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 200%", "0% -100%"], // Animate gradient downwards
        }}
        transition={{
          duration: 6, // Control the speed
          ease: "linear",
          repeat: Infinity, // Repeat the animation infinitely
        }}
      ></motion.div>
    </>
  );
}
