import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import backgroundImage from "../assets/background2.jpg";
import { Text } from "react-native";
import { Accelerometer } from "expo-sensors";
import { back } from "react-native/Libraries/Animated/src/Easing";

const InfoContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 18px;
`;
  // background-color: ${randomColor()}
  // ${(props) => `background-color: ${randomColor}`};

const InfoText = styled.Text`
  font-size: 48px;
`;

const InfoScreen = ({ navigation, route }) => {
  const [data, setData] = useState({});
  const[hasShaked, setHasShaked] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("red");

  const changeBackground = () => {
    const colors = ["orange", "yellow", "red","green", "pink", "purple"];
    setBackgroundColor( colors[Math.floor(Math.random() * colors.length)]);
  };

  //array of words 
  const words = ["happy", "exciting", "great", "positive", "joy"];
  //pick one word randomly
  const randomWords = words[Math.floor(Math.random() * words.length)];
  // const randomWords = words.map(item[]);
          
  useEffect(() => {
    Accelerometer.setUpdateInterval(500);
    const listener = Accelerometer.addListener((accelerometerData) => {
      setData(accelerometerData);
      changeBackground();
      console.log(accelerometerData);
    });

    return () => {
      listener && listener.remove();
    };
  }, []);
  

  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
// why do we need !hasShaked

  if (!hasShaked && totalForce > 3)  {
  setHasShaked(true);
  //trigger the fetch
}

  return (
    <>
    { hasShaked ? (
    <InfoContainer style={{backgroundColor: backgroundColor}}>
    <InfoText> {randomWords}
    </InfoText>
    </InfoContainer>
    ) : (
    <InfoContainer source={backgroundImage}>
      <InfoText>
        Shake it! Shake it!
      </InfoText>
      {/* what is this for? */}
      <Text>{route.params.data}</Text>
        <Text>
        Total Force: {totalForce}
      </Text>
    </InfoContainer>
      )
    }
    </>
  );
};

export default InfoScreen;