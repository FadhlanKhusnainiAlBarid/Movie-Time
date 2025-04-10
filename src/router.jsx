import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import Home from "./pages/Home";
import MainLayout from "./MainLayout";
import Search from "./pages/search";
import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
        children: [
          {
            path: ":keyword",
            element: <Search />,
          },
        ],
      },
      // page detail
      {
        path: "Detail/:movieId",
        element: <Detail />,
      },
      {
        path: "Favorites",
        element: <Favorites />,
      },
    ],
  },
]);

export default router;
