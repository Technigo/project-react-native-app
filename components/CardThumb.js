/*Outer dependencies*/
import React from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';

/*Styled components*/
const ThumbContainer = styled.View`
  background: green;
`;

const ThumbText = styled.Text`
  color: blue;
`;

const ThumbImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const CardThumb = (props) => {
  /*Deconstructing props*/
  const { card, navigation } = props;

  /*Function to create route for CardDetails when clicking the entire CardThumb*/
  const onPressCardButton = () => {
    navigation.navigate('CardDetails', { card: card });
  };

  return (
    <>
      <Pressable onPressOut={onPressCardButton}>
        <ThumbContainer>
          <ThumbText>{card.name}</ThumbText>
          <ThumbImage
            source={{
              uri: card.imageUrl,
            }}
          />
        </ThumbContainer>
      </Pressable>
    </>
  );
};
