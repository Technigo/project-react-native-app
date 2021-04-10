import React from 'react';
import { Text } from 'react-native';

export const CardDetails = ({ route }) => {
  const card = route.params.card;
  return <Text>Hello World {card.name}</Text>;
};
