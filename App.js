import React from 'react'
import { SafeAreaView } from 'react-native'
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen'
import MovieList from './screens/MovieList'
import MovieDetails from './screens/MovieDetails'

const Stack = createStackNavigator()

const App = () => {

  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="MovieList" component={MovieList} />
          <Stack.Screen name="MovieDetails" component={MovieDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App
