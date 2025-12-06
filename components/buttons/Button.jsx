"use client";

import React from "react";

const Button = ({ onClick, text, disabled, link }) => {
  return (
    <div>
      {onClick ? (
        <button
          onClick={onClick}
          disabled={disabled}
          className={`text-white p-0.5 px-1 rounded-[0.5em] shadow bg-radial to-accent from-accent/80 transition-500 hover:scale-110 ${
            disabled ? "opacity-80 pointer-events-none" : ""
          }`}
        >
          {text}
        </button>
      ) : (
        <a href={link}>{text}</a>
      )}
    </div>
  );
};

export default Button;
