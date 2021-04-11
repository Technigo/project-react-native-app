import React from 'react';
import styled from 'styled-components/native';
import { SensorComponent } from './components/SensorComponent';
import { StartMessage } from './components/StartMessage';

const App = () => {
  return (
    <>
      <StartMessage/>
      <SensorComponent/>
    </>
  );
};

export default App;
