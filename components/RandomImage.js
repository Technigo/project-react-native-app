import React from 'react';
import styled from 'styled-components/native';

const ImageFrame = styled.View`
  width: 250px;
  height: 250px;
  border: 5px solid brown;
  border-radius: 30px;
  box-shadow: 5px 5px 2px grey;
`

const FoxImage = styled.Image`
  width: 240px;
  height: 240px;
  border-radius: 25px;
`

const RandomImage = ({ image }) => {
  return (
    <ImageFrame>
      <FoxImage resizeMode='cover' source={{ uri: image }}></FoxImage>
    </ImageFrame>
  );
};

export default RandomImage;
