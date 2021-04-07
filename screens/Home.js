import React, { useContext, useState, useCallback } from 'react';
import { SettingsContext } from '../context/settingsContext';
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
import {
  MainViewContainer,
  MainHeader,
  MainSubheader,
} from '../components/Styled/MainViews';
import { useFocusEffect } from '@react-navigation/native';

const ConditionalSection = styled.View`
  align-items: center;
`;
const StyledCaption = styled(Caption)`
  margin-bottom: 10px;
`;

// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
export const Home = ({ navigation }) => {
  const {user} = useContext(SettingsContext);
  const [userName, setUserName] = useState(user.name)
  
  useFocusEffect(
    useCallback(() => {
      setUserName(user.name);
    }, [])
  );
  
  return (
    <MainViewContainer verticalAlign="center">
      <MainHeader>Welcome!</MainHeader>
      {userName ? (
        <MainSubheader>{userName}</MainSubheader>
      ) : (
        <ConditionalSection>
          <StyledCaption>It appears you have no name</StyledCaption>
          <Button
            labelStyle={{ color: 'white' }}
            mode="contained"
            onPress={() => navigation.navigate('Profile')}>
            Edit Profile
          </Button>
        </ConditionalSection>
      )}
      <Button onPress={() => navigation.openDrawer()}>open drawer</Button>
    </MainViewContainer>
  );
};
