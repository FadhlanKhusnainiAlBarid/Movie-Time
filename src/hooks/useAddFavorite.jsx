import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const options = {
  method: "POST",
  url: "https://api.themoviedb.org/3/account/21596517/favorite",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTI4MzA1ZGFjNThjZTFmNWQxZmI3YzM1YTU0M2I5NyIsIm5iZiI6MTczMDA4NjM0NS4xNiwic3ViIjoiNjcxZjA1Yzk1ZDBkZTg5MDQyZDk4OTM4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.OMOWDyyIvZevLR904-TijE1RJo0r1d4QUvwqpfC8Mmg",
  },
  data: { media_type: "movie", media_id: 550, favorite: true },
};

export const useAddFavorite = async (movideId) => {
  const response = await axiosInstance.request({
    ...options,
    data: { ...options.data, media_id: movideId },
  });

  if (response) {
    console.log(response);
  }
};
