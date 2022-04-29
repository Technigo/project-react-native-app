import React from "react";
import styled from "styled-components/native";
import { SensorComponent } from "./components/SensorComponent";
import { ScrollView } from 'react-native'

const Container = styled.View`
  flex: 1;
  background-color: powderblue;
  justify-content: center;
  align-items: center;
`;

const Header = styled.View`
  height: 100px;
  justify-content: center;
  padding: 5px;
  width: 100%;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 100px;
  position: relative;
`

const Title = styled.Text`
  font-size: 30px;
  font-weight: 700;
`

const App = () => {
  return (
    
  <Container>
    <ScrollView>
      <Container>
      <Header>
        <Title>SHAKE FOR A CAT FACT</Title>
      </Header>
      <SensorComponent />
      </Container>
    </ScrollView>
  </Container>
    
  );
};

export default App;

