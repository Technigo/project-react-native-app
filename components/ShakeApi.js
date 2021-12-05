import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { useFonts, Coiny_400Regular } from "@expo-google-fonts/coiny";
import { Accelerometer } from "expo-sensors";
import styled from "styled-components/native";
import Snow from "react-native-snow-bg";

const ShakeApi = () => {
  const [fontsLoaded] = useFonts({
    Coiny_400Regular,
  });
  const [loading, setLoading] = useState(false);
  const fontSize = 40;
  const paddingVertical = 6;
  const color = "white";

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);
  const [activity, setActivity] = useState({});

  useEffect(() => {
    generateActivity();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(3000);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isShaking(data)) {
      generateActivity();
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

  const generateActivity = () => {
    setLoading();
    fetch("https://www.boredapi.com/api/activity/")
      .then((res) => res.json())
      .then((data) => setActivity(data));
    // .finally(() => setLoading(false)); // don't work//
  };

  const isShaking = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };
  const { x, y, z } = data;

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <ScreenBackground source={require("./winterBg.jpg")}>
        <Heading>
          <TextHeading
            style={{
              color,
              fontSize,
              paddingVertical,
              // Note the quoting of the value for `fontFamily` here; it expects a string!
              fontFamily: "Coiny_400Regular",
            }}
          >
            Bored? Shake!
          </TextHeading>
        </Heading>
        <ActivityBallWrap>
          <BoxWrapper>
            <ImgWrap>
              <SnowglobeImage source={require("../assets/Snowglobe1.png")} />
            </ImgWrap>
            <Suggestion
              style={{
                fontFamily: "Coiny_400Regular",
              }}
            >
              {activity.activity}
            </Suggestion>
          </BoxWrapper>
        </ActivityBallWrap>

        <Snow fullScreen snowflakesCount={150} fallSpeed="medium" />
      </ScreenBackground>
    );
  }
};

export default ShakeApi;

const ActivityBallWrap = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Suggestion = styled.Text`
  max-width: 270px;
  padding: 30px 10px;
  font-size: 20px;
  margin-left: 0px;
  margin-top: 60px;
  margin-right: 0px;
  color: white;
  position: absolute;
  justify-content: center;
  align-items: center;
  padding: 4px;
`;

const ScreenBackground = styled.ImageBackground`
  height: 100%;
`;

const Heading = styled.View`
  margin-top: 100px;
  align-items: center;
  justify-content: center;
`;

const TextHeading = styled.Text`
  color: white;
  font-size: 20px;
`;

const ImgWrap = styled.View`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
`;

const BoxWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

const SnowglobeImage = styled.Image`
  display: flex;
  margin-top: 200px;
  width: 400px;
  height: 400px;
  position: relative;
`;
