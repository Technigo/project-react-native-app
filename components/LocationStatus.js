import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  Linking,
} from 'react-native'

import styled from 'styled-components/native'
import * as Location from 'expo-location'

const Buttons = styled.TouchableOpacity`
  width: 50%;
  background-color: green;
  justify-content: center;
`

const LocationStatus = () => {
  const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState({})

  // useEffect(() => {
  //   getLocation()
  // }, [])

  //   const getLocation = () => {
  //     let { status } = Location.requestForegroundPermissionsAsync()
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied')
  //       return
  //     }
  //     let location = Location.getCurrentPositionAsync({})
  //     setLocation(location)
  //   }

  //   v2 - Async await
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
      <Text>Generate google map</Text>
      <Button title="Click to get location" onPress={getLocation} />
    </View>
  )
}

export default LocationStatus
