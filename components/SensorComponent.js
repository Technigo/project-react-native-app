import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native'
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native';

// = Functions
const isShaking = (data) => {
  
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
  return totalForce > 1.78;
};

// = Styled components
const ShakeView = styled.View`
  display: flex;
  flex-direction: column;
`;

const ShakeAlert = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #aa0000;
`;
const ShakeDataView = styled.View``;
const ShakeDataTitle = styled.Text`
  font-weight: bold;
`;
const ShakeData = styled.Text``;

export const SensorComponent = () => {
  
  Accelerometer.setUpdateInterval(400);
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  {/*}
  
  const [choice, setChoice] = useState(false)
 
  if (isShaking(data)) {
    const randomChoice = () => {
    
      let arr = ['yes', 'no', 'maybe', 'probably']
      let num = Math.floor(Math.random()* (4-0))
  
      setChoice(arr[num])
      
    }
  }
  
*/}
  const Oracle = () => {
    const [choice, setChoice] = useState('')
    const [request, setRequest] = useState(false)
    
    
    useEffect(() => {
      let arr = ['yes', 'no', 'maybe', 'probably']
      let num = Math.floor(Math.random()* (4-0))
      setChoice(arr[num])
      setRequest(isShaking(data))
      
      

      
      


    }, [request])
      
      return (
        <View>
          <Text>The suggestion is {choice} </Text>
        </View>
      )
  }
  
  
  
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



  return (
    <ShakeView>
      
      

       {Oracle()}
      
      
      {isShaking(data) && <ShakeAlert>Shaking </ShakeAlert>}
      <ShakeDataView>
        <ShakeDataTitle>New Shake Data </ShakeDataTitle>
        
        <ShakeData>X: {data.x.toFixed(2)}</ShakeData>
        <ShakeData>Y: {data.y.toFixed(2)}</ShakeData>
        <ShakeData>Z: {data.z.toFixed(2)}</ShakeData>
      </ShakeDataView>
    </ShakeView>
  );
};
