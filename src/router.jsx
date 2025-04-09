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
        children: [
          {
            path: ":keyword",
            element: <Search />,
          },
        ],
      },
    ],
  },
]);


{/* <>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {data.results?.map((data, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="cards relative snap-center min-w-full bg-transparent rounded-lg shadow-sm"
                      >
                        <a href="#">
                          <img
                            className="rounded-lg h-full"
                            src={imageURL + data.poster_path}
                            alt="..."
                          />
                        </a>
                        <div className="absolute inset-x-1 lg:inset-x-1.5 bottom-px lg:bottom-1 h-fit overflow-hidden">
                          <a href="#">
                            <h5 className="line-clamp-2 text-xs xl:text-xl lg:text-base font-bold tracking-tigh text-white">
                              mobile
                            </h5>
                          </a>
                          <div className="flex">
                            <span className="inline-flex items-center space-x-px">
                              <Star />
                              <p className="text-xs xl:text-base lg:text-sm font-bold text-white">
                                4.6
                              </p>
                            </span>
                            <p className="line-clamp-1 genres ml-1 text-xs xl:text-base lg:text-sm font-bold text-gray-600">
                              |
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
              />
</>
             */}
export default router;
