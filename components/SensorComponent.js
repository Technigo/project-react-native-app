import React, { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";
import styled from "styled-components/native";
import { Text } from "react-native";

// ==========================
// = Functions
const isShaking = (data) => {
  // x,y,z CAN be negative, force is directional
  // We take the absolute value and add them together
  // This gives us the total combined force on the device
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);

  // If this force exceeds some threshold, return true, otherwise false
  // Increase this threshold if you need your user to shake harder
  return totalForce > 1.85;
};

// ==========================
// = Styled components
const ShakeView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #b8a51a;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background: black;
  padding: 5px;
`;

const StyledText = styled.Text`
  margin-top: 70%
  font-size: 25px;
  color: #0af2a9;
  width: 70%
  text-align: center;
  font-weight: bold;
 
  padding: 5px;
 
`;

const answers = [
  "Shit before you shower, then you don't have to wipe",
  "It is certain",
  "Without a doubt",
  "Yes - definitely",
  "Most likely",
  "Yes",
  "No",
  "Don't count on it",
  "Ask again later",
  "Better not tell you now",
  "My sources say no",
  "Reply hazy, try again",
  "Signs point to yes",
  "I'm sorry what?",
  "Going into a tunnel...try again",
  "404 - answer not found",
  "A communist joke isn't funny... unless everyone gets it",
  "Perhaps",
  "I have spoken",
  "Look into my eyes and it's easy to see. One and one makes two, two and one makes three, it was destiny",
  "Well that's just like your opinion man",
  "Where's the money Lebowski?",
  "Stay out of Malibu!",
  "That rug really tied the room together",
  "Tis but a scratch",
];

export const SensorComponent = () => {
  const [answer, setAnswer] = useState();

  const updateAnswer = () => {
    const index = Math.floor(Math.random() * answers.length);
    setAnswer(answers[index]);
  };

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

  useEffect(() => {
    if (isShaking(data)) {
      updateAnswer();
    }
  }, [data]);

  return (
    <ShakeView>
      <Header>Ask your question and shake</Header>
      <StyledText>{answer}</StyledText>
    </ShakeView>
  );
};
