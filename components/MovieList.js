import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { URL_TRENDING } from '../utils/apiConfig';
import { SettingsContext } from '../context/settingsContext';
import { Movie } from '../components/Movie';

export const MovieList = ({ type }) => {
  const { user } = useContext(SettingsContext);
  const [refreshing, setRefreshing] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    switch (type) {
      case 'trending':
        getData();
        break;
      case 'likes':
        getLikes();
        break;
    }
  }, []);

  const getData = React.useCallback(() => {
    setRefreshing(true);
    fetch(URL_TRENDING)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setRefreshing(false);
      });
  }, []);

  const getLikes = React.useCallback(() => {
    setRefreshing(true);
    const likedMovies = { results: [] };
    Promise.all(
      user.likes.map((like) =>
        fetch(like.url)
          .then((res) => res.json())
          .then((json) => {
            likedMovies.results.push(json);
          })
      )
    ).then(() => {
      setData(likedMovies);
      setRefreshing(false);
    });
  }, []);

  const handleLikedMovie = () => {
    if (type === 'likes') {
      getLikes();
    }
  };

  const onRefresh = () => {
    setData({});
    switch (type) {
      case 'trending':
        getData();
        break;
      case 'likes':
        getLikes();
        break;
    }
  };

  return (
    <>
      {refreshing ? (
        <ActivityIndicator size="large" animating={true} />
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {data.results &&
            data.results.map((movie) => (
              <Movie key={movie.id} {...movie} handleLikedMovie={handleLikedMovie} />
            ))}
        </ScrollView>
      )}
    </>
  );
};
