import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { Accelerometer } from 'expo-sensors';
import { useFonts, Buda_300Light } from '@expo-google-fonts/buda';

const QuoteText = styled.Text`
    font-weight: 700;
`;

const ShakeApi = () => {
    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
      }); 
    const [quote, setQoute] = useState({});
    const [loading, setLoading] = useState(false);
    const [subscription, setSubscription] = useState(null);
    const [fontsLoaded] = useFonts({
      Buda_300Light,
    });
    

    useEffect(() => {
        generateQuote();
    }, []);

    useEffect(() => {
        Accelerometer.setUpdateInterval(1000);
        subscribe();
        return () => unsubscribe();
      }, []);

      useEffect(() => {
        if (isShakingEnough(data)) {
            generateQuote();
        }
      }, [data]);


//code form documentation below: --------------------------------------------

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

//----------------------------------------------
    const generateQuote = () => {
        setLoading(true);
        fetch('http://api.quotable.io/random')
        .then((res) => res.json())
        .then((data) => setQoute(data))
        .finally(() => setLoading(false));
    };

    //is deciding on how much movement is a shake:

    const isShakingEnough = (data) => {
        const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
        return totalForce > 1.78;
    }

    if (loading || !fontsLoaded) {
        return <ActivityIndicator/>
    }

    const { x, y, z } = data; 

    return (
    <View>
        <QuoteText style={{ fontFamily: 'Buda_300Light' }} >
          Quote: {quote.content}</QuoteText>
        <Text>Author: {quote.author}</Text>
    </View>
    )};

export default ShakeApi;