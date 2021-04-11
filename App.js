import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MainPage } from './screens/MainPage'
import { ModelS } from './screens/ModelS';
import { ModelX } from './screens/ModelX';
import { ModelY } from './screens/ModelY';
import { Model3 } from './screens/Model3';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main Page" component={MainPage} />
        <Drawer.Screen name="Model S" component={ModelS} />
        <Drawer.Screen name="Model X" component={ModelX} />
        <Drawer.Screen name="Model Y" component={ModelY} />
        <Drawer.Screen name="Model 3" component={Model3} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
