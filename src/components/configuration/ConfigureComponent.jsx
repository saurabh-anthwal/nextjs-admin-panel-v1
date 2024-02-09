"use client";
import { isAuthRoute } from "@/config/routesConfig";
import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "../Navbar";
import SideBar from "../SideBar";

const ConfigureComponent = ({ children }) => {
  const pathName = usePathname();
  return (
    <>
    {pathName && isAuthRoute(pathName) && <Navbar />}
      <main className="flex">
        {pathName && isAuthRoute(pathName) && <SideBar />}
        <div className="flex-1">
        {children}
        </div>
      </main>
    </>
  );
};

export default ConfigureComponent;
