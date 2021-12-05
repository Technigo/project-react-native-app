import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, Linking } from "react-native";
import styled from "styled-components/native";
import { useFonts, Raleway_800ExtraBold } from "@expo-google-fonts/raleway";
import { MOVIE_URL } from "../utils/Urls";
import { Accelerometer } from "expo-sensors";

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7bfae2;
  padding: 10px;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const PresentationText = styled.Text`
  font-family: "Raleway_800ExtraBold";
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 10px;
`;

const TitleText = styled.Text`
  font-family: "Raleway_800ExtraBold";
  font-size: 30px;
  font-weight: 800;
  color: #7a59e4;
  padding: 10px;
`;

const OverviewText = styled.Text`
  margin-top: 5px;
  color: darkgrey;
`;

const UrlText = styled.Text`
  text-decoration: underline;
  margin-top: 5px;
`;

const ShakeText = styled.Text`
font-family: "Raleway_800ExtraBold";
font-weight: bold;
font-size: 20px
color: black;
background-color: white;
margin-top: 30px;
`;

const Loader = styled.ActivityIndicator`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
`;

const ShakeMovie = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const [fontsLoaded] = useFonts({ Raleway_800ExtraBold });

  useEffect(() => {
    generateMovie();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) {
      generateMovie();
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

  const generateMovie = () => {
    setLoading(true);
    fetch(MOVIE_URL(randomMovie()))
      .then((res) => res.json())
      .then((data) => {
        if (data.adult === false) {
          setMovie(data);
        }
      })
      .finally(() => setLoading(false));
  };

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };

  // gets a random number from the movies url.
  const randomMovie = (max, min) => {
    return Math.random() * (907331 - 1 + 1) + 1;
  };

  //Handling if loading and fontsloading + if there are no movie
  if (loading || !fontsLoaded) {
    return <Loader size="large" color="#db7092" />;
  } else if (!movie.title) {
    return (
      <Container>
        <PresentationText>Something went wrong, shake it!</PresentationText>
      </Container>
    );
  }

  return (
    <Container>
      <PresentationText>Lets watch:</PresentationText>
      <TitleText>{movie.title}</TitleText>
      <OverviewText>{movie.overview}</OverviewText>
      <UrlText onPress={() => Linking.openURL(`${movie.homepage}`)}>
        {movie.homepage}
      </UrlText>
      <ShakeText>Shake again for a new movie!</ShakeText>
    </Container>
  );
};

export default ShakeMovie;
