"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  EyeIcon,
  CheckCircleIcon,
  UserIcon,
  ChartBarIcon,
  ClockIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import "./features.css";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "./ui/GlowingStars";

export default function Features() {
  const cardsRef = useRef(null);

  const handleMouseMove = (e) => {
    for (const card of cardsRef.current.children) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      title: "Learn with Visualization",
      description:
        "Understand how the algorithm works with animation and visualization",
      icon: EyeIcon,
      display: <GlowingStarsBackgroundCard />,
    },
    {
      title: "Practice makes perfect",
      description:
        "Explore the curated set of questions available here to refine your skills.",
      icon: CheckCircleIcon,
    },
    {
      title: "A Personal Touch",
      description: "Feeling Lost? Contact our expert here for any questions",
      icon: UserIcon,
    },
    {
      title: "Progressive Overload",
      description: "Sign in to track your progress and achievements",
      icon: ChartBarIcon,
    },
    {
      title: "x2 x0.5 Speed",
      description: "Watch the set of curated lectures at your own pace",
      icon: ClockIcon,
    },
    {
      title: "Open for work",
      description: "Leverage on the resources for your future career.",
      icon: BriefcaseIcon,
    },
  ];

  return (
    <motion.div
      className="flex items-center justify-center h-full mt-[-50px] mb-12 overflow-hidden p-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onMouseMove={handleMouseMove}
    >
      <div id="cards" ref={cardsRef}>
        {features.map((feature, index) => (
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
                {/* <feature.icon className="w-6 h-6 text-gray-200" /> */}
                {/* Image */}
                {/* <GlowingStarsBackgroundCard /> */}
                {feature.display}
              </div>
              <div className="card-info-wrapper flex justify-center items-center">
                <div className="card-info flex items-center justify-center gap-4">
                  <div className="card-info-title text-center">
                    <h3 className="text-white font-semibold text-center">
                      <div className="flex items-center justify-center gap-2">
                        <feature.icon className="w-5 h-5 text-white" />
                        {feature.title}
                      </div>
                    </h3>
                    <h4 className="text-sm text-gray-400">
                      {feature.description}
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
