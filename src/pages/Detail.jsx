import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Download, Play, Save } from "../assets/icons/icons";
import { useAddFavorite } from "../hooks/useAddFavorite";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjFhOTgxYzViY2JkMDUzY2Q1ZWY4OTUyMGRhOWE0NSIsIm5iZiI6MTczMDA4NjM0NS4xNiwic3ViIjoiNjcxZjA1Yzk1ZDBkZTg5MDQyZDk4OTM4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.qb6CPBdWNIIkAwfFCDsYdT4zFkUNXBwywaKv2MCrO0s",
  },
};

const imageURL = "https://image.tmdb.org/t/p/original/";

function Detail() {
  const { movieId } = useParams();
  const [data, setData] = useState({});
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function fetchDetailMovie() {
      const { data } = await axiosInstance.request({
        ...options,
        url: `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      });
      setData(data);
      setloading(false);
    }

    const loading = setTimeout(() => {
      fetchDetailMovie();
    }, 1000);

    return () => clearTimeout(loading);
  }, []);

  const formatTime = (movieRuntime) => {
    let time = movieRuntime;
    let hour = 0;
    let newTime = "";

    do {
      if (time >= 60) {
        time -= 60;
        hour += 1;
        newTime = `${hour}h`;
      } else {
        newTime += `${time}m`;
        break;
      }
    } while (true);

    return newTime;
  };

  return (
    <>
      <div
        className={`relative w-full h-52 xl:h-[729px] lg:h-[432px] md:h-[297px] rounded-lg overflow-hidden ${
          loading ? "animate-pulse" : ""
        }`}
      >
        <img className="h-full" src={imageURL + data.backdrop_path} alt="" />
        <div className="absolute z-40 left-1 bottom-1 md:left-3 md:bottom-3 lg:left-5 lg:bottom-5 w-[41.666667%] xl:w-[45%]">
          <span className="genres flex gap-2.5">
            {data.genres?.map((d) => {
              return (
                <p
                  key={d.id}
                  className="py-1 px-1.5 lg:px-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs lg:text-lg inline-flex items-center w-fit h-fit"
                >
                  {d.name}
                </p>
              );
            })}
          </span>
          <div className="flex flex-col gap-1 md:gap-2.5">
            <h1 className="line-clamp-1 md:line-clamp-none text-base xl:text-4xl lg:text-3xl md:text-lg font-bold text-white">
              {data.title}
            </h1>
            <p className="line-clamp-2 xl:line-clamp-5 lg:line-clamp-3 md:line-clamp-2 text-xs xl:text-xl lg:text-base md:text-sm text-white">
              {!loading && formatTime(data.runtime)}
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
              <button
                onClick={async () => await useAddFavorite(data.id)}
                className="lg:py-2 lg:px-4 py-2 px-2 inline-flex items-center gap-1.5 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/15 hover:backdrop-blur-sm active:scale-95"
              >
                <Save />
                <span className="hidden lg:block text-white">Add Favorite</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
