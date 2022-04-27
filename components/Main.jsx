import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import * as Location from "expo-location";
import styled from "styled-components/native";
import { Platform } from "react-native";

import Loading from "./Loading";


const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: ${Constants.statusBarHeight}px;
  background-color: black;
  padding: 20px;
`;
const Heading = styled.Text`
  margin: 0;
  font-size: 50px;
  color: #03a062;
  font-weight: 100;
  border: 3px solid #03a062;
  padding: 5px 25px;
`;
const Text = styled.Text`
  font-size: 30px;
  font-weight: 100;
  margin: 0 24px;
  text-align: left;
  color: #03a062;
`;
const Image = styled.Image`
  width: 375px;
  height: 375px;
  margin: 20px 0;
`;

const Main = () => {
  const [heading, setHeading] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  
  useEffect(async () => {
    // USER NEEDS TO GRANT PERMISSION TO ACCES DEVICES LOCATION, IF PERMISSION NOT GIVEN AN ERROR MESSAGE WILL BE DISPLAYED.
    let { status } = await Location.requestForegroundPermissionsAsync();
    setTimeout(() => {
      if (status !== `granted`) {
        setErrorMessage({errorMessage: `Permission to access location was denied!`,});
      } else {
        Location.watchHeadingAsync((data) => {setHeading(Math.round(data.trueHeading));});
      }
    }, 3000); // TRIGGERS LONGER LOADING SCREEN
  }, []);

  //  SETS TEXT BASED ON THE DIRECCTION ON THE PHONE
  const getCompassText = (heading) => {
    if ((heading >= 337 && heading <= 360) || (heading >= 0 && heading < 22)) {
      return "North";
    } else if (heading >= 22 && heading < 67) {
      return "North-east";
    } else if (heading >= 67 && heading < 112) {
      return "East";
    } else if (heading >= 112 && heading < 157) {
      return "South-east";
    } else if (heading >= 157 && heading < 202) {
      return "South";
    } else if (heading >= 202 && heading < 247) {
      return "South-west";
    } else if (heading >= 247 && heading < 292) {
      return "West";
    } else if (heading >= 292 && heading < 337) {
      return "North-west";
    }
  };

  if (!heading) { // ERROR MESSAGE IF NO HEADER
    if (errorMessage) {
      return <Text> {errorMessage}</Text>;
    }

    if (Platform.OS === "web") {// APP WONT RUN IN WEB BECAUSE IT NEEDS ACCESS TO THE PHONES SENSORS, IF ENTERED IN PHONE THE LOADING SCREEN WILL SHOW.
      return (
        <Container>
          <Text>
            The compass does not work on computers since it need the phones sensors to operate.
          </Text>
        </Container>
      );
    } else {
      return (
        <Container>
          <Loading />
        </Container>
      );
    }
  }

  return ( // THE COMPASS PICTURE WILL ROTATE ACCORDING TO WHERE IT'S POINTED AND THE TEXT WILL CHANGE ACCORDINGLY
    <Container>
      <Heading>Compass</Heading>
      <Image
        source={require("../assets/Comcomcom.png")}
        style={{transform: [{ rotate: 360 - heading + "deg" }],}}
      />
      <Text>{heading}&deg; {getCompassText(heading)}</Text>
    </Container>
  );
};

export default Main;