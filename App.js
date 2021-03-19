import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Feed } from './screens/Feed';
import { Notifications } from './screens/Notifications';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Notifications" component={Notifications} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
