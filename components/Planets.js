import React, { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";
import styled from "styled-components/native";

import CategoryButton from "./CategoryButton";
import AppearedIn from "./AppearedIn";

const HollowText = styled.Text`
  font-size: 24px;
  font-family: "SWFontHollow";
  color: ${(props) => props.theme.colors.textYellow};
`;

const TitleText = styled.Text`
  font-size: 24px;
  font-family: "SWFontHollow";
  color: ${(props) => props.theme.colors.textYellow};
  text-align: center;
`;

const InfoText = styled.Text`
  font-size: 24px;
  font-family: "SWFont";
  color: ${(props) => props.theme.colors.textYellow};
  margin-bottom: 10px;
`;

const SmallContainer = styled.View`
  margin-top: 15px;
  margin-bottom: 15px;
`;

const CenterContainer = styled.View`
  align-items: center;
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
    const randomNr = Math.floor(Math.random() * (60 - 1) + 1);
    setLoading(true);
    fetch(`https://swapi.dev/api/planets/${randomNr}`)
      .then((res) => res.json())
      .then((json) => setNewPlanet(json))
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      );
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
      <TitleText>
        Shake your phone to learn about a new planet
      </TitleText>
      <SmallContainer>
        <HollowText>Name:</HollowText>
        <InfoText>{planet.name}</InfoText>
        <HollowText>Population:</HollowText>
        <InfoText>{planet.population}</InfoText>
        <HollowText>Terrain:</HollowText>
        <InfoText>{planet.terrain}</InfoText>
        <HollowText>Climate:</HollowText>
        <InfoText>{planet.climate}</InfoText>
        <HollowText>Gravity:</HollowText>
        <InfoText>{planet.gravity}</InfoText>
      </SmallContainer>
      <SmallContainer>
        {planet.films && planet.films.length > 0 && (
          <HollowText>
            {planet.name} has appeared in the following movies:
          </HollowText>
        )}
        {planet.films &&
          planet.films.map((API) => {
            return <AppearedIn API={API} key={API} />;
          })}
      </SmallContainer>
      <CenterContainer>
        <CategoryButton
          buttonText="StartPage"
          onPressed={onPressed}
        />
      </CenterContainer>
    </>
  );
};

export default Planets;
