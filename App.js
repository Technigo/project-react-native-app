import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './screens/Home';
import { Travel } from './screens/Travel';
/* import { Career } from './screens/Career'; */
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Travel" component={Travel} />
      {/*   <Drawer.Screen name="Career" component={Career} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
