export const MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=37071aa78436fb5a9d697ae6e48d24ad';
export const DETAILS_URL = (movieID) =>
	`https://api.themoviedb.org/3/movie/${movieID}?api_key=37071aa78436fb5a9d697ae6e48d24ad&language=en-US`;
export const TOP_RATED_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=37071aa78436fb5a9d697ae6e48d24ad&language=en-US';
export const UPCOMING_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=37071aa78436fb5a9d697ae6e48d24ad&language=en-US';
export const CHRISTMAS_URL = 'https://api.themoviedb.org/3/search/movie?api_key=37071aa78436fb5a9d697ae6e48d24ad&language=en-US&query=christmas&page=1&include_adult=false';
export const HALLOWEEN_URL = 'https://api.themoviedb.org/3/search/movie?api_key=37071aa78436fb5a9d697ae6e48d24ad&language=en-US&query=halloween&page=1&include_adult=false';