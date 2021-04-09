import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native';




// ==========================
// = Functions
const isShaking = (data) => {
  // x,y,z CAN be negative, force is directional
  // We take the absolute value and add them together
  // This gives us the total combined force on the device
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);

  // If this force exceeds some threshold, return true, otherwise false
  // Increase this threshold if you need your user to shake harder
  return totalForce > 1.2;
};

// ==========================
// = Styled components
const ShakeView = styled.View`
  flex: 1;
  background-color: #1C1C1C;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StartTitle = styled.Text`
font-size: 36px;
font-weight: bold;
color: #54D9EF;
justify-content: center;
align-items: center;
font-size: 70px;
text-align: center;
margin: 20px;
`

const StartParagraph= styled.Text`
font-size: 36px;
font-weight: bold;
color: papayawhip;
justify-content: center;
align-items: center;
font-size: 20px;
text-align: center;
margin: 20px;
`
const ShakeAlert = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #EC3F59;
`;

const ShakeDataView = styled.View`
`;

const ShakeDataTitle = styled.Text`
  font-weight: bold;
  color: papayawhip;
  text-align: center;
`;
const ShakeData = styled.Text`
color: papayawhip;
text-align: center;
`;

export const SensorComponent = () => {
  // This function determines how often our program reads the accelerometer data in milliseconds
  // https://docs.expo.io/versions/latest/sdk/accelerometer/#accelerometersetupdateintervalintervalms
  Accelerometer.setUpdateInterval(400);

  // The accelerometer returns three numbers (x,y,z) which represent the force currently applied to the device
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  // This keeps track of whether we are listening to the Accelerometer data
  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    // Save the subscription so we can stop using the accelerometer later
    setSubscription(
      // This is what actually starts reading the data
      Accelerometer.addListener((accelerometerData) => {
        // Whenever this function is called, we have received new data
        // The frequency of this function is controlled by setUpdateInterval
        setData(accelerometerData);
      })
    );
  };

  // This will tell the device to stop reading Accelerometer data.
  // If we don't do this our device will become slow and drain a lot of battery
  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    // Start listening to the data when this SensorComponent is active
    _subscribe();

    // Stop listening to the data when we leave SensorComponent
    return () => _unsubscribe();
  }, []);

  // const [recipeList, setRecipeList] = useState([])
  const [recipe, setRecipe] = useState('')

  let recipeArray = ['Pizza', 'Pasta', 'Soup', 'Sallad']

  useEffect(() => {
    isShaking(data) && setRecipe(recipeArray[Math.floor(Math.random()*recipeArray.length)])
}, [isShaking(data)])

// useEffect(() => {
//   if (isShaking(data) === true) {
//     setRecipe(recipeArray[Math.floor(Math.random()*recipeArray.length)])
// }, [isShaking(data)])
// )}





  return (
    <ShakeView>
      <StartTitle>What should I eat?</StartTitle>
      <StartParagraph>Shake me to get a suggestion</StartParagraph>
      {/* If isShaking returns true:
        - We could render conditionally
        - Maybe we want to dispatch some redux event when device shakes?
        - Maybe change some styled props?  */}
     
      {/* {isShaking(data) === true && 
        <ShakeAlert>{recipe}</ShakeAlert>} */}
      
        <ShakeAlert>{recipe}</ShakeAlert>

      {/* {isShaking(data) && <ShakeAlert>Shaking</ShakeAlert>} */}

      {/* <ShakeDataView>
        <ShakeDataTitle>Shake Data</ShakeDataTitle> */}
        {/* toFixed(2) only shows two decimal places, otherwise it's quite a lot */}
        {/* <ShakeData>X: {data.x.toFixed(2)}</ShakeData>
        <ShakeData>Y: {data.y.toFixed(2)}</ShakeData>
        <ShakeData>Z: {data.z.toFixed(2)}</ShakeData>
      </ShakeDataView> */}
    </ShakeView>
    
  );
};
