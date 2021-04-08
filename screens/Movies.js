import React, { useEffect, useState } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { MainViewContainer, MainHeader } from '../components/Styled/MainViews';
import { MovieList } from '../components/MovieList';


export const Movies = () => {

  return (
    <MainViewContainer verticalAlign="flex-start">
      <MainHeader>Trending Movies</MainHeader>
      <MovieList type='trending' />
    </MainViewContainer>
  );
};
