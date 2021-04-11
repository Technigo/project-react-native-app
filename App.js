import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Popular } from './screens/Popular'
import { Homescreen } from './screens/Homescreen'
import { TopRated } from './screens/TopRated'
import { Upcoming } from './screens/Upcoming'
import { Detail } from './screens/Detail'

const App = () => {

  const Stack = createStackNavigator();

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homescreen} 
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
        }}
        />
        <Stack.Screen name="Popular" component={Popular}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
        }}
        />
        <Stack.Screen name="TopRated" component={TopRated} 
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
        }}
        />
        <Stack.Screen name="Upcoming" component={Upcoming} 
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
        }}
        />
        <Stack.Screen name="Detail" component={Detail}
        getId={({ params }) => params.movieId}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
        }}
        />
      </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
