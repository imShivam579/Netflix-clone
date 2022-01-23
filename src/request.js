const API_KEY = "dd89a2f8da461cadcbe650b80b96ceba";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetfixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_generes=27`,
  fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=100749`,
  fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};
export default request;
