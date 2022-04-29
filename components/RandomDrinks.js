import React, { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";
import { ScrollView } from "react-native";

import DisplayDrink from "./DisplayDrink";

import styled from "styled-components/native";

const RandomDrinks = ({ route }) => {
  const [drink, setDrink] = useState({});

  const generateDrinks = async () => {
    try {
      const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      const data = await response.json()
      setDrink(data?.drinks[0])
    } catch (error) {
      console.log(error)
    } 
  };

  useEffect(() => {
    generateDrinks();
  }, []);

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [subscription, setSubscription] = useState(null);

  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
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

  const isShaking = (data) => {
    const { x, y, z } = data;
    const totalForce = Math.abs(x) + Math.abs(y) + Math.abs(z);
    return totalForce > 2.5;
  }

  useEffect(() => {
    if (isShaking(data)) {
      generateDrinks();
    }
  }, [data]);

  return (
    <ScrollView>
      <Title>{route.params.title}</Title>
      <DisplayDrink drink={drink} />
    </ScrollView>
  )
};

const Title = styled.Text`
  margin: 30px auto;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;
`;

export default RandomDrinks;