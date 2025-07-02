import React from "react";
import SideBarDashboard from "./components/SideBarDashboard";
import { Outlet } from "react-router-dom";

const LayoutDashboard = () => {
  return (
    <div className="flex h-screen">
      <SideBarDashboard />
      <div className="flex-1 ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutDashboard;
