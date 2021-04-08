import React, { useEffect, useState } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { MainViewContainer, MainHeader } from '../components/Styled/MainViews';
import { Movie } from '../components/Movie';

import { URL_TRENDING } from '../utils/apiConfig';

export const Movies = () => {
  const [refreshing, setRefreshing] = useState(true);
  const [data, setData] = useState({});
  const url = `${URL_TRENDING}?api_key=ad4add0250df7c550404efa399902a8a`;

  useEffect(() => {
    getData();
  }, []);

  const getData = React.useCallback(() => {
    setRefreshing(true);
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setRefreshing(false);
      });
  }, [url]);

  const onRefresh = () => {
    setData({});
    getData();
  };

  return (
    <MainViewContainer verticalAlign="flex-start">
      <MainHeader>Trending Movies</MainHeader>
      {refreshing ? (
        <ActivityIndicator size="large" animating={true} />
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {data.results.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
        </ScrollView>
      )}
    </MainViewContainer>
  );
};
