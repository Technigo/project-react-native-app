import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native';
import { View } from 'react-native';

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
const Container = styled.View`
  flex: 1;
  background-color: #1c1e1e;
  align-items: center;
`
const HeaderContainer = styled.View`
  flex: 0.25;
  padding: 80px 20px 40px 20px;
`

const Title = styled.Text`
  font-size: 34px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  text-shadow: -1px 0px 2px #fff;
  margin-bottom: 20px;
`

const SubTitle = styled.Text`
  font-size: 24px;
  color: #fff;
  text-align: center;
  text-shadow: -1px 0px 2px #fff;
`
const MagicBallContainer = styled.View`
  margin: 30px;
  text-align: center;
  flex: 1;
  align-items: center;
  `

const BallBlackOuter = styled.View`
  background: #171717;
  height: 280px;
  width: 280px;
  border-radius: 140;
  position: relative;
  box-shadow: 0px 0px 18px #fff;
  `
const BallBlackInner = styled.View`
  background: #000;
  height: 220px;
  width: 220px;
  border-radius: 110;
  position: absolute;
  top: 30px;
  `

const TriangleInner = styled.View`
  position: absolute;
  top: 68px;
  justify-content: center;
  align-items: center;
  width: 0;
  height: 0;
  background-color: transparent;
  border-style: solid;
  border-left-width: 85px;
  border-bottom-width: 120px;
  border-top-width: 0;
  border-right-width: 85px;
  border-bottom-color: #0062ec;
  `

const Answer = styled.Text`
  font-size: 14px;
  top: 70px;
  width: 95px;
  height: 60px;
  color: #fff;
  text-align: center;
  position: absolute;
  `

const BackgroundImage = styled.ImageBackground`
  flex: 1;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
`
const ShakeAlert = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #aa0000;
`

export const MagicBallScreen = ({route, navigation}) => {
  const {name} = route.params //This is to receive an input value from Home Screen
  // This function determines how often our program reads the accelerometer data in milliseconds
  // https://docs.expo.io/versions/latest/sdk/accelerometer/#accelerometersetupdateintervalintervalms
  Accelerometer.setUpdateInterval(400);

  // The accelerometer returns three numbers (x,y,z) which represent the force currently applied to the device
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  
  const RandomAnswer = () => {
    const [answer, setAnswer] = useState('')
    let arrayOfAnswers = [
      "It is certain",
      "As I see it, yes",
      "Without a doubt",
      "Yes - definitely",
      "You may rely on it",
      "Most likely",
      "Outlook good",
      "Yes",
      "Don't count on it",
      "My reply is no",
      "Reply hazy, try again",
      "My sources say no",
      "Outlook not so good",
      "It is decidedly so",
      "Very doubtful",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Signs point to yes",
      "Concentrate and ask again"
    ];

    // Taking random answer if shake is detected
    useEffect(() => {
      isShaking(data) && setTimeout (() => {setAnswer(arrayOfAnswers[Math.floor(Math.random()* arrayOfAnswers.length)])}, 2000)
      setTimeout (() => {setAnswer('')}, 3000)

      return (
        <Answer>{answer}</Answer>
      )

    }, [isShaking(data)]);


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
    <Container>
      <BackgroundImage source={require('../assets/magic-ball-background.jpg')}></BackgroundImage>
      <HeaderContainer>
        <Title>Hello {name}!</Title>
        <SubTitle>Ask a question then shake your phone for an answer</SubTitle>
      </HeaderContainer>
      <MagicBallContainer>
        <BallBlackOuter></BallBlackOuter>
        <BallBlackInner></BallBlackInner>
        <TriangleInner>
          {RandomAnswer()}
        </TriangleInner>
      </MagicBallContainer>
    </Container>
  );
};
