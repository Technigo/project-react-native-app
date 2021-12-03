import React, { useState, useEffect, useRef } from "react";
import { Text, View, Animated, PanResponder } from "react-native";
import styled from "styled-components/native";
import { Accelerometer } from "expo-sensors";

const Container = styled.View`
  flex: 1;
  background-color: #16f752;
  align-items: center;
`;
const PowerText = styled.Text`
  font-size: 30px;
  margin: 20px;
  text-align: center;
`;

const BallContainer = styled.View`
  height: 300px;
  width: 300px;
  align-items: center;
  margin: 100px;
  background-color: black;
  justify-content: center;
  border-radius: 500px;
`;
const Content = styled.View`
  width: 55%;
  height: 55%;
  background-color: white;
  border-radius: 500px;
  align-items: center;
  justify-content: center;
`;
const Answer = styled.Text`
  font-size: 12px;
  margin: 5px;
  color: black;
`;

const Number = styled.Text`
  font-size: 70px;
`;

const Power = () => {
  const [newMeaning, setNewMeaning] = useState("");
  const meaning = [
    "Make a power pose!",
    "Put on some music and dance your as of!",
    "You are awesome!",
    "Love your self",
    "You are amazing",
    "Cleaning can wait, call a friend",
    "Sing out loud!",
  ];

  const [subscription, setSubscription] = useState(null);
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    Accelerometer.setUpdateInterval(3000);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) {
      showMeaning();
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

  useEffect(() => {
    subscribe();
    return () => unsubscribe();
  }, []);

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.3;
  };

  const showMeaning = () => {
    setNewMeaning(meaning[Math.floor(Math.random() * meaning.length)]);
    setTimeout(() => {
      setNewMeaning("");
    }, 4000);
  };

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

  return (
    <Container>
      <PowerText>Hey Rockstar! shake me for a mood boost</PowerText>
      <View>
        <Animated.View
          style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
          }}
          {...panResponder.panHandlers}
        >
          <BallContainer>
            <Content>
              <Answer>{!newMeaning ? <Number>8</Number> : newMeaning}</Answer>
            </Content>
          </BallContainer>
        </Animated.View>
      </View>
    </Container>
  );
};

export default Power;
