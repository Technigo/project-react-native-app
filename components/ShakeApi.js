import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { Accelerometer } from "expo-sensors";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  MontserratAlternates_100Thin,
  MontserratAlternates_100Thin_Italic,
  MontserratAlternates_200ExtraLight,
  MontserratAlternates_200ExtraLight_Italic,
  MontserratAlternates_300Light,
  MontserratAlternates_300Light_Italic,
  MontserratAlternates_400Regular,
  MontserratAlternates_400Regular_Italic,
  MontserratAlternates_500Medium,
  MontserratAlternates_500Medium_Italic,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_600SemiBold_Italic,
  MontserratAlternates_700Bold,
  MontserratAlternates_700Bold_Italic,
  MontserratAlternates_800ExtraBold,
  MontserratAlternates_800ExtraBold_Italic,
  MontserratAlternates_900Black,
  MontserratAlternates_900Black_Italic,
} from "@expo-google-fonts/montserrat-alternates";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAF1CBbf",
    height: 450,
    width: 300,
    padding: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  instruction: {
    textAlign: "center",
    fontSize: 30,
    color: "#1B3D2F",
    fontFamily: "MontserratAlternates_600SemiBold",
  },
  quotedtext: {
    fontSize: 18,
    color: "#1B3D2F",
    fontFamily: "MontserratAlternates_500Medium",
  },
  author: {
    color: "#1B3D2F",
    fontFamily: "MontserratAlternates_400Regular_Italic",
  },
});

const ShakeApi = () => {
  let [fontsLoaded] = useFonts({
    MontserratAlternates_100Thin,
    MontserratAlternates_100Thin_Italic,
    MontserratAlternates_200ExtraLight,
    MontserratAlternates_200ExtraLight_Italic,
    MontserratAlternates_300Light,
    MontserratAlternates_300Light_Italic,
    MontserratAlternates_400Regular,
    MontserratAlternates_400Regular_Italic,
    MontserratAlternates_500Medium,
    MontserratAlternates_500Medium_Italic,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_600SemiBold_Italic,
    MontserratAlternates_700Bold,
    MontserratAlternates_700Bold_Italic,
    MontserratAlternates_800ExtraBold,
    MontserratAlternates_800ExtraBold_Italic,
    MontserratAlternates_900Black,
    MontserratAlternates_900Black_Italic,
  });

  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const isShaking = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };

  useEffect(() => {
    generateQuote();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isShaking(data)) {
      generateQuote();
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

  const generateQuote = () => {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => setTimeout(() => setQuote(quote), 1000))
      .finally(() => setTimeout(() => setLoading(false), 1000)),
      Vibration.vibrate();
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Loader />
      </View>
    );
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.instruction}>Shake for some wise words!</Text>
        <Text style={styles.quotedtext}>
          {" "}
          "{quote.content}"<Text style={styles.author}> {quote.author}</Text>
        </Text>
      </View>
    );
  }
};

export default ShakeApi;
