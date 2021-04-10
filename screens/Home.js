import React from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components/native';

// This is the main container for this screen
const FeedContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
const Home = () => {
  return (
    <FeedContainer>
      <Text>Welcome on my non-sense App!</Text>
      <Text>Are you wondering what the hack you are doing here? Well I'm wondering that too.</Text>
      <Text>But since you're here you might as well check out some React Native Stuff I did. I mean, look at that burger menu! 🤤</Text>
      {/* Here is an example of how to open/toggle the drawer via javascript */}
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </FeedContainer>
  );
};

export default Home
