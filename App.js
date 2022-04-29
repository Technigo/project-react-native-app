import React from "react";
import styled from "styled-components/native";
import ShakeApi from	'./components/ShakeApi';


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: powderblue;
`;

const Title = styled.Text`
  font-size: 24px;
  color: black;
  font-weight: bold;
`;

const App = () => {
  return (
    <Container>
      <Title>Shake me!</Title>
      <ShakeApi></ShakeApi>
    </Container>
  );
};

export default App;
