import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { Accelerometer } from "expo-sensors";
import { useFonts, Epilogue_500Medium } from "@expo-google-fonts/epilogue";

const Container = styled.View`
  background-color: #fef5ed;
  border: 1px solid #99a799;
  border-radius: 30px;
  justify-content: center;
  text-align: center;
  padding: 20px;
`;

const QuoteText = styled.Text`
  font-weight: 700;
`;

const ShakeApi = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const [fontsLoaded] = useFonts({
    Epilogue_500Medium,
  });

  useEffect(() => {
    getQuote();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) {
      getQuote();
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

  const getQuote = () => {
    setLoading(true);
    // fetch("http://api.quotable.io/random")
    fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then((res) => res.json())
      //.then((quote) => console.log(quote))
      .then((data) => setQuote(data))
      .finally(() => setLoading(false));
  };

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };

  if (loading || !fontsLoaded) {
    return <ActivityIndicator />;
  }

  const { x, y, z } = data;

  return (
    <Container>
      <QuoteText style={{ fontFamily: "Epilogue_500Medium" }}>
        - {quote}
      </QuoteText>
    </Container>
  );
};

export default ShakeApi;
