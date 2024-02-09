"use client";
import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { CiLogout } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { PiNotePencilThin } from "react-icons/pi";
import { HiOutlineUsers } from "react-icons/hi2";
import { RiMenu2Line } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { useRouter, usePathname } from "next/navigation";

const SideBar = () => {
  const router = useRouter();
  const currentPath = usePathname();

  const [showSidebar, setShowSidebar] = useState(true);

  const checkActiveLink = (path) => {
    if (path == currentPath) {
      return true;
    } else {
      return false;
    }
  };

  const handleAddCollection = () => {
    alert("fs");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div
      className={`bg-gray-50 p-2 flex flex-col justify-between ${
        showSidebar ? "max-w-[300px] w-[260px]" : "max-w-[80px] w-[80px]"
      }`}
      style={{ height: "88vh" }}
    >
      <div className="">
        <div className="logo toggle flex justify-between mb-6 px-2">
          <div className=""></div>
          <div className="">
            <button className="cursor-pointer" onClick={toggleSidebar}>
              <RiMenu2Line size={28} className="text-gray-800" />
            </button>
          </div>
        </div>
        <ul className="cursor-pointer text-white">
          <li
            className={`m-2 flex hover:bg-gray-300 hover:text-gray-800  items-center gap-2 p-3 rounded-md ${
              checkActiveLink("/")
                ? "bg-black text-gray-100"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => router.push("/")}
          >
            <span>
              <RxDashboard />
            </span>{" "}
            {showSidebar && <span>Admin dashboard</span>}
          </li>
          <li
            onClick={() => router.push("/create-proposel")}
            className={`m-2 flex hover:bg-gray-300 hover:text-gray-800  items-center gap-2 p-3 rounded-md ${
              checkActiveLink("/create-proposel")
                ? "bg-black text-gray-100"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            <span>
              <PiNotePencilThin />
            </span>{" "}
            {showSidebar && <span>Create Proposal</span>}
          </li>
          <li
            onClick={() => router.push("/users")}
            className={`m-2 flex hover:bg-gray-300 hover:text-gray-800  items-center gap-2 p-3 rounded-md ${
              checkActiveLink("/users")
                ? "bg-black text-gray-100"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            <span>
              <HiOutlineUsers />
            </span>{" "}
            {showSidebar && <span>Users</span>}
          </li>
          <li
            className={`m-2 flex hover:bg-gray-300 hover:text-gray-800  items-center gap-2 p-3 rounded-md ${
              checkActiveLink("/settings")
                ? "bg-black text-gray-100"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => router.push("/settings")}
          >
            <span>
              <IoSettingsOutline />
            </span>{" "}
            {showSidebar && <span>Setting</span>}
          </li>
        </ul>
      </div>
      <ul className=" p-2">
        <li className="flex bg-gray-200 hover:bg-gray-300 hover:text-gray-800 text-gray-800 items-center gap-2 p-4 rounded-md">
          <span>
            <CiLogout />
          </span>{" "}
          {showSidebar && <span>Logout</span>}
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
