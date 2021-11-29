import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { userPage } from '../reducers/start';

import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import styled from 'styled-components/native';

import { ButtonApi } from './ButtonApi';

const Feed = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title='Open drawer' onPress={() => navigation.openDrawer()} />
      <Button title='Toggle drawer' onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};

const Notifications = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
};

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label='Close drawer'
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label='Toggle drawer'
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name='Feed' component={Feed} />
      <Drawer.Screen name='Notifications' component={Notifications} />
    </Drawer.Navigator>
  );
};

export const StartPage = () => {
  const [user, setUser] = useState('');

  // const dispatch = useDispatch();

  const onNameSet = () => {
    setUser(user);
    // dispatch(userPage.actions.setUser(user));
    // dispatch(generateActivity(user));
  };

  //   const onUsername = event => {
  //     event.target.value;
  //     setUser(user);
  //   };

  const APIButton = styled.TouchableHighlight`
    border-radius: 10%;

    cursor: pointer;
    text-transform: uppercase;
    background: #161616;
    padding: 5px;
    width: 100%;
    text-align: center;
  `;

  const ApiButtonText = styled.Text`
    color: yellow;
  `;

  return (
    <>
      <View>
        <SafeAreaView>
          <TextInput
            onChangeText={setUser}
            value={user}
            placeholder='input text here'
          />
        </SafeAreaView>

        <APIButton>
          <ApiButtonText onPress={console.log('PRESSED', onNameSet)}>
            click me
          </ApiButtonText>
        </APIButton>
        <Text>{user}</Text>
      </View>
    </>
  );

  //   return <ButtonApi />;
};
