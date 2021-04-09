import React, { useState, useEffect } from 'react';
import { SettingsContext } from '../context/settingsContext';
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
import { getYear, apiCall } from '../utils/helpers';
import { IMAGE_POSTER, URL_MOVIE } from '../utils/apiConfig';
import MovieCard from './Styled/MovieCard';

export const Movie = ({ id, title, release_date, poster_path, handleLikedMovie }) => {
  const { colors } = useTheme();
  const { user } = React.useContext(SettingsContext);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const found = user.likes.find((liked) => {
      return liked._id === id;
    });
    setLiked(found);
  }, []);

  const onLike = () => {
    if (liked) {
      user.likes.splice(
        user.likes.findIndex(function (i) {
          return i._id === id;
        }),
        1
      );
      handleLikedMovie(id)
      setLiked(false);
    } else if (!liked) {
      user.likes.push({ _id: id, url: URL_MOVIE(id) });
      setLiked(true);
    }
  };

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
          <IconButton
            disabled={user.name === ''}
            color={liked ? colors.heart : colors.primary}
            icon="heart"
            size={20}
            onPress={() => onLike()}
          />
        </MovieCard.Actions>
      </MovieCard.Content>
    </MovieCard>
  );
};
