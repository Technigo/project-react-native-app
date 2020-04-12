import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Nasa } from './components/Nasa'
import { Tap } from './components/Tap'
import { Detail } from './components/Detail'
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const Stack = createStackNavigator()

const App = () => {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Nasa} />
        <Stack.Screen name='Detail' component={Detail} />
        <Stack.Screen name='Alien' component={Tap} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    color: '#222',
  },
  scrollView: {
    paddingHorizontal: 10,
    backgroundColor: '#222',
  },
  text: {
    fontSize: 24,
    paddingHorizontal: 10,
  },
});
