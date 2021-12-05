import React from 'react';
import { Text, Button, StyleSheet, View, navigate } from 'react-native';
import styled from 'styled-components/native';


const HomeContainer = styled.View`
  display: flex;
  margin-top: 100;
  align-items: center;
  height: 100%;
`;

const TextContainer = styled.View`
margin-top: 20;
`;

// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
export const Home = ({ navigation }) => {
  return (
    <HomeContainer>
      <TextContainer>
        <Text>Take a look at our Services</Text>
        <Button title="Go to Services" onPress={() => navigation.navigate('Services')} />
      </TextContainer>
      <TextContainer>
        <Text>Contact us</Text>  
        <Button title="Go to contact us" onPress={() => navigation.navigate('Contact')} />
      </TextContainer>
      <TextContainer>
        <Text>About us</Text>
        <Button title="Go to About us" onPress={() => navigation.navigate('About')} />
    </TextContainer>
    </HomeContainer>
  );
};
