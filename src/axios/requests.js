const API_Key = "?api_key=db35d66c24365b6aaf3fe16272ee4134";

const requests = {
  getNetflixOriginals: `/discover/tv${API_Key}&with_networks=213`,
  getPopular : `/movie/popular${API_Key}`,
  getTopRated: `/movie/top_rated${API_Key}`,
  getLatest: `/movie/latest${API_Key}`,
  getUpcoming:`/movie/upcoming${API_Key}`,
  getAction:`/discover/movie${API_Key}&with_genres=28`,
  getComedy:`/discover/movie${API_Key}&with_genres=35`,
  getHorror:`/discover/movie${API_Key}&with_genres=27`,
  getRomance:`/discover/movie${API_Key}&with_genres=10749`,
  getDocumentary:`/discover/movie${API_Key}&with_genres=99`,
};

export default requests;