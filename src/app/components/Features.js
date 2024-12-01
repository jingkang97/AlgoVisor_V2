"use client";
import React, { useRef } from "react";
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

  return (
    <div id="body">
      <div id="cards" ref={cardsRef} onMouseMove={handleMouseMove}>
        <div className="card">
          <div className="card-content">
            <div className="card-image">
              <i className="fa-duotone fa-apartment"></i>
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <i className="fa-duotone fa-apartment"></i>
                <div className="card-info-title">
                  <h3>Learn with Visualization</h3>
                  <h4>
                    Understand how the algorithm works with animation and
                    visualization
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-image">
              <i className="fa-duotone fa-unicorn"></i>
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <i className="fa-duotone fa-unicorn"></i>
                <div className="card-info-title">
                  <h3>Practice makes perfect</h3>
                  <h4>
                    Explore the curated set of questions available here to
                    refine your skills.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-image">
              <i className="fa-duotone fa-unicorn"></i>
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <i className="fa-duotone fa-unicorn"></i>
                <div className="card-info-title">
                  <h3>A Personal Touch</h3>
                  <h4>
                    Feeling Lost? Contact our expert here for any questions
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-image">
              <i className="fa-duotone fa-unicorn"></i>
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <i className="fa-duotone fa-unicorn"></i>
                <div className="card-info-title">
                  <h3>Progressive Overload</h3>
                  <h4>Sign in to track your progress and achievements</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-image">
              <i className="fa-duotone fa-unicorn"></i>
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <i className="fa-duotone fa-unicorn"></i>
                <div className="card-info-title">
                  <h3>x2 x0.5 Speed</h3>
                  <h4>Watch the set of curated lectures at your own pace</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-image">
              <i className="fa-duotone fa-unicorn"></i>
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <i className="fa-duotone fa-unicorn"></i>
                <div className="card-info-title">
                  <h3>Open for work</h3>
                  <h4>Leverage on the resources for your future career.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <a
        id="source-link"
        className="link"
        href="https://linear.app/features"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-solid fa-link"></i>
        <span className="roboto-mono">Source</span>
      </a>

      <a
        id="youtube-link"
        className="link"
        href="https://youtu.be/htGfnF1zN4g"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-youtube"></i>
        <span>5 min Tutorial</span>
      </a> */}
    </div>
  );
}
