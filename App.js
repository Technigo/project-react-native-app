import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { Feed } from './screens/Feed'
import { TodoList } from './screens/TodoList'
import { Home } from './screens/Home'

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="TodoList" component={TodoList} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
