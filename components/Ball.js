import React, { useState, useEffect, useRef } from "react";
import { Text, View, Animated, PanResponder } from "react-native";
import styled from "styled-components/native";
import { Accelerometer } from "expo-sensors";

const Container = styled.View`
  flex: 1;
  background-color: #f2f939;
  align-items: center;
`;
const Title = styled.Text`
  margin-top: 50px;
  font-size: 30px;
  font-weight: 900;
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

const Ball = () => {
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

  const [subscription, setSubscription] = useState(null);
  const [answer, setAnswer] = useState({});
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    generateAnswer();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(3000);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) {
      generateAnswer();
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

  const generateAnswer = () => {
    fetch("https://api.kanye.rest")
      .then((res) => res.json())
      .then((answer) => setAnswer(answer));
  };

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.0;
  };

  const { x, y, z } = data;
  return (
    <Container>
      <Title>Here you can find the answer on everything!</Title>
      <View>
        <Animated.View
          style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
          }}
          {...panResponder.panHandlers}
        >
          <BallContainer>
            <Content>
              <Answer>
                {isShakingEnough(data) ? answer.quote : <Number>8</Number>}
              </Answer>
            </Content>
          </BallContainer>
        </Animated.View>
      </View>
    </Container>
  );
};

export default Ball;
