import React, {useState, useEffect} from 'react'
import styled from 'styled-components/native'
import {View, Text, ActivityIndicator, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LaunchPadScreen} from './component/LaunchPadScreen'
import {DetailScreen} from './component/DetailScreen'

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`
const Stack = createStackNavigator();

// Homescreen, uses navigation as a param to navigate when button is pressed, links to other Stack.Screen Names
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Launch pad"
        onPress={() => navigation.navigate('Launching pad')}
      />
    </View>
  );
}

function LoadingScreen () {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator color={"#000"} />
    </View>  
  )
}

const App = () => {
  const [launches, setLaunches] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Denna fetch och rad 51 behövs nog inte. 
  // useEffect(() => {
  //   fetch('https://api.spacexdata.com/v3/launches/upcoming')
  //     .then((res) => res.json())
  //     .then((json) => setLaunches(json))
  //     .then(() => setIsLoading(false))
  // }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* {isLoading && <Stack.Screen name="Loading" component={LoadingScreen} />} */}
        <Stack.Screen name="Launching pad" component={LaunchPadScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
