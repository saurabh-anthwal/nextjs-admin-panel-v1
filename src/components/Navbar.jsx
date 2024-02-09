"use client";
import React from "react";
import { FaUser } from "react-icons/fa";
import { IoLogoReddit } from "react-icons/io";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Navbar = () => {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("userInfo");
    router.push("/login");
  };

  return (
    <div className="bg-gray-100">
      <div className="flex w-[98%] m-auto justify-between  p-2 items-center">
        <div className="flex items-center gap-2">
          <IoLogoReddit />
          LOGO
        </div>
        <div>
          <ul className="flex items-center gap-4">
            <li className="hover:bg-gray-200 px-4 py-2 rounded-md cursor-pointer text-gray-800">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:bg-gray-200 px-4 py-2 rounded-md cursor-pointer text-gray-800">
              <Link href={"/"}>Contact</Link>
            </li>
            <li className="md:ml-4">
              <FaUser className="cursor-pointer text-gray-800" onClick={logout} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
