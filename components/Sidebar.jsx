"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LayoutDashboard, Box, UsersRound } from "lucide-react";
import { usePathname } from "next/navigation";

import { LogoutButton } from "@/components";
import blueBG from "@/public/blue-bg.png";

const AdminCard = () => (
  <div className="flex-v-center">
    <div>
      <Image
        src={blueBG}
        alt="admin"
        width={100}
        height={100}
        className="rounded-full size-3.25 min-w-3.25 object-cover"
      />
    </div>
    <div className="w-full">
      <p className="h4">Full Name</p>
      <p className="text-light line-clamp-1 wrap-break-word w-full max-w-10">
        admin@example.comjjjjjjjjjjjjjjjjjjjjjjjj
      </p>
    </div>
  </div>
);

const NavItem = ({ name, link, index }) => {
  const pathname = usePathname();

  return (
    <Link
      key={index}
      href={link}
      className="flex-v-center md:w-full p-0.75 md:px-1 md:py-0.75 hover:bg-accent/5"
    >
      {index === 0 && (
        <LayoutDashboard
          fill={pathname === link ? "#3423a62a" : "none"}
          color={pathname === link ? "#3423a6" : "black"}
        />
      )}
      {index === 1 && (
        <Box
          fill={pathname === link ? "#3423a62a" : "none"}
          color={pathname === link ? "#3423a6" : "black"}
        />
      )}
      {index === 2 && (
        <UsersRound
          fill={pathname === link ? "#3423a62a" : "none"}
          color={pathname === link ? "#3423a6" : "black"}
        />
      )}

      <p
        className={`show-md font-header! ${
          pathname === link ? "text-accent!" : "text-fg!"
        }`}
      >
        {name}
      </p>
    </Link>
  );
};

const Sidebar = () => {
  const nav_menu = [
    { name: "Dashboard", link: "/" },
    { name: "Orders", link: "/orders" },
    { name: "Customers", link: "/customers" },
  ];

  return (
    <div className="w-full flex flex-col gap-1 bg-white h-full border-r border-outline shadow-xl shadow-shadow">
      <div className="show-md border-b border-outline py-1 px-1">
        <AdminCard />
      </div>
      <div className="flex justify-between items-center md:flex-col md:justify-start md:items-start gap-0 px-0.5 md:px-0">
        {nav_menu.map((item, index) => (
          <NavItem
            key={index}
            name={item.name}
            link={item.link}
            index={index}
          />
        ))}
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
