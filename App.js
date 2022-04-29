import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { SensorComponent } from "./components/SensorComponent";
/* import { Header } from "./components/Header"; */




const Container = styled.View`
  flex: 1;
  background-color: #DD4A48;
  justify-content: center;
  align-items: center;
`;



const Title2= styled.Text`
font-size: 38px;
color: #97BFB4;
font-weight:bold;
text-align:center;
padding:20px;
font-Family='Inter';
`;


const App = () => {


  return (

    <Container>
   
{/* <Header></Header> */}


<Title2>How much are you walking today???</Title2>




      <SensorComponent>
    </SensorComponent>



    </Container>
  );
};

export default App;
