import { TMDB_API_KEY } from "../common/constant"

const API_KEY = TMDB_API_KEY

const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    // https://api.themoviedb.org/3/trending/all/week?api_key=02cd77fd66b51a3ebbef06df68e060ba&language=en-US
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    // https://api.themoviedb.org/3/discover/movie?api_key=02cd77fd66b51a3ebbef06df68e060ba&with_genres=27
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests
export const BASE_URL_IMG = 'http://image.tmdb.org/t/p/original'