import React, { useContext, useState } from 'react';
import { useIsFocused, useFocusEffect } from '@react-navigation/native';
import { useTheme, Button } from 'react-native-paper';

import Main from '../components/Styled/MainViews';
import { SettingsContext } from '../context/settingsContext';
import { MovieList } from '../components/MovieList';

export const Home = ({ navigation }) => {
  const { colors } = useTheme();
  const { user, session } = useContext(SettingsContext);
  const [userName, setUserName] = useState(user.name);

  const isFocused = useIsFocused();
  useFocusEffect(
    React.useCallback(() => {
      setUserName(user.name);
    }, [])
  );

  return (
    <Main verticalAlign={userName ? 'flex-start' : 'center'} color={colors.background}>
      <Main.Header>Welcome!</Main.Header>
      {isFocused && userName ? (
        <>
          <Main.Subheader>{userName}'s favorite movies</Main.Subheader>
          <MovieList type="likes" />
        </>
      ) : (
        <Main.Section>
          <Main.Caption>It appears you have no name</Main.Caption>
          <Button
            labelStyle={{ color: 'white' }}
            mode="contained"
            onPress={() => {
              navigation.navigate('Profile');
              session.route = 'Profile';
            }}>
            Edit Profile
          </Button>
        </Main.Section>
      )}
    </Main>
  );
};
