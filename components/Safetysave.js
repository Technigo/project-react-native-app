import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { Accelerometer } from 'expo-sensors';
import { useFonts, Buda_300Light } from '@expo-google-fonts/buda';

const QuoteText = styled.Text`
  font-weight: 700;
`;

const ShakeApi = () => {
  // shakedata
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);
  // subscription always leve with unsubscription
  const [subscription, setSubscription] = useState(null);
  const [fontsLoaded] = useFonts({
    Buda_300Light,
  });

  useEffect(() => {
    generateQuote();
  }, []);

  //   how often the acc will check + when component get mounted we will subscribe, and then unmount(?)
  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) genereateQuote();
  }, [data]);

  // //   how often the acc will check
  //   const _slow = () => {
  //     Accelerometer.setUpdateInterval(1000);
  //   };

  //   const _fast = () => {
  //     Accelerometer.setUpdateInterval(16);
  //   };

  // //   keep phone updated
  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData);
      })
    );
  };

  //   stop beeing updated
  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const generateQuote = () => {
    setLoading(true);
    fetch('http://api.quotable.io/random')
    fetch('https://stoicquotesapi.com/v1/api/quotes')
    https://api.kanye.rest/
      .then((res) => res.json())
      .then((quote) => setQuote(quote))
      .finally(() => setLoading(false));
  };

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };

  if (loading || !fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <QuoteText style={{ fontFamily: 'Buda_300Light' }}>
        Quote: {quote.content}
      </QuoteText>
      <Text>Author: {quote.author}</Text>
    </View>
  );
};

export default;
