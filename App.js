import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Home } from './screens/Home';
import { RandomQuote } from './screens/RandomQuote';
import { MagicBall } from './screens/MagicBall';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Get Random Quote' component={RandomQuote} />
        <Drawer.Screen name='Try the Magic Ball' component={MagicBall} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
