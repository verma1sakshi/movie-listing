import axios from "axios";

const API_KEY = "b9bd48a6";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query, page = 1) => {
  const { data } = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}`);
  console.log(data);
  
  return data;
};

export const getMovieDetails = async (id) => {
  const { data } = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
  return data;
};
