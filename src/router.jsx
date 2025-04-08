import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./MainLayout";
import Search from "./pages/search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

export default router;
