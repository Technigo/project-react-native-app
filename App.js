import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import styled from 'styled-components/native';

import { Buttons } from './Components/Buttons';
import { Trail } from './Components/Trail';
import { trails } from './Components/reducers/trails';
import { LoadingSpinner } from './Components/LoadingSpinner';
import SensorComponent from './Components/SensorComponent';

const reducer = combineReducers({
  trails: trails.reducer,
});

const store = configureStore({ reducer });

const App = () => {
  return (
    <Provider store={store}>
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
        {/* <SensorComponent /> */}
        <Trail />
      </Container>
    </Provider>
  );
};

export default App;

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
