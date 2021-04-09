export const URL_TRENDING = `https://api.themoviedb.org/3/trending/movie/week?api_key=ad4add0250df7c550404efa399902a8a`;
export const URL_MOVIE = (id) =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=ad4add0250df7c550404efa399902a8a`;
export const IMAGE_URLS = {
  poster_w185: 'https://image.tmdb.org/t/p/w185',
};

export const IMAGE_POSTER = (width, path) =>
  `https://image.tmdb.org/t/p/w${width}${path}`;
