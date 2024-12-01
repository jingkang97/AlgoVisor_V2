"use client";
import React, { useRef } from "react";

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

  return (
    <div className="flex justify-center items-center mt-[-50px] mb-12 overflow-hidden">
      <div
        className="flex flex-wrap gap-2 max-w-[916px] w-[calc(100%-20px)]"
        ref={cardsRef}
        onMouseMove={handleMouseMove}
      >
        {[
          {
            title: "Learn with Visualization",
            description:
              "Understand how the algorithm works with animation and visualization",
          },
          {
            title: "Practice makes perfect",
            description:
              "Explore the curated set of questions available here to refine your skills.",
          },
          {
            title: "A Personal Touch",
            description:
              "Feeling Lost? Contact our expert here for any questions",
          },
          {
            title: "Progressive Overload",
            description: "Sign in to track your progress and achievements",
          },
          {
            title: "x2 x0.5 Speed",
            description: "Watch the set of curated lectures at your own pace",
          },
          {
            title: "Open for work",
            description: "Leverage on the resources for your future career.",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="relative flex flex-col w-[300px] h-[260px] bg-white/10 rounded-lg cursor-pointer"
            style={{
              "--mouse-x": "0px",
              "--mouse-y": "0px",
            }}
          >
            <div
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/5 to-transparent opacity-0 transition-opacity duration-500 z-10"
              style={{
                background: `radial-gradient(
                  800px circle at var(--mouse-x) var(--mouse-y),
                  rgba(255, 255, 255, 0.06),
                  transparent 40%
                )`,
              }}
            ></div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/40 to-transparent opacity-0 z-0"></div>
            <div className="flex flex-col flex-grow bg-[#171717] p-4 rounded-lg z-20">
              <div className="flex justify-center items-center h-[140px]">
                <i className="text-[6em] text-white/25 fa-duotone fa-unicorn"></i>
              </div>
              <div className="flex flex-col justify-start items-start px-5 flex-grow gap-2">
                <h3 className="text-lg text-white font-semibold">
                  {card.title}
                </h3>
                <h4 className="text-sm text-white/50">{card.description}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
