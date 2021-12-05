import React, { useState, useRef } from "react";
import {
  PanResponder,
  Animated,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { Accelerometer } from "expo-sensors";
import styled from "styled-components/native";
import Snow from "react-native-snow-bg";
// import FunctionDrag from "./FunctionDrag"; // Still have this if I can make it work later//
import { useFonts, Coiny_400Regular } from "@expo-google-fonts/coiny";

const ChristmasTree = () => {
  const [fontsLoaded] = useFonts({
    Coiny_400Regular,
  });
  const [loading, setLoading] = useState(false);
  const fontSize = 35;
  const paddingVertical = 6;
  const color = "white";

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    })
  ).current;

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <ScreenBackground source={require("./winterBg.jpg")}>
        <Heading>
          <Text
            style={{
              color,
              fontSize,
              paddingVertical,
              fontFamily: "Coiny_400Regular",
            }}
          >
            Lets decorate!
          </Text>
        </Heading>
        <ContainerWrap>
          <View>
            <Animated.View
              style={{
                transform: [{ translateX: pan.x }, { translateY: pan.y }],
              }}
              {...panResponder.panHandlers} //This does not work, trying to make the emojis that ypu can drag. //
            >
              <InnerBox>
                <Text>❤️</Text>
              </InnerBox>
            </Animated.View>
          </View>
          <TreeBox>
            <ChrismasTreeImage
              source={require("../assets/chrismastree1.png")}
            />
          </TreeBox>
        </ContainerWrap>

        <Snow fullScreen snowflakesCount={150} fallSpeed="medium" />
      </ScreenBackground>
    );
  }
};

export default ChristmasTree;

const ContainerWrap = styled.View`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const ScreenBackground = styled.ImageBackground`
  height: 100%;
  border: 4px solid red;
  display: flex;
`;

const Heading = styled.View`
  margin-top: 100px;
  align-items: center;
  justify-content: center;
`;

// const Decoration = styled.Text`
//   padding: 4px;
//   font-size: 12px;
//   margin: 5px;
//   color: red;
//   border: 4px solid red;
// `;

const InnerBox = styled.View`
  width: 10%;
  height: 10%;
  background-color: red;
  border-radius: 500px;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const TreeBox = styled.View`
  display: flex;
  align-items: flex-end;
`;

const ChrismasTreeImage = styled.Image`
  position: relative;
  display: flex;
  width: 450px;
  height: 450px;
`;
