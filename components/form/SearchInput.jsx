"use client";

import { useState, useEffect } from "react";

import { Search } from "lucide-react";

const SearchInput = ({ placeholder, setSearch }) => {
  const [inputText, setInputText] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={placeholder || "Search"}
        value={inputText}
        onChange={onChange}
      />
      <div className="absolute top-0 right-0.5 md:right-1 h-full flex-center">
        <Search size={16} color="var(--fg)" />
      </div>
    </div>
  );
};

export default SearchInput;
