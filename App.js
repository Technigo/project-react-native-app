import React from 'react';
import styled from 'styled-components/native';
import { View, Text, ActivityIndicator } from 'react-native';

import { Bored } from './components/Bored';
import { ShakeApi } from './components/ShakeApi';
import { StartPage } from './components/StartPage';
import { Header } from './components/Header';

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`;

const App = () => {
  return (
    <>
      <Header />
      <View>
        <Container>
          <Bored />
        </Container>
      </View>
    </>
  );
};

export default App;
