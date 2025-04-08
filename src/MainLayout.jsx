import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

export default function MainLayout() {
  return (
    <div className="relative container mx-auto h-min">
      <Sidebar />

      <Navbar />

      {/* content */}
      <div className="p-4 sm:ml-52 max-w-full">
        <Outlet />
      </div>
    </div>
  );
}
