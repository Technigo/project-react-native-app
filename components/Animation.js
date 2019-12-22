import React, { useState } from 'react';
import { StyleSheet, Animated, Easing, Dimensions } from 'react-native';
import styled from "styled-components/native"

const { width, height } = Dimensions.get('window')

export default function Animation() {

  const [xPosition, setXPosition] = useState(new Animated.Value(width / 2 - 205))

  const shake = () => {
    Animated.sequence([
      Animated.timing(xPosition, {
        toValue: width / 2 - 185,
        duration: 100,
        easing: Easing.linear
      }),
      Animated.timing(xPosition, {
        toValue: width / 2 - 225,
        duration: 100,
        easing: Easing.linear
      }),
      Animated.timing(xPosition, {
        toValue: width / 2 - 185,
        duration: 100,
        easing: Easing.linear
      }),
      Animated.timing(xPosition, {
        toValue: width / 2 - 225,
        duration: 100,
        easing: Easing.linear
      }),
      Animated.timing(xPosition, {
        toValue: width / 2 - 205,
        duration: 100,
        easing: Easing.linear
      })
    ]).start()
  }

  return (
    <Container>
      <Animated.View style={[styles.circles, { left: xPosition }]} >
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </Animated.View>
      <Button onPress={shake}>
        <ButtonText>Press me</ButtonText>
      </Button>
    </Container>
  );
}

const Container = styled.View`
  background-color: #ffeead;
  flex: 0.2;
  justify-content: center;
`
const Circle = styled.View`
  height: 10px;
  width: 10px;
  background-color: white;
  border-radius: 5px;
  border-width: 1px;
  margin-horizontal: 10;
`
const Button = styled.TouchableOpacity`
  background-color: white;
  border-radius: 30px;
  border: 3px solid tomato;
  padding: 10px 20px;
`
const ButtonText = styled.Text`
  color: tomato;
  font-size: 20;
`

const styles = StyleSheet.create({
  circles: {
    height: 80,
    width: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});