import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { SensorComponent } from "./components/SensorComponent";
import { Header } from "./components/Header";




const Container = styled.View`
  flex: 1;
  background-color: #DD4A48;
  justify-content: center;
  align-items: center;
`;






const App = () => {


  return (

    <Container>
   
<Header></Header>







      <SensorComponent>
    </SensorComponent>



    </Container>
  );
};

export default App;
