import React, { useState, useEffect } from "react";
import { Pedometer } from "expo-sensors";
import styled from "styled-components/native";

// = Styled components
const ShakeView = styled.View`
  display: flex;
  flex-direction: column;
`;

const StepText = styled.Text`
  font-size: 190px;
  font-weight: bold;
  color: #97BFB4;
  text-align:center;
`;

const ShakeAlert= styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #97BFB4;
`;

const ShakeDataView = styled.View``;
;
const ShakeData = styled.Text``;

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
    <ShakeView>
      <ShakeDataView>
      <ShakeAlert>{StepAvailability}</ShakeAlert>

<StepText>{stepCounter}</StepText>
<ShakeAlert>steps... so far!!!</ShakeAlert>
      </ShakeDataView>
    </ShakeView>
  );
};
