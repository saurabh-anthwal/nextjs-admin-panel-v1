"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const item = localStorage.getItem("userInfo");
      if (!item) {
        router.push("/login")
      }
    }
  }, []);

  return children;
};

export default ProtectedRoute;
