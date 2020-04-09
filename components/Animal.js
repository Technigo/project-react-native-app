import React from "react";
import styled from 'styled-components/native';

const AnimalEntity = styled.Text`
  position: absolute;
`

export const Animal = ({position, text, size}) => {
  return (
    <AnimalEntity style={[{ left: position[0], top: position[1], fontSize: size }]} >{text}</AnimalEntity>
  );
}