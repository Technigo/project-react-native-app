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

const Species = ({ setCurrentPage, setLoading }) => {
  // used to store the current position of the phone
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [species, setNewSpecies] = useState({});

  // outside of the scope of bootcamp, communication between sensor and our code
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    generateSpecies();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);
    _subscribe();
    return () => _unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) {
      generateSpecies();
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

  const generateSpecies = () => {
    const randomNr = Math.floor(Math.random() * (37 - 1) + 1);
    setLoading(true);
    fetch(`https://swapi.dev/api/species/${randomNr}`)
      .then((res) => res.json())
      .then((json) => setNewSpecies(json))
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
        <InfoText>{species.name}</InfoText>
        <HollowText>Classification:</HollowText>
        <InfoText>{species.classification}</InfoText>
        <HollowText>Average height:</HollowText>
        <InfoText>{species.average_height}</InfoText>
        <HollowText>Average lifespan:</HollowText>
        <InfoText>{species.average_lifespan}</InfoText>
        <HollowText>Language:</HollowText>
        <InfoText>{species.language}</InfoText>
      </SmallContainer>
      <SmallContainer>
        {species.films && species.films.length > 0 && (
          <HollowText>
            {species.name} has appeared in the following movies:
          </HollowText>
        )}
        {species.films &&
          species.films.map((API) => {
            return <AppearedIn API={API} key={API} />;
          })}
      </SmallContainer>
      <TitleText>
        Shake your phone to learn about a new species
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

export default Species;
