"use client";
import React from "react";
import { IoMdLogOut } from "react-icons/io";
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
        <div className="flex items-center gap-2 font-semibold">
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
              <IoMdLogOut className="h-6 w-6 cursor-pointer text-gray-800 hover:text-red-600" onClick={logout} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
