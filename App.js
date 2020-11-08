import React from 'react'
import styled from 'styled-components';


export default function App() {
  return (
    <Container>
      <Title>This is your cool app!</Title>
      <Title>Go to App.js and start coding</Title>
      <Title>💅💅💅</Title>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`
