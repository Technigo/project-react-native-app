import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ShakeApi } from './components/ShakeApi';
import { Bored } from './components/Bored';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { View } from 'react-native';

import { Header } from './components/Header';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <View>
      <Header />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Feed'>
          <Drawer.Screen name='Shake' component={ShakeApi} />
          <Drawer.Screen name='Bored' component={Bored} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
