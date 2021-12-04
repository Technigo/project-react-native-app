import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import { MovieListNavigationWrapper } from './components/MovieListNavigationWrapper';

const Tab = createBottomTabNavigator();


//here is the tab navigator (the one showed in the bottom with the icons)
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        backBehavior="history"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Popular') {
              return <Icon name="fire" size={20} color="white" />
            } else if (route.name === 'Christmas') {
              return <Icon name="tree" size={20} color="white" />
            } else if (route.name === 'Top Rated') {
              return <Icon name="thumbs-up" size={20} color="white" />
            }
          },
          headerShown: false,
          tabBarActiveTintColor: 'rgb(243,206,19);',
          tabBarStyle: {
            paddingTop: 0,
            backgroundColor: 'rgba(34,36,40,1)',
            position: 'absolute',
            borderTopWidth: 0,
          },
        })}
      >

        <Tab.Screen name="Popular" component={MovieListNavigationWrapper} initialParams={{ listId: 'default' }} /> 
        <Tab.Screen name="Christmas" component={MovieListNavigationWrapper} initialParams={{ listId: 'christmas' }} />
        <Tab.Screen name="Top Rated" component={MovieListNavigationWrapper} initialParams={{ listId: 'toprated' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
