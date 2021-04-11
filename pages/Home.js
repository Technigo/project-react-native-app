import React, { useEffect } from "react";
import styled from "styled-components/native";
import { useWindowDimensions, Animated} from "react-native";
import "react-native-gesture-handler";

export const Home = ({ navigation }) => {
  const dimensions = useWindowDimensions();
  const marvelArr = ["M", "A", "R", "V", "E", "L"];
  const animatedValues = [];

  marvelArr.forEach((_, i) => {
    animatedValues[i] = new Animated.Value(0);
  });

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

  useEffect(() => {
  animated();}, [])

  return (
    <Wrapper>
      {marvelArr.map((word, index) => {
        console.log(word, index);
        return (
          <Animated.Text
            key={`${word}-${index}`}
            style={{
              color: "red",
              fontSize: 40,
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
  );
};

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const Button = styled.TouchableOpacity`
height: 30px;
width: 100px;
background: black;
border-color: red;
border-style: solid;
border-width: 2px;
display: flex;
justify-content: center;
align-items: center;
margin: 50px;
border-radius: 10px;
`;

const ButtonText = styled.Text`
color: red;`
