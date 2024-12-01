import React from "react";

const GradientButton = ({ text }) => {
  return (
    <button
      className="flex h-110 w-100 items-center justify-center rounded-full p-[1.5px] text-white"
      style={{
        background:
          // "conic-gradient(from 245deg, #096BDE 0.1917rad, #0DFF50 0.5717rad, #8E47FE 1.3701rad, #7C3FFE 3.7256rad, #140FFF 3.9313rad)",
          "conic-gradient(from 245deg, #ffffff 0rad, #f2f2f2 1rad, #e0e0e0 2rad, #cccccc 3rad, #b3b3b3 4rad, #999999 5rad)",
      }}
    >
      <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-800 pr-1.5 pl-1.5 pb-0.5 pt-0.5">
        {text}
      </div>
    </button>
  );
};

export default GradientButton;
