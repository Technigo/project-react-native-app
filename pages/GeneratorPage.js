import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Accelerometer } from 'expo-sensors';

import Header from '../components/Header';
import Loading from '../components/Loading';
import RandomImage from '../components/RandomImage';
import DescriptionText from '../components/DescriptionText';
import TouchButton from '../components/TouchButton';
import BackLink from '../components/BackLink';

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

  const generateNewImage = () => {
    setLoading(true);
    fetch('https://randomfox.ca/floof/')
      .then(res => res.json())
      .then(json => setImage(json.image))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  };

  const navigateToStart = () => {
    navigation.navigate('Start');
  };

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

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
      <DescriptionText variable={'Shake your phone or tap the button for next picture'} />
      <TouchButton text='Next picture!' onPress={generateNewImage} />
      <BackLink text='Swipe or click here to go back to the start page' onPress={navigateToStart} />
    </Container>
  );
};

export default GeneratorPage;
