import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star } from "../assets/icons/icons";
import axios from "axios";
import { Pagination, createTheme, ThemeProvider } from "flowbite-react";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// const options = {
//   method: "GET",
//   url: `https://api.themoviedb.org/3/search/movie?query=movie&include_adult=false&language=en-US&page=1`,
//   headers: {
//     accept: "application/json",
//     Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
//   },
// };

const imageURL = "https://image.tmdb.org/t/p/original/";

export default function Search() {
  const { keyword } = useParams();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState(false);

  useEffect(() => {
    if (keyword === undefined) {
      setSearch(false);
    } else {
      setResults(false);
      setSearch(true);
      setLoading(true);

      async function fetchSearchMovie(keyword) {
        const { data } = await axiosInstance.request({
          method: "GET",
          url: `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`,
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        });
        setResults(data.total_results > 0);
        setCurrentPage(1);
        setData(data);
        setTotalPages(data.total_pages == 0 ? 0 : data.total_pages);
        setLoading(false);
      }

      const loading = setTimeout(() => {
        fetchSearchMovie(keyword);
      }, 1000);

      return () => clearTimeout(loading);
    }
  }, [keyword]);

  const onPageChange = async (page) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);

    const { data } = await axiosInstance.request({
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=${page}`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    });

    const loading = setTimeout(() => {
      setData(data);
      setLoading(false);
      setCurrentPage(page);
    }, 1000);

    return () => clearTimeout(loading);
  };

  const customTheme = createTheme({
    base: "",
    layout: {
      table: {
        base: "text-sm text-gray-700 dark:text-gray-400",
        span: "font-semibold text-gray-900 dark:text-white",
      },
    },
    pages: {
      base: "xs:mt-0 mt-2 inline-flex items-center space-x-0 md:-space-x-px",
      showIcon: "inline-flex",
      previous: {
        base: "ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
        icon: "h-5 w-5",
      },
      next: {
        base: "rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
        icon: "h-5 w-5",
      },
      selector: {
        base: "hidden md:block w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
        active:
          "bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
        disabled: "cursor-not-allowed opacity-50",
      },
    },
  });

  return (
    <>
      {search ? (
        <div className="mb-12">
          {loading ? (
            <div className="w-full h-screen flex justify-center items-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              {results ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                    {data.results?.map((data, index) => {
                      return (
                        <>
                          <div
                            key={index}
                            className="cards relative snap-center min-w-full hover:scale-95 bg-transparent rounded-lg shadow-sm"
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
                                  {data.title}
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
                    theme={customTheme}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                  />
                </div>
              ) : (
                <p className="text-9xl text-red-600">Salah</p>
              )}
            </>
          )}
        </div>
      ) : (
        <div className="w-full h-screen flex justify-center items-center">
          <h1 className="text-4xl font-bold text-white">
            Search movie you want
          </h1>
        </div>
      )}
    </>
  );
}
