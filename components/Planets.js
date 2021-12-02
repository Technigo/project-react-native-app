import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { Accelerometer } from "expo-sensors";
import styled from "styled-components/native";

import CategoryButton from "./CategoryButton";

const TopText = styled.Text`
  font-size: 24px;
  font-family: "SWFontHollow";
  color: ${(props) => props.theme.colors.textYellow};
`;

const InfoText = styled.Text`
  font-size: 24px;
  font-family: "SWFont";
  color: ${(props) => props.theme.colors.textYellow};
`;

const Planets = ({ setCurrentPage, setLoading }) => {
  // used to store the current position of the phone
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [planet, setNewPlanet] = useState({});
  // outside of the scope of bootcamp, communication between sensor and our code
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    generatePlanet();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);
    _subscribe();
    return () => _unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) {
      generatePlanet();
    }
  }, [data]);

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const generatePlanet = () => {
    const randomNr = Math.floor(Math.random() * 60);
    setLoading(true);
    fetch(`https://swapi.dev/api/planets/${randomNr}`)
      .then((res) => res.json())
      .then((json) => setNewPlanet(json))
      .finally(() => setLoading(false));
  };

  const isShakingEnough = (data) => {
    const totalForce =
      Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };
  const onPressed = (category) => {
    setCurrentPage(category);
  };
  return (
    <>
      <TopText>Shake your phone to learn about a new planet</TopText>
      <InfoText>Name: {planet.name}</InfoText>
      <InfoText>Population: {planet.population}</InfoText>
      <InfoText>Terrain: {planet.terrain}</InfoText>
      <InfoText>Climate: {planet.climate}</InfoText>
      <InfoText>Gravity: {planet.gravity}</InfoText>
      <CategoryButton buttonText="StartPage" onPressed={onPressed} />
    </>
  );
};

export default Planets;
