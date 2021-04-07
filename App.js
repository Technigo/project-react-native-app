import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler'
import HomeScreen from './components/HomeScreen';
import AffirmationMessage from './components/AffirmationMessage'

const Stack = createStackNavigator();

const App = () => {
  
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AffirmationMessage" component={AffirmationMessage} />
    </Stack.Navigator>
  </NavigationContainer>
)

}
export default App;


