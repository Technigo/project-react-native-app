import React from 'react';
import styled from 'styled-components/native';

import { Buttons } from './Components/Buttons';
import { LoadingSpinner } from './Components/LoadingSpinner';
import { SensorComponent } from './components/SensorComponent';

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

const ImTage = styled.Image`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
`;

const App = () => {
  return (
    <Container>
      {/*  <ImTage
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      /> */}
      <InnerContainer>
        <Title>Where do you want to hike?</Title>
        <Text>Please choose your area</Text>
        <Emojis>✨ 🥑 🌲 </Emojis>
      </InnerContainer>
      {/* <LoadingSpinner /> */}
      <Buttons />
      <SensorComponent />
    </Container>
  );
};

export default App;
