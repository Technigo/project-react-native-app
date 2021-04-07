import React from 'react';
import styled from 'styled-components/native';

import SensorComponent from './components/SensorComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import background from './assets/background.jpg';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BackgroundImage = styled.ImageBackground`
  height: 100%
  width: 100%;
  flex:1;
`;

const App = () => {
  return (
    <>
    <BackgroundImage
       source={background}>
      <Header></Header>
        <Container>
          <SensorComponent></SensorComponent>
        </Container>
      <Footer></Footer>
    </BackgroundImage>
    </>
  );
};

export default App;
