import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { useFonts, Raleway_800ExtraBold } from "@expo-google-fonts/raleway";
import { POEM_URL } from "../utils/Urls";
import { Accelerometer } from "expo-sensors";

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e65c5d;
  padding: 10px;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const PresentationText = styled.Text`
  font-family: "Raleway_800ExtraBold";
  font-weight: bold;
  font-size: 28px;
  margin: 10px;
`;

const TitleText = styled.Text`
  font-family: "Raleway_800ExtraBold";
  font-size: 30px;
  font-weight: 800;
  color: #7ff9e1;
  padding-top: 10px;
`;

const BodyText = styled.Text`
  margin-top: 10px;
`;

const ShakeText = styled.Text`
font-family: "Raleway_800ExtraBold";
font-weight: bold;
font-size: 20px
color: black;
background-color: white;
margin-top: 30px;
`;

const Loader = styled.ActivityIndicator`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
`;

const ShakePoem = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [poem, setPoem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const [fontsLoaded] = useFonts({ Raleway_800ExtraBold });

  useEffect(() => {
    generatePoem();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) {
      generatePoem();
    }
  }, [data]);

  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData);
      })
    );
  };

  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const generatePoem = () => {
    setLoading(true);
    fetch(POEM_URL)
      .then((res) => res.json())
      .then((data) => setPoem(data[0]))
      .finally(() => setLoading(false));
  };

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };

  if (loading || !fontsLoaded) {
    return <Loader size="large" color="#db7092" />;
  }

  return (
    <Container>
      <PresentationText>Read slowly: </PresentationText>
      <TitleText> {poem.title}</TitleText>
      <Text>By: {poem.poet.name}</Text>
      <BodyText>{poem.content}</BodyText>
      <ShakeText>Shake again for a new poem!</ShakeText>
    </Container>
  );
};

export default ShakePoem;

{
  /* <View>
{poem.map(
  (poem) => (
    (<ActivityText>Title: {poem.title}</ActivityText>),
    (<Text>Poet: {poem.author}</Text>),
    (<Text>{poem.lines}</Text>)
  )
)}
</View> */
}
