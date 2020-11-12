import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import backgroundImage from "../assets/background2.jpg";
import { Text } from "react-native";
import { Accelerometer } from "expo-sensors";

const InfoContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 18px;
`;

const InfoText = styled.Text`
  font-size: 48px;
  ${(props) => color: hsl '(140, 100%, 50%)'};
`;
 // ${(props) => `color: hsl (${props.hue}, 100%, 50%)`};
// ${(props) => `transform: translate(${props.xOffset}px, ${props.yOffset}px) `};

const InfoScreen = ({ navigation, route }) => {
  const [data, setData] = useState({});
  const[hasShaked, setHasShaked] = useState(false);

  useEffect(() => {
    Accelerometer.setUpdateInterval(200);
    const listener = Accelerometer.addListener((accelerometerData) => {
      setData(accelerometerData);
    });

    return () => {
      listener && listener.remove();
    };
  }, []);

  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
// why do we need !hasShaked
  if (!hasShaked && totalForce > 2)  {
  setHasShaked(true);
  //trigger the fetch
}

const hue = 220 + totalForce * 170;

console.log(setHasShaked);
  // let { x, y, z } = data;
  // let xOffset = x * -60 || 0;
  // let yOffset = z * -120 || 0;
  return (
    <InfoContainer source={backgroundImage}>
      <InfoText>
        Info Screen
      </InfoText>
      {/* what is this for? */}
      <Text>{route.params.data}</Text>
        <Text>
        Total Force: {totalForce}
      </Text>
    </InfoContainer>
  );
};

export default InfoScreen;