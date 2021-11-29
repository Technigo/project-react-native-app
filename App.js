import React from 'react';
import styled from 'styled-components/native';

import { ButtonApi } from './components/ButtonApi';
import { ShakeApi } from './components/ShakeApi';
import { StartPage } from './components/StartPage';

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

const App = navigation => {
  return (
    <Container>
      <StartPage />
    </Container>
  );
};

export default App;
