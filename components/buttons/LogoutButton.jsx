"use client";

import React from "react";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
  return (
    <button className="flex-v-center md:w-full p-0.75 md:px-1 md:py-0.75 hover:bg-red/5">
      <LogOut color="#ff3b3b" />
      <p className="text-red show-md">Logout</p>
    </button>
  );
};

export default LogoutButton;
