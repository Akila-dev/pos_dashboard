"use client";

import React from "react";

import { useState, useEffect } from "react";

const InputBlock = ({ label, type, name, setValue, placeholder }) => {
  const [inputText, setInputText] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
    // setValue(e.target.value);
  };

  return (
    <div className="flex flex-col gap-0.75">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        placeholder={placeholder || label || ""}
        value={inputText}
        onChange={onChange}
      />
    </div>
  );
};

export default InputBlock;
