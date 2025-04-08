import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star } from "../assets/icons/icons";
import axios from "axios";

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

  useEffect(() => {
    console.log(keyword);
    if (keyword === undefined) {
      setSearch(false);
    } else {
      setSearch(true);

      async function fetchSearchMovie(keyword) {
        const { data } = await axiosInstance.request({
          method: "GET",
          url: `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`,
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        });
        setData(data.results);
      }

      fetchSearchMovie(keyword);
    }
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-5">
        {search ? (
          <>
            <div className="cards relative snap-center w-24 xl:w-52 lg:w-40 md:w-28 bg-transparent rounded-lg shadow-sm m-0">
              <a href="#">
                <img
                  className="rounded-lg h-full"
                  src="https://flowbite.com/docs/images/blog/image-4.jpg"
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
            <div className="cards relative snap-center w-24 xl:w-52 lg:w-40 md:w-28 bg-transparent rounded-lg shadow-sm m-0">
              <a href="#">
                <img
                  className="rounded-lg h-full"
                  src="https://flowbite.com/docs/images/blog/image-4.jpg"
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
            <div className="cards relative snap-center w-24 xl:w-52 lg:w-40 md:w-28 bg-transparent rounded-lg shadow-sm m-0">
              <a href="#">
                <img
                  className="rounded-lg h-full"
                  src="https://flowbite.com/docs/images/blog/image-4.jpg"
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
            <div className="cards relative snap-center w-24 xl:w-52 lg:w-40 md:w-28 bg-transparent rounded-lg shadow-sm m-0">
              <a href="#">
                <img
                  className="rounded-lg h-full"
                  src="https://flowbite.com/docs/images/blog/image-4.jpg"
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
            <div className="cards relative snap-center w-24 xl:w-52 lg:w-40 md:w-28 bg-transparent rounded-lg shadow-sm m-0">
              <a href="#">
                <img
                  className="rounded-lg h-full"
                  src="https://flowbite.com/docs/images/blog/image-4.jpg"
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
            <div className="cards relative snap-center w-24 xl:w-52 lg:w-40 md:w-28 bg-transparent rounded-lg shadow-sm m-0">
              <a href="#">
                <img
                  className="rounded-lg h-full"
                  src="https://flowbite.com/docs/images/blog/image-4.jpg"
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
            <div className="cards relative snap-center w-24 xl:w-52 lg:w-40 md:w-28 bg-transparent rounded-lg shadow-sm m-0">
              <a href="#">
                <img
                  className="rounded-lg h-full"
                  src="https://flowbite.com/docs/images/blog/image-4.jpg"
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
            <div className="cards relative snap-center w-24 xl:w-52 lg:w-40 md:w-28 bg-transparent rounded-lg shadow-sm m-0">
              <a href="#">
                <img
                  className="rounded-lg h-full"
                  src="https://flowbite.com/docs/images/blog/image-4.jpg"
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
            <div className="cards relative snap-center w-24 xl:w-52 lg:w-40 md:w-28 bg-transparent rounded-lg shadow-sm m-0">
              <a href="#">
                <img
                  className="rounded-lg h-full"
                  src="https://flowbite.com/docs/images/blog/image-4.jpg"
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
            <div className="cards relative snap-center w-24 xl:w-52 lg:w-40 md:w-28 bg-transparent rounded-lg shadow-sm m-0">
              <a href="#">
                <img
                  className="rounded-lg h-full"
                  src="https://flowbite.com/docs/images/blog/image-4.jpg"
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
            <div className="cards relative snap-center w-24 xl:w-52 lg:w-40 md:w-28 bg-transparent rounded-lg shadow-sm m-0">
              <a href="#">
                <img
                  className="rounded-lg h-full"
                  src="https://flowbite.com/docs/images/blog/image-4.jpg"
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
        ) : null}
      </div>
    </>
  );
}
