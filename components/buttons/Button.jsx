"use client";

import React from "react";
import Link from "next/link";

const Button = ({ onClick, text, disabled, link, type, className }) => {
  return (
    <div>
      {onClick ? (
        <button
          onClick={onClick}
          disabled={disabled}
          className={`text-white p-0.5 px-1 rounded-[0.5em] shadow bg-linear-to-br to-accent from-accent-2 transition-500 hover:scale-110 ${
            disabled ? "opacity-80 pointer-events-none" : ""
          } ${className ? className : ""}`}
        >
          {text}
        </button>
      ) : type ? (
        <button
          type={type}
          className={`text-white p-0.5 px-1 rounded-[0.5em] shadow bg-linear-to-br to-accent from-accent-2 transition-500 hover:scale-110 ${
            disabled ? "opacity-80 pointer-events-none" : ""
          } ${className ? className : ""}`}
        >
          {text}
        </button>
      ) : (
        <Link
          href={link}
          className={`text-white p-0.75 px-1.5 rounded-[0.5em] shadow bg-linear-to-br from-accent to-accent-2 transition-500 hover:scale-110 ${
            disabled ? "opacity-80 pointer-events-none" : ""
          } ${className ? className : ""}`}
        >
          {text}
        </Link>
      )}
    </div>
  );
};

export default Button;
