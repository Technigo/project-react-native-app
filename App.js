import React from 'react';
import styled from 'styled-components/native';
import CharacterList from './components/CharacterList';

const Container = styled.View`
  background-color: #303054;
  padding: 60px 30px;
`;

const Title = styled.Text`
  font-size: 40px;
  color: #a1d12b;
`;

const App = () => {
  return (
    <Container>
      <Title>Pick Your Rick</Title>
      <CharacterList />
    </Container>
  );
};

export default App;
