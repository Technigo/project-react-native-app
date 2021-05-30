import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { Feed } from './screens/Feed'
import { TodoList } from './screens/TodoList'

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Your Todos" component={TodoList} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
