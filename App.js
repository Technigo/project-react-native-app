import React, { useRef, useState, useEffect } from "react";
import { Animated, Text, View, StyleSheet, Button } from "react-native";
import styled from "styled-components/native";
import RandomAnswer from "./Answers";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Eightball = styled.View`
  width: 200;
  height: 200;
  border: 64px black solid;
  border-radius: 100;
  margin-bottom: 35px;
`;

const EightballContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const EightballText = styled.Text`
  font-size: 42px;
  font-weight: 700;
`;

const FadingText = styled.Text`
  font-size: 28px;
  text-align: center;
  margin: 10px;
`;

const ButtonRow = styled.View`
  flex-direction: column;
  margin-vertical: 16px;
  justify-content: space-around;
`;

const StyledButton = styled.Button`
  margin-bottom: 16px;
`;

export default function App() {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  };

  const onRefresh = () => {
    window.location.reload();
    return false;
  };

  return (
    <Container>
      <>
        <Eightball>
          <EightballContent>
            <EightballText>8</EightballText>
          </EightballContent>
        </Eightball>
      </>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim, // Bind opacity to animated value
          },
        ]}
      >
        <FadingText>
          {" "}
          <RandomAnswer />
        </FadingText>
      </Animated.View>
      <ButtonRow>
        <StyledButton title='Shake the Eightball' onPress={fadeIn} />
        <StyledButton title='Reset' onPress={onRefresh} />
      </ButtonRow>
    </Container>
  );
}

const styles = StyleSheet.create({
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "powderblue",
  },
});
