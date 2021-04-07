import React, { useContext } from 'react';
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

const ConditionalSection = styled.View`
  align-items: center;
`;
const StyledCaption = styled(Caption)`
  margin-bottom: 10px;
`;

// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
export const Home = ({ navigation }) => {
  const settings = useContext(SettingsContext);
  return (
    <MainViewContainer verticalAlign="center">
      <MainHeader>Welcome!</MainHeader>
      {settings.user.name ? (
        <MainSubheader>{settings.user.name}</MainSubheader>
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
