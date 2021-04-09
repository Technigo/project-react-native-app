import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Feed } from './screens/Feed'
import { Notifications } from './screens/Notifications'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Page } from './screens/Page'

const Drawer = createDrawerNavigator()


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
          name="Feed" 
          component={Feed}
        />
        <Drawer.Screen 
          name="Notifications" 
          component={Notifications} 
        />
        <Drawer.Screen 
          name="Page" 
          component={Page}
        />
      </Drawer.Navigator>
    </NavigationContainer>
   
   
  );
};

export default App
