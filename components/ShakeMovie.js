import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styled from "styled-components/native"; // use /native when you are styling core components
import { MOVIE_URL } from "../utils/Urls";
import { Accelerometer } from "expo-sensors";

// STYLED COMPONENTS
const ActivityText = styled.Text`
  font-weight: 700;
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

  useEffect(() => {
    generateMovie();
  }, []);

  useEffect(() => {
    // This function determines how often our program reads the accelerometer data in milliseconds
    Accelerometer.setUpdateInterval(1000);
    // Start listening to the data when this SensorComponent is active
    subscribe();
    // Stop listening to the data when we leave SensorComponent
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
        // Whenever this function is called, we have received new data
        // The frequency of this function is controlled by setUpdateInterval
        setData(accelerometerData);
      })
    );
  };

  // This will tell the device to stop reading Accelerometer data.
  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const generateMovie = () => {
    setLoading(true);
    fetch(MOVIE_URL(randomMovie()))
      .then((res) => res.json())
      .then((data) => setMovie(data))

      .finally(() => setLoading(false));
  };

  // How to filter the list and remove empty objects?
  // const generateMovie = () => {
  //   setLoading(true);
  //   fetch(MOVIE_URL(randomMovie()))
  //     .then((res) => res.json())
  //     .then((data) => {
  //       let completeList = data.filter((movies) => movies.length > 0);
  //       setMovie(completeList);
  //     })

  //     .finally(() => setLoading(false));
  // };

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };
  // gets a random number from the complete list of movies.
  const randomMovie = () => {
    const min = Math.ceil(1);
    const max = Math.floor(907331);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View>
      <ActivityText>Title: {movie.original_title}</ActivityText>
      <Text>Overview: {movie.overview}</Text>
      {movie.homepage ? (
        <Text>Homepage: {movie.homepage}</Text>
      ) : (
        <Text>Nope</Text>
      )}
      <Text>Released: {movie.release_date}</Text>
    </View>
  );
};

export default ShakeMovie;
