import React from 'react'
import { TouchableOpacity, Alert, Share } from 'react-native'
import styled from 'styled-components/native'

//Styled components

const CardContainer = styled.View`
  padding-bottom: 20px;
`
const MovieImage = styled.Image`
height: 240px;
width: 170px;
`

//
/* const ShareExample = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Waiting',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
} */

export const MovieCard = ({ title, poster_path, overview, vote_average }) => {

  const onPressCard = () => {
    Alert.alert(
      `${title}`,
      `${overview}

      ${vote_average} / 10`,
      [
        { text: "Back to movies"}/* ,
        { text: "Share", onPress: () => } */
      ]
    );
  }

  return (
    <>
    <TouchableOpacity onPress={onPressCard}>
      <CardContainer>
        <MovieImage source={{uri: `https://image.tmdb.org/t/p/w342${poster_path}`}} />
      </CardContainer>
    </TouchableOpacity>
    </>
  )

}

export default MovieCard