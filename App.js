import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Feed } from './screens/Feed';
import { ChuckNorris } from './screens/ChuckNorris';
import { DadJoke } from './screens/DadJokes'
import { RandomAdvice } from './screens/RandomAdvice'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HOME" component={Feed} />
        <Drawer.Screen name="CHUCK NORRIS" component={ChuckNorris} />
        <Drawer.Screen name="DAD JOKES" component={DadJoke} />
        <Drawer.Screen name="RANDOM ADVICE" component={RandomAdvice} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
