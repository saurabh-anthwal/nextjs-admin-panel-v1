import User from "@/components/User";
import ProtectedRoute from "@/route/ProtectedRoute";
import React from "react";

const page = () => {
  return (
    <ProtectedRoute>
      <div>
        <User />
      </div>
    </ProtectedRoute>
  );
};

export default page;
