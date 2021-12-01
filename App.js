import React from 'react';
import styled from 'styled-components/native';

import { Buttons } from './Components/Buttons';

const Container = styled.View`
  flex: 1;
  background-color: #d5e9d3;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.View`
  border: 3px dotted palevioletred;
  padding: 30px;
`;

const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  color: #1e5f18;
`;

const Text = styled.Text`
  font-size: 15px;
  text-align: center;

  color: palevioletred;
`;

const Emojis = styled.Text`
  text-align: center;
  font-size: 30px;
`;

const Loading = styled.ActivityIndicator`
  padding: 20px;
`;

const ImTage = styled.Image`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
`;

const App = () => {
  return (
    <Container>
      <ImTage
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <InnerContainer>
        <Title>This is your cool app!</Title>
        <Text>Go to App.js and start coding</Text>
        <Emojis>✨ 🥑 🌲 </Emojis>
      </InnerContainer>
      <Loading size='large' color='palevioletred' />
      <Buttons />
    </Container>
  );
};

export default App;
