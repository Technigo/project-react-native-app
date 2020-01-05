import React, { useState, useEffect } from 'react'
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const App = () => {
  const [location, setLocation] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      setErrorMessage('Permission to access location was denied')
    }

    const currentLocation = await Location.getCurrentPositionAsync({})
    setLocation(currentLocation)
  }

  useEffect(() => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      setErrorMessage('Oops, this will not work on Sketch in an Android emulator. Try it on your device!')
    } else {
      getLocationAsync()
    }
  })

  let text = 'Waiting..'
  if (errorMessage) {
    text = errorMessage;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View>
      <Text>{text}</Text>
    </View>
  )
}

export default App
