import React, { useEffect } from "react";
import styled from "styled-components/native";
import { useWindowDimensions, Animated, ImageBackground } from "react-native";
import "react-native-gesture-handler";

export const Home = ({ navigation }) => {
  //local consts
  const dimensions = useWindowDimensions();
  const marvelArr = ["M", "A", "R", "V", "E", "L"];
  const animatedValues = [];

  marvelArr.forEach((_, i) => {
    animatedValues[i] = new Animated.Value(0);
  });

  //local function
  const animated = (toValue = 1) => {
    const animations = marvelArr.map((_, i) => {
      return Animated.timing(animatedValues[i], {
        toValue,
        duration: 1000,
        useNativeDriver: false,
      });
    });
    Animated.stagger(100, animations).start();
  };

  //useEffects
  useEffect(() => {
    animated();
  }, []);

  //render
  return (
    <ImageBackground
      source={require("../assets/comicBg.jpg")}
      style={{ flex: 1, width: "100%" }}
    >
      <Wrapper>
        {marvelArr.map((word, index) => {
          console.log(word, index);
          return (
            <Animated.Text
              key={`${word}-${index}`}
              style={{
                color: "red",
                fontSize: 60,
                fontWeight: "bold",
                opacity: animatedValues[index],
              }}
            >
              {word}
            </Animated.Text>
          );
        })}
        {dimensions.width >= 768 ? (
          <></>
        ) : (
          <Button onPress={() => navigation.toggleDrawer()}>
            <ButtonText>Show Menu</ButtonText>
          </Button>
        )}
      </Wrapper>
    </ImageBackground>
  );
};

//styled components
const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
`;

const Button = styled.TouchableOpacity`
  height: 30px;
  width: 100px;
  background: white;
  border-color: grey;
  border-style: solid;
  border-width: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  border-radius: 10px;
`;

const ButtonText = styled.Text`
  color: black;
`;
