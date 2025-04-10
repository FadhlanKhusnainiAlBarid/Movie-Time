import { useEffect, useState } from "react";
import { Play, Download } from "../assets/icons/icons";
import { Carousel, createTheme } from "flowbite-react";
import axios from "axios";
import useGetGenres from "../hooks/useGetGenres";

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

const imageURL = "https://image.tmdb.org/t/p/original/";

export default function CarouselCom() {
  const [upComing, setUpComing] = useState([]);
  const { newGenres } = useGetGenres(upComing);

  useEffect(() => {
    async function FetchPopular(params) {
      const { data } = await axiosInstance.request(params);
      setUpComing(data.results.slice(0, 5));
    }

    FetchPopular(optionsPopular);
  }, []);

  const customTheme = createTheme({
    root: {
      base: "relative h-52 w-full overflow-hidden rounded-lg xl:h-[729px] lg:h-[432px] md:h-[297px]",
    },
    indicators: {
      wrapper: "absolute inset-0",
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-hidden scroll-smooth rounded-lg",
    },
  });

  return (
    <Carousel theme={customTheme}>
      {newGenres.map((data) => {
        return (
          <div
            key={data.id}
            className="block w-full h-full -translate-x-1/2 -translate-y-1/2 top-full left-full"
          >
            <img
              src={imageURL + data.backdrop_path}
              alt="..."
              className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-full left-full"
            />
            <div className="absolute z-40 left-1 bottom-1 md:left-3 md:bottom-3 lg:left-5 lg:bottom-5 w-[41.666667%] xl:w-[45%]">
              <span className="genres flex gap-2.5">
                {data.PerGenres.map((genre, index) => {
                  return (
                    <p
                      key={index}
                      className="py-1 px-1.5 lg:px-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs lg:text-lg inline-flex items-center w-fit h-fit"
                    >
                      {genre}
                    </p>
                  );
                })}
              </span>
              <div className="flex flex-col gap-1 md:gap-2.5">
                <h1 className="line-clamp-1 md:line-clamp-none text-base xl:text-4xl lg:text-3xl md:text-lg font-bold text-white">
                  {data.title}
                </h1>
                <p className="line-clamp-2 xl:line-clamp-5 lg:line-clamp-3 md:line-clamp-2 text-xs xl:text-xl lg:text-base md:text-sm text-white">
                  {data.overview}
                </p>
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
            {/* <div className="absolute z-[100] left-0 bottom-0 w-full h-full" /> */}
          </div>
        );
      })}
    </Carousel>
  );
}
