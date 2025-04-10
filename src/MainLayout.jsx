import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
// import useAddFavorite from "./hooks/useAddFavorite";

export default function MainLayout() {
  // const { newUrlReq } = useAddFavorite();

  // useEffect(() => {
  //   console.log(newUrlReq);
  // }, []);
  return (
    <div className="relative container mx-auto h-min">
      <Sidebar />

      <Navbar />

      {/* content */}
      <div className="px-4 space-y-3 md:space-y-5 lg:space-y-7 md sm:ml-52 max-w-full">
        <Outlet />
      </div>
    </div>
  );
}
