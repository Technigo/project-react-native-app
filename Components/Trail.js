import React from 'react';
import { useSelector } from 'react-redux';
import { trails } from './reducers/trails';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const Trail = () => {
  const currentPosition = useSelector((store) => store.trails.currentPosition);
  console.log(currentPosition);

  return (
    <View>
      <Title>
        You are in {currentPosition}, shake for a suggestion on a trail!
      </Title>
    </View>
  );
};

const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  color: #1e5f18;
`;
