"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./features.css";

export default function Features() {
  const cardsRef = useRef(null);

  const handleMouseMove = (e) => {
    // Loop over each card and set the CSS properties
    for (const card of cardsRef.current.children) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Apply custom properties for each card individually
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Stagger the children (cards)
        delayChildren: 0.3, // Delay before animation starts
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex items-center justify-center h-full mt-[-50px] mb-12 overflow-hidden p-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onMouseMove={handleMouseMove}
    >
      <div id="cards" ref={cardsRef}>
        {[
          "Learn with Visualization",
          "Practice makes perfect",
          "A Personal Touch",
          "Progressive Overload",
          "x2 x0.5 Speed",
          "Open for work",
        ].map((title, index) => (
          <motion.div
            key={index}
            className="card"
            variants={cardVariants}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
            }}
          >
            <div className="card-content">
              <div className="card-image">
                <i
                  className={`fa-duotone fa-${
                    index % 2 === 0 ? "apartment" : "unicorn"
                  } text-gray-200`}
                />
              </div>
              <div className="card-info-wrapper flex justify-center items-center">
                <div className="card-info flex items-center justify-center gap-4">
                  <i
                    className={`fa-duotone fa-${
                      index % 2 === 0 ? "apartment" : "unicorn"
                    } text-gray-200`}
                  />
                  <div className="card-info-title text-center">
                    <h3 className="text-white font-semibold">{title}</h3>
                    <h4 className="text-sm text-gray-400">
                      {index === 0
                        ? "Understand how the algorithm works with animation and visualization"
                        : index === 1
                        ? "Explore the curated set of questions available here to refine your skills."
                        : index === 2
                        ? "Feeling Lost? Contact our expert here for any questions"
                        : index === 3
                        ? "Sign in to track your progress and achievements"
                        : index === 4
                        ? "Watch the set of curated lectures at your own pace"
                        : "Leverage on the resources for your future career."}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
