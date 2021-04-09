import React, { useState, useContext } from 'react';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { useTheme } from 'react-native-paper';

import { SettingsContext } from '../context/settingsContext';
import DrawerScrollView from '../components/Styled/Drawer';

export const DrawerContent = ({ navigation, ...props }) => {
  const isDrawerOpen = useIsDrawerOpen();
  const { session } = useContext(SettingsContext);
  const [active, setActive] = useState(session.route);
  const { colors, dark } = useTheme();

  React.useEffect(() => {
    if (isDrawerOpen) {
      setActive(session.route);
    }
  }, [isDrawerOpen]);

  const onPressNavigation = (route) => {
    session.route = route;
    navigation.navigate(route);
  };

  return (
    <DrawerScrollView {...props} background={colors.background}>
      <DrawerScrollView.TitleSection color={dark ? colors.surface : colors.primary}>
        <DrawerScrollView.Wrapper title>
          <DrawerScrollView.Avatar
            color="white"
            backgroundColor={dark ? colors.primary : colors.secondary}
            icon="movie"
          />
          <DrawerScrollView.Title>Filmoona</DrawerScrollView.Title>
        </DrawerScrollView.Wrapper>
      </DrawerScrollView.TitleSection>
      <DrawerScrollView.Wrapper>
        <DrawerScrollView.Item
          icon="home"
          label="Home"
          active={active === 'Home'}
          onPress={() => onPressNavigation('Home')}
        />
        <DrawerScrollView.Item
          icon="movie"
          label="Movies"
          active={active === 'Movies'}
          onPress={() => onPressNavigation('Movies')}
        />
        <DrawerScrollView.Item
          icon="account"
          label="Profile"
          active={active === 'Profile'}
          onPress={() => onPressNavigation('Profile')}
        />
      </DrawerScrollView.Wrapper>
    </DrawerScrollView>
  );
};
