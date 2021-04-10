import React from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components/native';

// This is the main container for this screen
const HomeContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
export const Home = ({ navigation }) => {
  return (
    <HomeContainer>
      <Text>Hi there! You look a bit lost! Lookin´ for some advice in life? Or perhaps just want someone else to make that vital desicion for you? Or maybe just for Chuck Norris to cheer you up by simply being...Chuck Norris?</Text>
      {/* Here is an example of how to open/toggle the drawer via javascript */}
      <Button title="Open Self Help Menu" onPress={() => navigation.openDrawer()} />
      {/* <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} /> */}
    </HomeContainer>
  );
};
