import React from 'react';
import styled from 'styled-components/native';
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

import { SensorComponent } from './components/SensorComponent';
import { SubTitleTemp } from './components/Subtitle';


const Container = styled.View`
  flex: 1;
  background: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
  margin-bottom: 100px;
`;







const App = () => {
  return (
    
    <Container>
        
        <Title>Great Oracle has spoken: </Title>
        <SensorComponent></SensorComponent>
      
        <SubTitleTemp></SubTitleTemp>
    

      
      
    </Container>
  );
};

export default App;
