import * as React from "react";
import styled from "styled-components/native";

import { SensorComponent } from "./components/SensorComponent";
import { Header } from './components/Header';
import { Footer } from './components/Footer'


export const App = () => {
  return (
    <Container>
      <Header></Header>
      <SensorComponent></SensorComponent>
      <Footer></Footer>
    </Container>
  );
};


//----------------------------------------------//

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: space-around;
  align-items: center;
`;
