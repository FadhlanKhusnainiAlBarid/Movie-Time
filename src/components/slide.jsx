import { useRef, useEffect, useState } from "react";
import { Star } from "../assets/icons/icons";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const optionsTopRated = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
};

const optionsGenre = {
  method: "GET",
  url: "https://api.themoviedb.org/3/genre/movie/list?language=en",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjFhOTgxYzViY2JkMDUzY2Q1ZWY4OTUyMGRhOWE0NSIsIm5iZiI6MTczMDA4NjM0NS4xNiwic3ViIjoiNjcxZjA1Yzk1ZDBkZTg5MDQyZDk4OTM4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.qb6CPBdWNIIkAwfFCDsYdT4zFkUNXBwywaKv2MCrO0s",
  },
};

const imageURL = "https://image.tmdb.org/t/p/original/";

export default function Slide() {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);
  const container = useRef();
  const [endOfPrev, setEndOfPrev] = useState(true);
  const [endOfNext, setEndOfNext] = useState(false);

  const handling = () => {
    setEndOfPrev(container.current.scrollLeft == 0);
    setEndOfNext(
      container.current.scrollLeft + container.current.offsetWidth >=
        container.current.scrollWidth
    );
  };

  const ButtonScrollLeft = () => {
    const perWidthContent =
      (container.current.querySelectorAll(".cards")[0].offsetWidth + 8) * 3;
    container.current.scrollLeft -= perWidthContent;
  };

  const scrollRight = () => {
    const scrollPerContent =
      (container.current.querySelectorAll(".cards")[0].offsetWidth + 8) * 3;
    container.current.scrollLeft += scrollPerContent;
  };

  useEffect(() => {
    async function fetchTopRated(params) {
      const { data } = await axiosInstance.request(params);
      setData(data);
    }

    async function fetchGenres(params) {
      const { data } = await axiosInstance.request(params);
      setGenres(data);
    }

    fetchTopRated(optionsTopRated);
    fetchGenres(optionsGenre);
  }, []);

  return (
    <>
      <div className="relative">
        <h1>Tittle section</h1>
        <div
          className="scroll-smooth w-full snap-x snap-mandatory overflow-x-hidden overflow-hidden"
          ref={container}
          onScroll={handling}
        >
          <div className="container_slide flex flex-nowrap space-x-2 w-fit">
            {data.results?.map((data) => {
              let textGenre = "";
              const newGenre = data.genre_ids.map((genre) => {
                const test = genres.genres?.find((e) => e.id === genre);
                return test.name;
              });

              for (let i = 0; i < newGenre.length; i++) {
                if (i === 0) {
                  textGenre = newGenre[i];
                } else {
                  textGenre += " • ";
                  textGenre += newGenre[i];
                }
              }
              return (
                <div
                  key={data.id}
                  className="cards relative snap-center w-24 xl:w-52 lg:w-40 md:w-28 bg-transparent rounded-lg shadow-sm m-0"
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
                        | {textGenre}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {!endOfPrev && (
          <button
            type="button"
            onClick={ButtonScrollLeft}
            className="absolute inset-y-0 bottom-0 flex items-center justify-center h-full px-1 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
        )}

        {!endOfNext && (
          <button
            type="button"
            onClick={scrollRight}
            className="absolute right-0 inset-y-0 flex items-center justify-center h-full px-1 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        )}
      </div>
    </>
  );
}
