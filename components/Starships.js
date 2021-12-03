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
  margin-top: 20px;
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

const Starships = ({ setCurrentPage, setLoading }) => {
  // used to store the current position of the phone
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [starships, setNewStarships] = useState({});

  // outside of the scope of bootcamp, communication between sensor and our code
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    generateStarships();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);
    _subscribe();
    return () => _unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) {
      generateStarships();
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

  const nrList = [
    2, 3, 5, 9, 10, 11, 12, 13, 15, 17, 21, 22, 23, 27, 28, 29, 31,
    32, 39, 40, 41, 43, 47, 48, 49, 52, 58, 59, 61, 63, 64, 65, 66,
    68, 74, 75,
  ];
  const generateStarships = () => {
    const randomNr = Math.floor(Math.random() * (36 - 1) + 1);
    const randomNrFromList = nrList[randomNr];
    setLoading(true);
    fetch(`https://swapi.dev/api/starships/${randomNrFromList}`)
      .then((res) => res.json())
      .then((json) => setNewStarships(json))
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
      <SmallContainer>
        <HollowText>Name:</HollowText>
        <InfoText>{starships.name}</InfoText>
        <HollowText>Model:</HollowText>
        <InfoText>{starships.model}</InfoText>
        <HollowText>Crew:</HollowText>
        <InfoText>{starships.crew}</InfoText>
        <HollowText>Passanger capacity:</HollowText>
        <InfoText>{starships.passengers}</InfoText>
        <HollowText>Starship class:</HollowText>
        <InfoText>{starships.starship_class}</InfoText>
      </SmallContainer>
      <SmallContainer>
        {starships.films && starships.films.length > 0 && (
          <HollowText>
            {starships.name} has appeared in the following movies:
          </HollowText>
        )}
        {starships.films &&
          starships.films.map((API) => {
            return <AppearedIn API={API} key={API} />;
          })}
      </SmallContainer>
      <TitleText>
        Shake your phone to learn about a new starships
      </TitleText>
      <CenterContainer>
        <CategoryButton
          buttonText="StartPage"
          onPressed={onPressed}
        />
      </CenterContainer>
    </>
  );
};

export default Starships;
