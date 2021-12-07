import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Vibration,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { Accelerometer } from 'expo-sensors';

import { QuoteLoader } from '../components/QuoteLoader';

const image = {
  url: 'https://freerangestock.com/thumbnail/38788/vector-lightbulb-ideas.jpg',
};

export const RandomQuote = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);
  const [subscription, setSubscription] = useState(null);

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
      Vibration.vibrate();
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
    fetch('http://api.quotable.io/random')
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setTimeout(() => setLoading(false), 1500));
  };

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };

  if (loading) {
    return (
      <View style={styles.quoteWrapper}>
        <QuoteLoader />
      </View>
    );
  }

  return (
    <View style={styles.quoteWrapper}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <Text style={styles.quoteHeader}>Shake to get quote</Text>
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteText}>{quote.content}</Text>
          <Text>- {quote.author}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  quoteWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    flex: 0.8,
    marginTop: 90,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  quoteHeader: {
    marginTop: -200,
    fontSize: 40,
  },
  quoteContainer: {
    minHeight: 100,
    margin: 15,
    padding: 15,
    backgroundColor: 'rgba(255, 249, 163, 0.8)',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  quoteText: {
    fontWeight: '700',
    fontSize: 17,
  },
});
