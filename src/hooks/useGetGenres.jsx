import { useEffect, useState } from "react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const optionsGenre = {
  method: "GET",
  url: "https://api.themoviedb.org/3/genre/movie/list?language=en",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
};

function useGetGenres(data) {
  const [dataGenres, setDataGenres] = useState([]);
  const [newGenres, setNewGenres] = useState([]);

  useEffect(() => {
    async function fetchGenres(params) {
      const { data } = await axiosInstance.request(params);
      setDataGenres(data);
    }

    function setingNewGenres() {
      const results = data.results;

      const loopPerData = results?.map((PerData) => {
        // const loopPerGenresInData = PerData.genre_ids.map((ids) => {
        // const findGenre = dataGenres.genres.find((e) => e.id === ids);
        // return findGenre?.name;
        // });
        // return loopPerGenresInData;
        // return [
        //   PerData,
        //   {
        //     PerGenresInData: loopPerGenresInData,
        //   },
        // ];
        return PerData;
      });

      setNewGenres(loopPerData);
    }

    fetchGenres(optionsGenre);
    setingNewGenres();
  }, [data]);

  return { newGenres };
}

export default useGetGenres;
