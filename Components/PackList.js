import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import packlist from '../.expo-shared/packlist.json';
import Unorderedlist from 'react-native-unordered-list';
import styled from 'styled-components/native';

export const PackList = () => {
  return (
    <Container>
      <Emojis> 🌲 🌲 🌲 </Emojis>
      <InnerContainer>
        <Text>
          <Title>Packlist</Title>
          {'\n'}
          <Title2>-For one day in the Trails</Title2>
        </Text>
        {packlist.one.map((list) => (
          <Unorderedlist>
            <P>{list.bring}</P>
          </Unorderedlist>
        ))}
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
  text-align: center;
  margin-bottom: 10px;

  color: palevioletred;
`;

const P = styled.Text`
  margin: 2px;
`;

const Container = styled.View`
  flex: 1;
  background-color: #d5e9d3;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

const InnerContainer = styled.View`
  border: 3px dotted palevioletred;
  padding: 30px;
`;

const Emojis = styled.Text`
  text-align: center;
  font-size: 30px;
`;
