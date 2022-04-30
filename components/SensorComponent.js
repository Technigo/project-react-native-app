import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native';
import { Image, Share, Text, ActivityIndicator } from 'react-native';

// ==========================
// = Functions
const isShaking = (data) => {
  // x,y,z CAN be negative, force is directional
  // We take the absolute value and add them together
  // This gives us the total combined force on the device
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);

  // If this force exceeds some threshold, return true, otherwise false
  // Increase this threshold if you need your user to shake harder
  return totalForce > 1.78;
};

// ==========================
// = Styled components
const ShakeView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.Text`
  font-size: 28px;
  color: white;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  background-color: black;
  padding: 0 5px 4px 5px;
  border-radius: 5px;
`;

const Name = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  background-color: black;
  padding: 0 3px 3px 4px;
  border-radius: 5px;
`;

const ShareButton = styled.TouchableOpacity`
  margin-top: 50px;
  background-color: grey;
  border-radius: 25px;
  padding: 7px;
  align-items: center;
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

  const [animal, setAnimal] = useState({});
  const [loading, setLoading] = useState(false);

  const generateAnimal = () => {
    setLoading(true);
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
      .then((res) => res.json())
      .then((data) => setAnimal(data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (isShaking(data)) {
      generateAnimal();
    }
  }, [data]);

  const toShare = async () => {
    try {
      const result = await Share.share({
        message: 'Hey, come take a look at a random animal!',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#fff" />;
  }

  return (
    <ShakeView>
      <Header>Shake for a new animal</Header>
      <Name>{animal.name}</Name>
      <Image
        style={{ width: 250, height: 300 }}
        source={{ uri: `${animal.image_link}` }}
      />
      <ShareButton onPress={toShare}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>SHARE ➡️</Text>
      </ShareButton>
    </ShakeView>
  );
};
