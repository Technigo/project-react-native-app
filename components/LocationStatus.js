import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  Linking,
  StyleSheet,
} from 'react-native'

import styled from 'styled-components/native'
import * as Location from 'expo-location'

const Buttons = styled.TouchableOpacity`
  width: 50%;
  background-color: green;
  justify-content: center;
`

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'limegreen',
    padding: 30,
    margin: 10,
  },
  text: {
    margin: 10,
    textTransform: 'uppercase',
    padding: 30,
    textAlign: 'center',
    fontSize: 25,
    textShadowColor: 'green',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
  },
})

const LocationStatus = () => {
  const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState({})

  //  Async await approach
  const getLocation = async () => {
    const data = await Location.requestForegroundPermissionsAsync()
    if (data.status !== 'granted') {
      console.log('Permission to access location was denied')
    } else {
      const locationData = await Location.getCurrentPositionAsync({})
      Linking.openURL(
        `http://www.google.com/maps/place/${locationData.coords.latitude},${locationData.coords.longitude}`
      )
    }
  }

  if (loading) {
    return <ActivityIndicator />
  }

  return (
    <View>
      <Text style={styles.text}>
        Here you can get your exact location! Click the button below to open up
        Google maps
      </Text>
      <Button
        style={styles.button}
        title="Click to get location"
        onPress={getLocation}
      />
      <Buttons onPress={getLocation}>
        {' '}
        <Text style={styles.text}>Press Here</Text>
      </Buttons>
      <TouchableOpacity style={styles.button} onPress={getLocation}>
        <Text>funkar det nu?</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LocationStatus
