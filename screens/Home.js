import React from 'react';
import { Text } from 'react-native';
import {
  Headline,
  Caption,
  Paragraph,
  useTheme,
  Button,
  Subheading,
} from 'react-native-paper';
import styled from 'styled-components/native';

// This is the main container for this screen
const HomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const ConditionalSection = styled.View`
 margin: 10px;
`;

// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
export const Home = ({ navigation }) => {
  return (
    <HomeContainer>
      <Headline>Welcome!</Headline>
      <Subheading>Isabella</Subheading>
      <ConditionalSection>
        <Caption>It appears you are not logged in</Caption>
        <Button
          labelStyle={{ color: 'white' }}
          mode="contained"
          onPress={() => navigation.navigate('Profile')}>
          Edit Profile
        </Button>
      </ConditionalSection>
      <Button onPress={() => navigation.openDrawer()}>open drawer</Button>
    </HomeContainer>
  );
};
