import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/authentication/token/new",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTI4MzA1ZGFjNThjZTFmNWQxZmI3YzM1YTU0M2I5NyIsIm5iZiI6MTczMDA4NjM0NS4xNiwic3ViIjoiNjcxZjA1Yzk1ZDBkZTg5MDQyZDk4OTM4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.OMOWDyyIvZevLR904-TijE1RJo0r1d4QUvwqpfC8Mmg",
  },
};

function useReqToken(login) {
  const [token, setToken] = useState([]);
  const [detail, setDetail] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (login) {
      async function reqToken(params) {
        const response = await axiosInstance.request(params);
        setToken(response);
      }
      reqToken(options);
      console.log(token);
    }
  }, [login]);

  useEffect(() => {
    // console.log(data);
    // navigate("/search");
    if (token.status) {
      navigate({
        to: `https://www.themoviedb.org/authenticate/${token.data.request_token}?redirect_to=http://localhost:5173/approved`,
      });
      // console.log(token.data);
    }
  }, [token]);
}

export default useReqToken;
