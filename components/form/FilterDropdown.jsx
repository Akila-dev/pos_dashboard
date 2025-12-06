"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const FilterDropdown = ({ title, list, sm, setItem }) => {
  const [activeFilter, setActiveFilter] = useState(list[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  // ! SET FILTER
  useEffect(() => {
    setItem(activeFilter);
  }, [activeFilter, setItem]);

  // ! MINIMIZE WHEN POPUP CLICKED OUTSIDE
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  const applyFilter = (filter) => {
    setActiveFilter(filter);
    setShowDropdown(false);
  };

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        className="filter-btn w-full bg-card/80! flex-between gap-0.5!"
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        <span className="line-clamp-1! sm">
          {title}: {activeFilter}
        </span>
        <ChevronDown
          size={14}
          className={`min-w-1 ${
            showDropdown
              ? "transform duration-500 rotate-180"
              : "transform duration-500 rotate-0"
          }`}
        />
      </button>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute top-full flex flex-col w-full mt-0.5 bg-white rounded-[0.5em] border border-outline shadow divide-outline divide-y z-10">
          {list &&
            list.map((item, i) => (
              <button
                key={i}
                onClick={() => applyFilter(item)}
                className={`text-left p-0.5 px-0.75 hover:bg-accent/5 ${
                  activeFilter === item ? "text-accent" : ""
                }`}
              >
                {item}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
