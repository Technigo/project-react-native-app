import React, {useState, useEffect} from 'react'
import styled from 'styled-components/native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { Forecast } from './screens/Forecast'
import { Homescreen } from './screens/homescreen'

const MainView = styled.View`
  flex: 1;
  background-color: #DAFFEF;
  justify-content: center;
  align-items: center;
`


const App = () => {

  const [forecast, setForecast] = useState([])

  // const [currentWeather, setCurrentWeather] = useState([])

  // useEffect(() => {
  //   fetch(dummydata)
  //     .then(res => res.json())
  //     .then(data => setCurrentWeather(data.main))
  //     .catch(err => console.err(err))
  // },[])

  const Stack = createStackNavigator();

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Forecast" component={Forecast} />
      </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
