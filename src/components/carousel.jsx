import { useEffect, useState, useRef } from "react";
import { Play, Download } from "../assets/icons/icons";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const optionsPopular = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
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

export default function Carousel() {
  const [upComing, setUpComing] = useState([]);
  const [genres, setGenres] = useState([]);
  const container = useRef();

  const BindData = (data) => {
    data.forEach((data, i) => {
      container.current.querySelectorAll(".genres")[i].innerHTML = "";

      const newGenres = data.genre_ids.map((g) => {
        const test = genres.genres?.find((e) => e.id === g);
        return test?.name;
      });

      newGenres.forEach((data, index) => {
        container.current.querySelectorAll(".genres")[
          i
        ].innerHTML += `<p>${data}</p>`;

        container.current
          .querySelectorAll(".genres")
          [i].querySelectorAll("p")
          [index].classList.add(
            "py-px",
            "px-1.5",
            "lg:px-2.5",
            "rounded-full",
            "bg-white/10",
            "backdrop-blur-sm",
            "text-white",
            "text-xs",
            "lg:text-lg",
            "inline-flex",
            "items-center",
            "w-fit",
            "h-fit"
          );
      });

      container.current.querySelectorAll("img")[i].src =
        imageURL + data.backdrop_path;
      container.current.querySelectorAll(".title")[i].innerText = data.title;
      container.current.querySelectorAll(".overview")[i].innerText =
        data.overview;
    });
  };

  useEffect(() => {
    async function FetchPopular(params) {
      const { data } = await axiosInstance.request(params);
      setUpComing(data.results.slice(0, 5));
    }
    FetchPopular(optionsPopular);

    async function FetchGenres(params) {
      const { data } = await axiosInstance.request(params);
      setGenres(data);
    }
    FetchGenres(optionsGenre);
  }, []);

  useEffect(() => {
    BindData(upComing);
  }, [upComing]);

  return (
    <div
      id="default-carousel"
      className="relative max-w-[1296px]"
      data-carousel="static"
    >
      {/* Carousel wrapper */}
      <div
        ref={container}
        className="relative h-52 w-full overflow-hidden rounded-lg xl:h-[729px] lg:h-[432px] md:h-[297px]"
      >
        {/* <!-- Item 1 --> */}
        <div
          className="carousel-item hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <img
            src="..."
            className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-full left-full"
            alt="..."
          />
          <div className="absolute z-40 left-1 bottom-1 md:left-3 md:bottom-3 lg:left-5 lg:bottom-5 w-[41.666667%] xl:w-[45%]">
            <span className="genres flex gap-2.5" contentEditable="true"></span>
            <div className="flex flex-col gap-1 md:gap-2.5">
              <h1 className="title line-clamp-1 md:line-clamp-none text-base xl:text-4xl lg:text-3xl md:text-lg font-bold text-white"></h1>
              <p className="overview line-clamp-2 xl:line-clamp-[7] lg:line-clamp-4 md:line-clamp-2 text-xs xl:text-xl lg:text-base md:text-sm text-white"></p>
              <div className="flex gap-2.5">
                <button className="lg:py-2 lg:px-4 py-2 px-2 inline-flex items-center gap-1.5 rounded-full bg-white hover:bg-slate-100 active:scale-95">
                  <Play />
                  <span className="hidden lg:block">Watch Now</span>
                </button>
                <button className="lg:py-2 lg:px-4 py-2 px-2 inline-flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-sm hover:bg-slate-900/70 hover:backdrop-blur-xl active:scale-95">
                  <Download />
                  <span className="text-white hidden lg:block">Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Item 2 --> */}
        <div
          className="carousel-item hidden duration-700 ease-in-out bg-lime-800"
          data-carousel-item
        >
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-full left-full"
            alt="..."
          />
          <div className="absolute z-40 left-1 bottom-1 md:left-3 md:bottom-3 lg:left-5 lg:bottom-5 w-[41.666667%] xl:w-[45%]">
            <span className="genres flex gap-2.5"></span>
            <div className="flex flex-col gap-1 md:gap-2.5">
              <h1 className="title line-clamp-1 md:line-clamp-none text-base xl:text-4xl lg:text-3xl md:text-lg font-bold text-white"></h1>
              <p className="overview line-clamp-2 xl:line-clamp-[7] lg:line-clamp-4 md:line-clamp-2 text-xs xl:text-xl lg:text-base md:text-sm text-white"></p>
              <div className="flex gap-2.5">
                <button className="lg:py-2 lg:px-4 py-2 px-2 inline-flex items-center gap-1.5 rounded-full bg-white hover:bg-slate-100 active:scale-95">
                  <Play />
                  <span className="hidden lg:block">Watch Now</span>
                </button>
                <button className="lg:py-2 lg:px-4 py-2 px-2 inline-flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-sm hover:bg-slate-900/70 hover:backdrop-blur-xl active:scale-95">
                  <Download />
                  <span className="text-white hidden lg:block">Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Item 3 --> */}
        <div
          className="carousel-item hidden duration-700 ease-in-out bg-lime-800"
          data-carousel-item
        >
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-full left-full"
            alt="..."
          />
          <div className="absolute z-40 left-1 bottom-1 md:left-3 md:bottom-3 lg:left-5 lg:bottom-5 w-[41.666667%] xl:w-[45%]">
            <span className="genres flex gap-2.5"></span>
            <div className="flex flex-col gap-1 md:gap-2.5">
              <h1 className="title line-clamp-1 md:line-clamp-none text-base xl:text-4xl lg:text-3xl md:text-lg font-bold text-white"></h1>
              <p className="overview line-clamp-2 xl:line-clamp-[7] lg:line-clamp-4 md:line-clamp-2 text-xs xl:text-xl lg:text-base md:text-sm text-white"></p>
              <div className="flex gap-2.5">
                <button className="lg:py-2 lg:px-4 py-2 px-2 inline-flex items-center gap-1.5 rounded-full bg-white hover:bg-slate-100 active:scale-95">
                  <Play />
                  <span className="hidden lg:block">Watch Now</span>
                </button>
                <button className="lg:py-2 lg:px-4 py-2 px-2 inline-flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-sm hover:bg-slate-900/70 hover:backdrop-blur-xl active:scale-95">
                  <Download />
                  <span className="text-white hidden lg:block">Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Item 4 --> */}
        <div
          className="carousel-item hidden duration-700 ease-in-out bg-lime-800"
          data-carousel-item
        >
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-full left-full"
            alt="..."
          />
          <div className="absolute z-40 left-1 bottom-1 md:left-3 md:bottom-3 lg:left-5 lg:bottom-5 w-[41.666667%] xl:w-[45%]">
            <span className="genres flex gap-2.5"></span>
            <div className="flex flex-col gap-1 md:gap-2.5">
              <h1 className="title line-clamp-1 md:line-clamp-none text-base xl:text-4xl lg:text-3xl md:text-lg font-bold text-white"></h1>
              <p className="overview line-clamp-2 xl:line-clamp-[7] lg:line-clamp-4 md:line-clamp-2 text-xs xl:text-xl lg:text-base md:text-sm text-white"></p>
              <div className="flex gap-2.5">
                <button className="lg:py-2 lg:px-4 py-2 px-2 inline-flex items-center gap-1.5 rounded-full bg-white hover:bg-slate-100 active:scale-95">
                  <Play />
                  <span className="hidden lg:block">Watch Now</span>
                </button>
                <button className="lg:py-2 lg:px-4 py-2 px-2 inline-flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-sm hover:bg-slate-900/70 hover:backdrop-blur-xl active:scale-95">
                  <Download />
                  <span className="text-white hidden lg:block">Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Item 5 --> */}
        <div
          className="carousel-item hidden duration-700 ease-in-out bg-lime-800"
          data-carousel-item
        >
          <img
            src="http://flowbite.com/docs/images/carousel/carousel-5.svg"
            className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-full left-full"
            alt="..."
          />
          <div className="absolute z-40 left-1 bottom-1 md:left-3 md:bottom-3 lg:left-5 lg:bottom-5 w-[41.666667%] xl:w-[45%]">
            <span className="genres flex gap-2.5"></span>
            <div className="flex flex-col gap-1 md:gap-2.5">
              <h1 className="title line-clamp-1 md:line-clamp-none text-base xl:text-4xl lg:text-3xl md:text-lg font-bold text-white"></h1>
              <p className="overview line-clamp-2 xl:line-clamp-[7] lg:line-clamp-4 md:line-clamp-2 text-xs xl:text-xl lg:text-base md:text-sm text-white"></p>
              <div className="flex gap-2.5">
                <button className="lg:py-2 lg:px-4 py-2 px-2 inline-flex items-center gap-1.5 rounded-full bg-white hover:bg-slate-100 active:scale-95">
                  <Play />
                  <span className="hidden lg:block">Watch Now</span>
                </button>
                <button className="lg:py-2 lg:px-4 py-2 px-2 inline-flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-sm hover:bg-slate-900/70 hover:backdrop-blur-xl active:scale-95">
                  <Download />
                  <span className="text-white hidden lg:block">Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 end-0 z-30 flex">
        <button
          type="button"
          className="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
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
        <button
          type="button"
          className="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
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
      </div>
    </div>
  );
}
