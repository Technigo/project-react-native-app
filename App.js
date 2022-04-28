import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Pedometer } from "expo-sensors";
/* import {StatusBar} from "expo-status-bar"; */
/* import { ImageBackground} from "react-native"; */


import { SensorComponent } from "./components/SensorComponent";
import { Header } from "./components/Header";
/* import StepCounter from "./components/StepCounter"; */


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

  const [StepAvailability, setStepAvailability] =
  useState("");

  const [stepCounter, updateStepCounter] = useState(0)

useEffect(()=>{
  subscribe();
},[])


subscribe = () => {
    const subscription=Pedometer.watchStepCount((result)=>{
      updateStepCounter(result.steps);
    })

    Pedometer.isAvailableAsync().then(
      (result) => {
    setStepAvailability(String(result));
      }, 
      (error) => {
        setStepAvailability(error);
      }
    );
  }
  
  

  return (

    <Container>
{/*       <ImageBackground
      style= {{flex:1}}
      resizeMode="cover"
      source={require ('./assets/walking.jpg')}
      
      ></ImageBackground> */}
<Header></Header>
<Title>how many steps? </Title>
<Title2>{StepAvailability}</Title2>

<Title>{stepCounter}</Title>

      <SensorComponent>
    </SensorComponent>

    </Container>
  );
};

export default App;
