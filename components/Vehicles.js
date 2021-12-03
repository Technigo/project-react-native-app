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

const Vehicles = ({ setCurrentPage, setLoading }) => {
  // used to store the current position of the phone
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [vehicles, setNewVehicles] = useState({});

  // outside of the scope of bootcamp, communication between sensor and our code
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    generateVehicles();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);
    _subscribe();
    return () => _unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) {
      generateVehicles();
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
    4, 6, 7, 8, 14, 16, 18, 19, 20, 24, 25, 26, 30, 33, 34, 36, 37,
    38, 42, 44, 45, 46, 50, 51, 53, 54, 55, 56, 57, 60, 62, 67, 69,
    70, 71, 72, 73, 76,
  ];
  const generateVehicles = () => {
    const randomNr = Math.floor(Math.random() * 39);
    const randomNrFromList = nrList[randomNr];
    setLoading(true);
    fetch(`https://swapi.dev/api/vehicles/${randomNrFromList}`)
      .then((res) => res.json())
      .then((json) => setNewVehicles(json))
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
        <InfoText>{vehicles.name}</InfoText>
        <HollowText>Model:</HollowText>
        <InfoText>{vehicles.model}</InfoText>
        <HollowText>Crew:</HollowText>
        <InfoText>{vehicles.crew}</InfoText>
        <HollowText>Passanger capacity:</HollowText>
        <InfoText>{vehicles.passengers}</InfoText>
        <HollowText>Vehicle class:</HollowText>
        <InfoText>{vehicles.vehicle_class}</InfoText>
      </SmallContainer>
      <SmallContainer>
        {vehicles.films && vehicles.films.length > 0 && (
          <HollowText>
            {vehicles.name} has appeared in the following movies:
          </HollowText>
        )}
        {vehicles.films &&
          vehicles.films.map((API) => {
            return <AppearedIn API={API} key={API} />;
          })}
      </SmallContainer>
      <TitleText>
        Shake your phone to learn about a new vehicle
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

export default Vehicles;
