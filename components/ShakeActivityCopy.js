import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { useFonts, Raleway_800ExtraBold } from "@expo-google-fonts/raleway";
import { BORED_URL } from "../utils/Urls";
// import { Accelerometer } from "expo-sensors";
import { useShakeStatus } from "../hooks/useShakeStatus";

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6dc7b;
  padding: 10px;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const PresentationText = styled.Text`
  font-family: "Raleway_800ExtraBold";
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 10px;
`;

const TitleText = styled.Text`
  font-family: "Raleway_800ExtraBold";
  font-size: 30px;
  font-weight: 800;
  color: #55c4b5;
  padding: 10px;
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

const ShakeActivityCopy = () => {
  const [activity, setActivity] = useState({});
  const [loading, setLoading] = useState(false);
  const [fontsLoaded] = useFonts({ Raleway_800ExtraBold });
  const shakesEnough = useShakeStatus(false);

  useEffect(() => {
    generateActivity();
  }, []);

  useEffect(() => {
    if (shakesEnough === true) {
      generateActivity();
    }
  }, [shakesEnough]);

  const generateActivity = () => {
    setLoading(true);
    fetch(BORED_URL)
      .then((res) => res.json())
      .then((data) => setActivity(data))
      .finally(() => setLoading(false));
  };

  if (loading || !fontsLoaded) {
    return <Loader size="large" color="#db7092" />;
  }

  return (
    <Container>
      <PresentationText>Lets...</PresentationText>
      <TitleText>{activity.activity}</TitleText>
      <Text>A {activity.type} type of activity</Text>
      <ShakeText>Shake again for a new activity!</ShakeText>
    </Container>
  );
};

export default ShakeActivityCopy;
