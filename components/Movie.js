import React from 'react';
import {
  Card,
  useTheme,
  Title,
  Paragraph,
  Button,
  Surface,
  Caption,
  Headline,
  Divider,
  IconButton,
} from 'react-native-paper';
import styled from 'styled-components/native';
import { getYear } from '../utils/helpers'
import { IMAGE_POSTER } from '../utils/apiConfig';
import MovieCard from './Styled/MovieCard';

export const Movie = ({title, release_date, poster_path}) => {
  const { colors } = useTheme();
  return (
    <MovieCard>
      <MovieCard.Poster source={{ uri: `${IMAGE_POSTER(185, poster_path)}` }} />
      <MovieCard.Content>
        <MovieCard.Titles>
          <Headline>{title}</Headline>
          <Caption>{release_date ? getYear(release_date) : 'TBA'}</Caption>
        </MovieCard.Titles>
        <Divider />
        <MovieCard.Actions>
          <Button mode="flat" onPress={() => console.log('Pressed')}>
            View
          </Button>
          <IconButton
            color={colors.primary}
            icon="heart"
            size={20}
            onPress={() => console.log('Pressed')}
          />
        </MovieCard.Actions>
      </MovieCard.Content>
    </MovieCard>
  );
};
