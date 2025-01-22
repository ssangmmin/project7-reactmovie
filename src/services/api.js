const API_KEY = "f21970920ea24ed25e976d99ecdf9629";
const BASE_URL = "https://api.themoviedb.org/3";
// https://api.themoviedb.org/3/account/{account_id}/favorite/movies


export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
