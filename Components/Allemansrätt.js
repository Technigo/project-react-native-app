import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';

export const Allemansrätt = () => {
  return (
    <Container>
      <Emojis> 🌲 🌲 🌲 </Emojis>
      <InnerContainer>
        <Title>About the Allemansrätt</Title>
        <Title2>
          Allemansrätten Sveriges natur är öppen för alla tack vare
          allemansrätten.
        </Title2>
        <Text>
          Det betyder att du utan bekymmer kan vistas i de flesta naturområden,
          även i privatägd skog och mark. Ledorden “inte störa, inte förstöra”
          summerar allemansrätten väl.
        </Text>
      </InnerContainer>
    </Container>
  );
};

const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  color: #1e5f18;
`;

const Title2 = styled.Text`
  font-size: 15px;
  text-align: left;
  margin-bottom: 10px;
  color: palevioletred;
`;

const Container = styled.View`
  flex: 1;
  background-color: #d5e9d3;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const InnerContainer = styled.View`
  border: 3px dotted palevioletred;
  padding: 30px;
`;

const Emojis = styled.Text`
  text-align: center;
  font-size: 30px;
`;
