import React from 'react';
import { ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './screens/HomeScreen';
import { About } from './screens/AboutScreen';
import { Contact } from './screens/ContactScreen';
import { Services } from './screens/ServiceScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
		<ImageBackground></ImageBackground>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
		    <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="Services" component={Services} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;