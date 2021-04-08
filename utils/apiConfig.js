const BASE_URL = 'https://api.themoviedb.org/3';

export const URL_TRENDING = `${BASE_URL}/trending/movie/week?api_key=ad4add0250df7c550404efa399902a8a`;
export const URL_MOVIE = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=ad4add0250df7c550404efa399902a8a`;
export const URL_COLLECTION = (id) => `https://api.themoviedb.org/3/collection/${id}`;
export const IMAGE_URLS = {
  poster_w185: 'https://image.tmdb.org/t/p/w185',
  backdrop: 'https://image.tmdb.org/t/p/w1280'
};
export const URL_LISTGET = (id) => `https://api.themoviedb.org/3/list/${id}`;
export const URL_LISTCLEAR = (id) => `https://api.themoviedb.org/3/list/${id}/clear`;
export const URL_LISTADD = (id) => `https://api.themoviedb.org/3/list/${id}/add_item`;

export const IMAGE_POSTER = (width, path) => `https://image.tmdb.org/t/p/w${width}${path}`;
export const IMAGE_BACKDROP = (path) => (path ? `https://image.tmdb.org/t/p/w1280${path}` : null);

