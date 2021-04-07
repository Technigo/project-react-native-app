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
  Divider,
  Surface,
  Title,
} from 'react-native-paper';
import styled from 'styled-components/native';
import { MainViewContainer, MainHeader } from '../components/Styled/MainViews';


// This is the main container for this screen

const ItemContainer = styled(Surface)`
  flex-flow: row;
  align-items: center;
  padding: 20px;
  elevation: 5;
`;

const ItemData = styled(Subheading)`
  margin: 0 20px;
  color: ${props => props.color ? props.color : 'black'};
`;

export const Profile = () => {
  const settings = useContext(SettingsContext);
  return (
    <MainViewContainer verticalAlign="flex-start">
      <MainHeader>My Profile</MainHeader>
      <ItemContainer>
        <Title>Name:</Title>
        {settings.user.name ? (
          <ItemData>{settings.user.name}</ItemData>
          
        ) : (
          <ItemData color={settings.theme.colors.warning}>no name</ItemData>
        )}
      </ItemContainer>
    </MainViewContainer>
  );
};