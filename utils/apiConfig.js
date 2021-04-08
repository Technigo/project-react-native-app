const BASE_URL = 'https://api.themoviedb.org/3';

export const URL_TRENDING = `${BASE_URL}/trending/movie/week`;
export const URL_MOVIE = (id) => `https://api.themoviedb.org/3/movie/${id}`;
export const URL_COLLECTION = (id) => `https://api.themoviedb.org/3/collection/${id}`;
export const IMAGE_URLS = {
  poster_w185: 'https://image.tmdb.org/t/p/w185',
  backdrop: 'https://image.tmdb.org/t/p/w1280'
};

export const IMAGE_POSTER = (width, path) => `https://image.tmdb.org/t/p/w${width}${path}`;
export const IMAGE_BACKDROP = (path) => (path ? `https://image.tmdb.org/t/p/w1280${path}` : null);
