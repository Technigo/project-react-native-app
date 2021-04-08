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
import { useIsFocused, useFocusEffect } from '@react-navigation/native';
import { MovieList } from '../components/MovieList';
import { URL_LISTGET } from '../utils/apiConfig';

const ConditionalSection = styled.View`
  align-items: center;
`;
const StyledCaption = styled(Caption)`
  margin-bottom: 10px;
`;

// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
export const Home = ({ navigation }) => {
  const { user, session } = useContext(SettingsContext);
  const [userName, setUserName] = useState(user.name);

  const isFocused = useIsFocused();
  useFocusEffect(
    React.useCallback(() => {
      setUserName(user.name);
    }, [])
  );

  return (
    <MainViewContainer verticalAlign={userName ? 'flex-start' : 'center'}>
      <MainHeader>Welcome!</MainHeader>
      {isFocused && userName ? (
        <>
          <MainSubheader>{userName}'s favorite movies</MainSubheader>
          <MovieList type="likes" />
        </>
      ) : (
        <ConditionalSection>
          <StyledCaption>It appears you have no name</StyledCaption>
          <Button
            labelStyle={{ color: 'white' }}
            mode="contained"
            onPress={() => {
              navigation.navigate('Profile');
              session.route = 'Profile';
            }}>
            Edit Profile
          </Button>
        </ConditionalSection>
      )}
    </MainViewContainer>
  );
};
