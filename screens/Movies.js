import React from 'react';
import { useTheme } from 'react-native-paper';

import Main from '../components/Styled/MainViews';
import { MovieList } from '../components/MovieList';

export const Movies = () => {
  const { colors } = useTheme();
  return (
    <Main verticalAlign="flex-start" color={colors.background}>
      <Main.Header>Trending Movies</Main.Header>
      <MovieList type="trending" />
    </Main>
  );
};
