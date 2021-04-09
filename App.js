import React from 'react';
import { useState } from 'react';
import { Vibration } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from "@use-expo/font";

import LandingScreen from './screens/LandingScreen';

const API_URL = "https://game-of-thrones-quotes.herokuapp.com/v1/random";

const App = () => {
  const [gotQuote, setGotQuote] = useState();
  const [isLoaded] = useFonts({
    'trajanus': require('./assets/fonts/trajanusBricks.ttf')
  });

  const handleFetch = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then((json) => {
        setGotQuote(json);
        Vibration.vibrate();
      });
  };

  if (!isLoaded) {
    return (
      <AppLoading />
    );
  } else {
    return (
      <LandingScreen
        gotQuote={gotQuote}
        handleFetch={handleFetch}
      >
      </LandingScreen>
    );
  }

};

export default App;
