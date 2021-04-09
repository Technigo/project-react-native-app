import React, { useEffect, useState } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { ActivityIndicator, useTheme } from 'react-native-paper';
import { MainViewContainer, MainHeader } from '../components/Styled/MainViews';
import { MovieList } from '../components/MovieList';


export const Movies = () => {
  const { colors } = useTheme();
  return (
    <MainViewContainer verticalAlign="flex-start" color={colors.background}>
      <MainHeader>Trending Movies</MainHeader>
      <MovieList type='trending' />
    </MainViewContainer>
  );
};
