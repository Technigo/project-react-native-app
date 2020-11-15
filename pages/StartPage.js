import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import Header from '../components/Header';
import StartAnimation from '../components/StartAnimation';
import DescriptionText from '../components/DescriptionText';
import TouchButton from '../components/TouchButton';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: wheat;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`

const StartPage = ({ navigation }) => {

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const navigateToGenerator = () => {
    navigation.navigate('Generator');
  };

  return (
    <Container>
      <Header />
      <DescriptionText variable={'No fake news, only cute foxes!'} />
      <StartAnimation />
      <DescriptionText variable={'Tap the button to start'} />
      <TouchButton text={'Start'} onPress={navigateToGenerator} />
    </Container>
  );
};

export default StartPage;