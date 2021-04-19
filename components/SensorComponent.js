import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native';


// = Functions
const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
  return totalForce > 2.3;
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
const OracleDataView = styled.View`
  font-size: 30px;
  font-weight: bold;
  color: #460273;
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create ({
  message: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#9768D1',
    opacity: 0.8,
    marginTop: 100,
  }
})

export const SensorComponent = () => {
  Accelerometer.setUpdateInterval(400);
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const Oracle = () => {
    const [choice, setChoice] = useState('')
    const arr = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes-definitely',
  'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes',
  'Yes', 'Signs point to yes', 'Reply hazy, try again', 'Ask again later', 'Better not tell you now',
  'Cannot predict now', 'Concentrate and ask again', 'Do not count on it',
  'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful']

    useEffect(() => {
      isShaking(data) && setTimeout (() => {setChoice(arr[Math.floor(Math.random()* arr.length)])}, 2000)
      setTimeout (() => {setChoice('')}, 5000)
    }, [isShaking(data)])
  
    return (
      <View>
        <Text style={styles.message}>{choice}</Text>
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
      {isShaking(data) && <ShakeAlert>Thinking </ShakeAlert>}
      <OracleDataView>
       {Oracle()}
      </OracleDataView>
    </ShakeView>
  );
};
