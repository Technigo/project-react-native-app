import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import * as Location from "expo-location";
import styled from "styled-components/native";
import Loading from "./Loading";
import { Platform } from "react-native";

const Main = () => {
  const [heading, setHeading] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // The user has to give permission to the app to use the location when the app is opened.
  // If permission is not given the user gets a error message and otherwhise the Location data is fetched
  // Also set at setTimeout of 2 seconds on the actions which triggers a longer loading screen.
  useEffect(async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    setTimeout(() => {
      if (status !== `granted`) {
        setErrorMessage({
          errorMessage: `Permission to access location was denied!`,
        });
      } else {
        Location.watchHeadingAsync((data) => {
          setHeading(Math.round(data.trueHeading));
        });
      }
    }, 2000);
  }, []);

  // Sets which compass text will be shown depending on the heading from the phone.
  const getCompassText = (heading) => {
    if ((heading >= 337 && heading <= 360) || (heading >= 0 && heading < 22)) {
      return "North";
    } else if (heading >= 22 && heading < 67) {
      return "Northeast";
    } else if (heading >= 67 && heading < 112) {
      return "East";
    } else if (heading >= 112 && heading < 157) {
      return "Southeast";
    } else if (heading >= 157 && heading < 202) {
      return "South";
    } else if (heading >= 202 && heading < 247) {
      return "Southwest";
    } else if (heading >= 247 && heading < 292) {
      return "West";
    } else if (heading >= 292 && heading < 337) {
      return "Northwest";
    }
  };

  // If there is no heading it shows an errorMessage.
  if (!heading) {
    if (errorMessage) {
      return <Text> {errorMessage}</Text>;
    }

    // if the platform is a webbrowser a text that explains that it wont work on webbrowsers appear.
    // Else it returns the loading container.
    if (Platform.OS === "web") {
      return (
        <Container>
          <Text>
            This compass app doesnt work in a web browser since it needs the
            mobiles location to work!
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

  // When the loading is finished it returns the compass picture which is rotated in the right direction with the
  // compass text which changes depending on the heading.
  return (
    <Container>
      <Heading>Compass</Heading>
      <Image
        source={require("../assets/compass.png")}
        style={{
          transform: [{ rotate: 360 - heading + "deg" }],
        }}
      />
      <Text>{heading}&deg;</Text>
      <Text> {getCompassText(heading)}</Text>
    </Container>
  );
};

export default Main;

// The padding top is adapted depending on the statusBarHeight on the mobile used.
const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: ${Constants.statusBarHeight}px;
  background-color: black;
  padding: 24px;
`;

const Heading = styled.Text`
  margin: 0;
  font-size: 50px;
  color: white;
  font-weight: 100;
`;

const Text = styled.Text`
  font-size: 24px;
  font-weight: 100;
  margin: 0 24px;
  text-align: center;
  color: white;
`;

const Image = styled.Image`
  width: 400px;
  height: 400px;
`;
