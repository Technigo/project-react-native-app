import React from 'react';
import styled from 'styled-components/native';

import { Navigation } from './components/Navigation';

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

const App = () => {
  return (
    <Container>
      <Navigation></Navigation>
    </Container>
  );
};

export default App;
