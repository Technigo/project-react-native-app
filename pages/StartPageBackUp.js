import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import Header from '../components/Header';
import Loading from '../components/Loading';
import DescriptionText from '../components/DescriptionText';
import TouchButton from '../components/TouchButton';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: wheat;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`

const StartPage = () => {
  return (
    <Container>
      <Header />
      <Loading />
      <DescriptionText />
      <TouchButton />
    </Container>
  );
};