import { useState, useEffect } from "react";

export const API_URL = () =>
  `https://api.themoviedb.org/3/trending/all/week?api_key=109d46d58de8af95e0256f956b0a6d8c&language=en-US&page=1`;

export const API_URL_UPCOMING = () =>
  `https://api.themoviedb.org/3/movie/upcoming?api_key=109d46d58de8af95e0256f956b0a6d8c&language=en-US&page=1`;

export const API_DETAILS = (movies_id) =>
  `https://api.themoviedb.org/3/movie/${movies_id}?api_key=109d46d58de8af95e0256f956b0a6d8c&language=en-US`;

export const API_VIDEOS = (movies_id) =>
  `https://api.themoviedb.org/3/movie/${movies_id}/videos?api_key=109d46d58de8af95e0256f956b0a6d8c&language=en-US`;

export const useGetTrending = () => {
  const [trendingList, setTrendingList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(API_URL())
      .then((response) => response.json())
      .then((data) => setTrendingList(data.results))
      .catch(() => setError(true));
  }, []);
  return { trendingList, error };
};

export const useGetUpcoming = () => {
  const [upcomingList, setUpcomingList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(API_URL_UPCOMING())
      .then((response) => response.json())
      .then((data) => setUpcomingList(data.results))
      .catch(() => setError(true));
  }, []);
  return { upcomingList, error };
};

export const useGetMediaDetail = (media_id) => {
  const [detail, setDetail] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(API_DETAILS(media_id))
      .then((response) => response.json())
      .then((data) => setDetail(data))
      .catch(() => setError(true));
  }, [media_id]);
  return { detail, error };
};

export const useGetMediaVideos = (media_id) => {
  const [videoKey, setVideoKey] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(API_VIDEOS(media_id))
      .then((response) => response.json())
      .then((data) => setVideoKey(data.results[0].key))
      .catch(() => setError(true));
  }, [media_id]);
  return { videoKey, error };
};
