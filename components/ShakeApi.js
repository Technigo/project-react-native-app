import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { Accelerometer } from 'expo-sensors';
import { useFonts, Buda_300Light } from '@expo-google-fonts/buda';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';

const Heading = styled.Text`
  font-size: 35px;
  text-align: center;
  margin-top: 10%;
`;

const TextBox = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 40%;
`;

const QuoteText = styled.Text`
  font-weight: 500;
  font-size: 30px;
  padding-bottom: 15px;
`;

const ShakeText = styled.Text`
  font-size: 16px;
  padding-right: 12%;
`;

const KanyeBackground = styled.ImageBackground`
  height: 100%;
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
    Poppins_400Regular,
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
    if (isShakingEnough(data)) generateQuote();
  }, [data]);

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
    fetch('https://api.kanye.rest/')
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
    <KanyeBackground source={require('../assets/kanye_back.jpg')}>
      <Heading style={{ fontFamily: 'Poppins_400Regular' }}>
        What Ye said:{' '}
      </Heading>
      <TextBox>
        <QuoteText style={{ fontFamily: 'Buda_300Light' }}>
          "{quote.quote}"
        </QuoteText>
        <ShakeText>
          Shake your phone to get more valuable wisdom from Kanye West.
        </ShakeText>
      </TextBox>
    </KanyeBackground>
  );
};

export default ShakeApi;
