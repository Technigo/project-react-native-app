import React from 'react';
import { useState } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import styled from 'styled-components/native';

export const Buttons = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  const onNorthFjall = () => {
    () => {};
  };

  return (
    <View>
      <Button onPress={onNortFjall}>
        <Text>North of Sweden (fjäll)</Text>
      </Button>

      <Button onPress={onPress}>
        <Text>North of Sweden (no fjäll)</Text>
      </Button>

      <Button onPress={onPress}>
        <Text>Middle of Sweden</Text>
      </Button>

      <Button onPress={onPress}>
        <Text>South of Sweden</Text>
      </Button>
      <Text>{count || null}</Text>
    </View>
  );
};

const Button = styled.TouchableHighlight`
  border: 1px solid palevioletred;
  background-color: #d5e9d3;
  padding: 15px;
  margin: 10px;
`;
