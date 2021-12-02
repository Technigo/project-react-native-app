import React from 'react'
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

import styled from 'styled-components/native'
import * as Location from 'expo-location'

const Button = styled.TouchableOpacity`
  width: 50%;
  background-color: green;
`

const LocationStatus = () => {
  const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState(null)

  useEffect(() => {
    LocationStatus()
  }, [])

  const getLocation = () => {
    let { status } = Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied')
      return
    }
    let location = Location.getCurrentPositionAsync({})
    setLocation(location)
  }

  // const generateLocation = () => {
  // 	setLoading(true);
  // 	fetch('http://api.quotable.io/random')
  // 		.then((res) => res.json())
  // 		.then((data) => setQuote(data))
  // 		.finally(() => setLoading(false));
  // };

  if (loading) {
    return <ActivityIndicator />
  }

  return (
    <View>
      <Text>Generate google map</Text>
      <Button onPress={getLocation}>
        <Text>Click</Text>
      </Button>
    </View>
  )
}

export default Location
