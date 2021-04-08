import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Feed } from './screens/Feed';
import { ChuckNorris } from './screens/ChuckNorris';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DadJoke } from './screens/DadJoke'
import { RandomAdvice } from './screens/RandomAdvice'


const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HOME" component={Feed} />
        <Drawer.Screen name="CHUCK NORRIS" component={ChuckNorris} />
        <Drawer.Screen name="DAD JOKES" component={DadJoke} />
        <Drawer.Screen name="RANDOM ADVICES" component={RandomAdvice} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
