import React from 'react';
import { trails } from './reducers/trails';
import { Text, TouchableHighlight, View } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';

export const Buttons = () => {
  const dispatch = useDispatch();

  const onNorthFjall = () => {
    dispatch(trails.actions.setCurrentPosition('northFjall'));
  };

  const onNorth = () => {
    dispatch(trails.actions.setCurrentPosition('north'));
  };

  const onMiddle = () => {
    dispatch(trails.actions.setCurrentPosition('middle'));
  };

  const onSouth = () => {
    dispatch(trails.actions.setCurrentPosition('south'));
  };

  return (
    <View>
      <Title>Are you in the mood for a hike?</Title>
      <Title2>Please choose your area</Title2>

      <Touch onPress={onNorthFjall}>
        <Text>North of Sweden (fjäll)</Text>
      </Touch>

      <Touch onPress={onNorth}>
        <Text>North of Sweden (no fjäll)</Text>
      </Touch>

      <Touch onPress={onMiddle}>
        <Text>Middle of Sweden</Text>
      </Touch>

      <Touch onPress={onSouth}>
        <Text>South of Sweden</Text>
      </Touch>
    </View>
  );
};

const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  color: #1e5f18;
`;

const Title2 = styled.Text`
  font-size: 15px;
  text-align: center;
  color: palevioletred;
`;

const Touch = styled.TouchableHighlight`
  border: 1px solid palevioletred;
  background-color: #d5e9d3;
  padding: 15px;
  margin: 10px;
`;
