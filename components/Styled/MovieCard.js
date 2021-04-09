import { View } from 'react-native';
import { Card, Surface } from 'react-native-paper';
import styled from 'styled-components/native';

const MovieCard = styled(Surface)`
  flex-flow: row wrap;
  elevation: 5;
  margin-bottom: 20px;
  margin-horizontal: 10px;
`;

MovieCard.Poster = styled(Card.Cover)`
  width: 30%;
`;

MovieCard.Content = styled(View)`
  padding-top: 25px;
  padding-horizontal: 10px;
  width: 70%;
  flex-flow: column;
  justify-content: space-between;
`;

MovieCard.Titles = styled(View)`
  padding-left: 10px;
`;

MovieCard.Actions = styled(View)`
  flex-flow: row wrap;
  padding-bottom: 15px;
`;

export default MovieCard;
