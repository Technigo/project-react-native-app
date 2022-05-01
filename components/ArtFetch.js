import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { View, StyleSheet, Text, Image, TouchableOpacity, Button } from "react-native";
import { Accelerometer } from "expo-sensors";


import { MEME_API, JOKES_API } from "./url/urls";

const ArtFetch = () => {
  const [joke, setJoke] = useState({});
  const [subscription, setSubscription] = useState(null);

  const getJoke = () => {
    fetch(JOKES_API)
      .then((res) => res.json())
      .then((data) => setJoke(data));
  };

  useEffect(() => {
    getJoke();
  }, []);
  
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  
      
      const { x, y, z } = data;
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
      // component mounts execute the function below
    subscribe();

    // component unmounts execute the function in the return statement
    return () => unsubscribe();
  }, []);


const isShaking = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 2.2;
}


useEffect(()=> {
    if (isShaking(data)) {
        getJoke();
    }
}, [data])

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.jokeText}>{joke.setup}</Text>
        <Text style={styles.deliveryText}>{joke.delivery}</Text>
      </View>
    <View style={styles.button}>
      <TouchableOpacity onPress={getJoke}>
                <Text style={styles.buttonText}>Press to laugh</Text>
            </TouchableOpacity>
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: 250,
    minHeight: 100,
   
  },
  textContainer: {
    marginTop: 28,
    borderLeftWidth: 2,
    borderLeftColor: 'tomato',
    minHeight: 80,
    width: 250,
  },

  jokeText: {
    fontFamily: "GillSans-SemiBold",
    fontSize: 18,
    marginBottom: 10,
    paddingLeft: 10,
    paddingTop: 5,
  },
  deliveryText: {
    paddingLeft: 10,
    fontFamily: "Optima-Italic",
    fontSize:  18,
  },
  image: {
    width: 300,
    height: "auto",
  },
  button: {
    borderWidth: 2,
    padding: 8,
    marginTop: 80,
    borderColor: 'tomato',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: "Optima-Italic",
    textTransform: 'uppercase',
    color: 'tomato',
  }
});

export default ArtFetch;
