import React from "react";

const CustomButton = ({ text, bgColor, color, hoverColor }) => {
  return (
    <button
      className={`bg-${bgColor} ${color} ${hoverColor} p-3 pl-4 text-sm font-semibold border-none rounded-md cursor-pointer flex items-center gap-2 focus:outline-none focus:outline-offset-1 transition-all duration-150 group`}
    >
      {text}
      <svg
        className="w-4 h-4"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="transform -translate-x-0.5 transition-transform duration-150 group-hover:translate-x-0"
          d="M8 15L14 8.5L8 2"
          stroke="currentColor"
          strokeWidth="3"
        />
        <line
          className="opacity-0 transition-opacity duration-150 group-hover:opacity-100"
          x1="13"
          y1="8.5"
          y2="8.5"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>
    </button>
  );
};

export default CustomButton;
