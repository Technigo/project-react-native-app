import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import styled from 'styled-components/native';
import { trails } from './Components/reducers/trails';
import { Main } from './Components/Main';

const reducer = combineReducers({
  trails: trails.reducer,
});

const store = configureStore({ reducer });

const App = () => {
  return (
    <Provider store={store}>
      <Main />
      {/*  <ImTage
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      /> */}

      {/* <LoadingSpinner /> */}

      {/* <SensorComponent /> */}
    </Provider>
  );
};

export default App;

const ImTage = styled.Image`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
`;
