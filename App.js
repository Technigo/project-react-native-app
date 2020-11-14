import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import { Platform } from 'react-native';

import Header from './components/Header';
import Loading from './components/Loading';
import RandomImage from './components/RandomImage';
import TouchButton from './components/TouchButton';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: papayawhip;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`

const App = () => {
  const [image, setImage] = useState();
  const [loading, setLoading] = useState();

  const generateNewImage = () => {
    setLoading(true);
    fetch('https://randomfox.ca/floof/')
      .then(res => res.json())
      .then(json => setImage(json.image))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(true);
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

export default App
