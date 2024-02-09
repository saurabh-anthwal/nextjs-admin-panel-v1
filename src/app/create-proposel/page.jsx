import CreateProposal from "@/components/CreateProposal";
import ProtectedRoute from "@/route/ProtectedRoute";
import React from "react";

const page = () => {
  return (
    <ProtectedRoute>
      <div>
        <CreateProposal />
      </div>
    </ProtectedRoute>
  );
};

export default page;
