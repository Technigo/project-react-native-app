import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
// import LottieView from 'lottie-react-native';
// import { Platform } from 'react-native';
import { Accelerometer } from 'expo-sensors';

import Header from '../components/Header';
import Loading from '../components/Loading';
import RandomImage from '../components/RandomImage';
import DescriptionText from '../components/DescriptionText';
import TouchButton from '../components/TouchButton';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: wheat;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`

const GeneratorPage = ({ navigation }) => {
  const [image, setImage] = useState();
  const [loading, setLoading] = useState();
  const [accData, setAccData] = useState({});

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const generateNewImage = () => {
    setLoading(true);
    fetch('https://randomfox.ca/floof/')
      .then(res => res.json())
      .then(json => setImage(json.image))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    generateNewImage();
  }, [accData]);

  useEffect(() => {
    Accelerometer.setUpdateInterval(20);
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
      {loading && <Loading />}
      {!loading && <RandomImage image={image} />}
      <DescriptionText variable={'Tap the button or shake your phone for next image'} />
      <TouchButton text='Display a new fox!' onPress={generateNewImage} />
    </Container>
  );
};

export default GeneratorPage;
