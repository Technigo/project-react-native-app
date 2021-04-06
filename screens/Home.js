import React from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components/native';

// This is the main container for this screen
const HomeContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
export const Home = ({ navigation }) => {
  return (
    <HomeContainer>
      <Text>Home Screen</Text>
      {/* Here is an example of how to open/toggle the drawer via javascript */}
      <Button title="Open drawer " onPress={() => navigation.openDrawer()} />
      <Button title="Edit on Profile " onPress={() => navigation.navigate('Profile')} />
    </HomeContainer>
  );
};