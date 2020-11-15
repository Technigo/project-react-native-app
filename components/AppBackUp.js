import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import { Platform } from 'react-native';
import { Accelerometer } from 'expo-sensors';

import Header from './components/Header';
import Loading from './components/Loading';
import RandomImage from './components/RandomImage';
import TouchButton from './components/TouchButton';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: wheat;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`

const GeneratorPage = () => {
  const [image, setImage] = useState();
  const [loading, setLoading] = useState();
  const [accData, setAccData] = useState({});

  const generateNewImage = () => {
    setLoading(true);
    fetch('https://randomfox.ca/floof/')
      .then(res => res.json())
      .then(json => setImage(json.image))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  };

  // useEffect(() => {
  //   setLoading(true);
  // }, []);

  useEffect(() => {
    generateNewImage();
  }, [accData]);

  useEffect(() => {
    Accelerometer.setUpdateInterval(100);
    const listener = Accelerometer.addListener((data) => {
      const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
      if (totalForce > 3.5) {
        setAccData(data)
      }
    });
    return () => {
      listener && listener.remove()
    };
  }, []);

  return (
    <Container>
      <Header />
      {Platform.OS !== 'web' && loading && <LottieView
        style={{ width: 250, height: 250 }}
        autoPlay
        loop
        source={require('./assets/24969-sleepy-fox.json')}
      />
      }
      {Platform.OS === 'web' && loading && <Loading />}
      {!loading && <RandomImage image={image} />}
      <TouchButton generateNewImage={generateNewImage} />
    </Container>
  );
};

export default GeneratorPage;
