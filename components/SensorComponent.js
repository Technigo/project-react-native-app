import React, { useState, useEffect } from "react";
import { Pedometer } from "expo-sensors";
import styled from "styled-components/native";
import { watchStepCount } from "expo-sensors/build/Pedometer";

// = Styled components
const StepContainer = styled.View`
display:flex;
flex-direction:column;
margin-top:10px;
`;

const StepTitle = styled.Text`
  font-size: 70px;
  color: #97BFB4;
  text-align:left;
  font-style:italic;
  opacity:0.7;
  margin-bottom:-30px;
  margin-left:20px;
`;

const StepTitle2 = styled.Text`
  font-size: 70px;
  color: #97BFB4;
  text-align:center;
`;

const StepTitle3 = styled.Text`
  font-size: 42px;
  color: #F5EEDC;
  text-align:left;
  padding:20px;
  margin-left:20px;
  margin-top:-10px;
`;

const CountingContainer = styled.View`
background-color:#F5EEDC;
opacity:0.5;
margin-top:20px;
margin-bottom:20px;
padding:30px;
`

const StepText = styled.Text`
  font-size: 90px;
  font-weight: bold;
  color: #4F091D;
  text-align:center;
`;

const StepText2 = styled.Text`
  font-size: 40px;
  color:#F5EEDC;
  text-align:center;
`;

const AvaiabilityOnDevice= styled.Text`
`;



// = Functions

export const SensorComponent= () => {
  const [StepAvailability, setStepAvailability] =
  useState("");

  const [stepCounter, updateStepCounter] = useState(0)

  useEffect(()=>{
    subscribe()

  },[])

  const subscribe = () => {
    const subscription=Pedometer.watchStepCount((result)=>{
      updateStepCounter(result.steps);
    })

    const _unsubscribe = () => {
      subscription && subscription.remove();
      watchStepCount(null);
    }
    
// Checks if pedometer function is available on device

    Pedometer.isAvailableAsync().then(
      (result) => {
    setStepAvailability((result));
      }, 
      (error) => {
        setStepAvailability(error);
      }
    );
  }

  return (

    <StepContainer >
            <StepTitle>STEP</StepTitle> 
            <StepTitle2>TRACKER</StepTitle2> 
        <StepTitle3>How much have you been walking today???</StepTitle3> 
      

<CountingContainer>
<StepText>{stepCounter}</StepText>
</CountingContainer>

<StepText2>steps...</StepText2>
<StepText2>...SO FAR!!</StepText2>

<AvaiabilityOnDevice> {StepAvailability}</AvaiabilityOnDevice>

    </StepContainer >
  );
};
