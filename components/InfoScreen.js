import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import backgroundImage from "../assets/background6.jpg";
import { Text } from "react-native";
import { Accelerometer } from "expo-sensors";

const InfoContainer = styled.ImageBackground`
  flex: 1;
  padding:18px;
`;

const InfoText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #B250A1;
  padding-top:50px;
  padding-left:20px;
`;

const InfoScreen = ({ navigation, route }) => {
  const [data, setData] = useState({});
  const [hasShaked, setHasShaked] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("red");
  const [randomWords, setRandomWords] = useState("");
  const [hasShakedInitially, setHasShakedInitially] = useState(false);

  const changeBackground = () => {
    const colors = ["orange", "yellow", "red","green", "pink", "purple"];
    //pick one color randomly
    setBackgroundColor( colors[Math.floor(Math.random() * colors.length)]);
    };
  const changeWords = () => {
    const words = ["be happy", "love", "be gratefull", "get inspired", "be kind", " stay positive", "keep calm", "dance", "smile", "drink coffee"];
    //pick one word randomly
    setRandomWords(words[Math.floor(Math.random() * words.length)]); 
    }        

  useEffect(() => {
    Accelerometer.setUpdateInterval(500);
    const listener = Accelerometer.addListener((accelerometerData) => {
    setData(accelerometerData);
    setHasShaked(false);
  },[]);

    return () => {
      listener && listener.remove();
    };
  }, []);
  
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);


  if (!hasShaked && totalForce > 3)  {
    setHasShakedInitially(true);
    setHasShaked(true);
    changeBackground();
    changeWords();
  }

  return (
    <>
    { hasShakedInitially ? (
    <InfoContainer style={{backgroundColor: backgroundColor,
                          justifyContent:"center",
                          alignItems:"center"}}>
    <InfoText style={{fontSize: 50, color: "white"}}> {randomWords}
    </InfoText>
    </InfoContainer>
    ) : (
    <InfoContainer source={backgroundImage}>
      <InfoText>
        Shake me! Shake me!
        Shake me! Shake me!
      </InfoText>
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