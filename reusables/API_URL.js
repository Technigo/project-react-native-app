export const MOVIE_LIST_URL = `https://api.themoviedb.org/3/movie/popular?api_key=84c715899a256d0ed1ae1ac98d6fb9a6&language=en-US&page=1`
 
export const MOVIE_DETAIL_URL = (movie_id) => `https://api.themoviedb.org/3/movie/${movie_id}?api_key=84c715899a256d0ed1ae1ac98d6fb9a6&language=en-US`

export const MOVIE_BACKDROP = (imagePath) => `http://image.tmdb.org/t/p/h632${imagePath}`
