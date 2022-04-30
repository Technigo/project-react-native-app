import React, { useState, useEffect } from "react";
import { Pedometer } from "expo-sensors";
import styled from "styled-components/native";
import { watchStepCount } from "expo-sensors/build/Pedometer";

// = Styled components
const StepView = styled.View`
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
  color: #F5EEDC;
`;

const ShakeDataView = styled.View`
margin-bottom:150px;`;
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

    const _unsubscribe = () => {
      subscription && subscription.remove();
      watchStepCount(null);
    }
    

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
    <StepView>
      <ShakeDataView>
      
<StepText>{stepCounter}</StepText>

<ShakeAlert>steps... so far!!!</ShakeAlert>
<ShakeAlert>
  

  {StepAvailability}</ShakeAlert>
      </ShakeDataView>
    </StepView>
  );
};
