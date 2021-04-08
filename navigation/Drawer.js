import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { SettingsContext } from '../context/settingsContext';
import styled from 'styled-components/native';
import { DrawerContentScrollView, useIsDrawerOpen  } from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

const DrawerTitle = styled(Title)`
  margin-top: 20px;
  font-weight: bold;
  margin-left: 20px;
  color: white;
`;

const TitleSection = styled(Drawer.Section)`
  margin-bottom: 20px;
  background-color: ${(props) => props.color};
`;
const AvatarIcon = styled(Avatar.Icon)`
  background-color: ${(props) => props.backgroundColor};
`;
const Wrapper = styled.View`
  flex-flow: row wrap;
  ${(props) => props.title && 'padding: 20px;'}
`;
const DrawerItem = styled(Drawer.Item)`
  width: 100%;
`;

export const DrawerContent = ({ navigation, ...props }) => {
  const isDrawerOpen = useIsDrawerOpen();
  const { session } = useContext(SettingsContext);
  const [active, setActive] = useState(session.route);
  const { colors } = useTheme();
  
  React.useEffect(() => {
    if(isDrawerOpen) {setActive(session.route)}
  }, [isDrawerOpen])

  const onPressNavigation = (route) => {
    session.route = route;
    navigation.navigate(route);
  };

  return (
    <DrawerContentScrollView {...props}>
      <TitleSection color={colors.primary}>
        <Wrapper title>
          <AvatarIcon color="white" backgroundColor={colors.secondary} icon="gamepad" />
          <DrawerTitle>Apptitle</DrawerTitle>
        </Wrapper>
      </TitleSection>
      <Wrapper>
        <DrawerItem
          icon="home"
          label="Home"
          active={active === 'Home'}
          onPress={() => onPressNavigation('Home')}
        />
        <DrawerItem
          icon="gamepad"
          label="Movies"
          active={active === 'Movies'}
          onPress={() => onPressNavigation('Movies')}
        />
        <DrawerItem
          icon="account"
          label="Profile"
          active={active === 'Profile'}
          onPress={() => onPressNavigation('Profile')}
        />
      </Wrapper>
    </DrawerContentScrollView>
  );
};
