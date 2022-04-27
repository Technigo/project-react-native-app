import React from "react";
import styled from "styled-components/native";


import { SensorComponent } from "./components/SensorComponent";
import { Header } from "./components/Header";




const Container = styled.View`
  flex: 1;
  background-color: tomato;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 32px;
  color: white;
  font-weight:bold;
  text-align:center;
`;

const Title2= styled.Text`
  font-size: 20px;
  color: white;
  text-align:center;
`;


const App = () => {
  return (

    <Container>

<Title>how many steps? </Title>
<Title2>track yourself</Title2>
<Header></Header>
      <SensorComponent>
    </SensorComponent>

    </Container>
  );
};

export default App;
