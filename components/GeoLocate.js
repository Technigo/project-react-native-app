import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import * as Location from 'expo-location'

export const GeoLocate = () => {
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }, [])

  let text = 'Waiting..'
  if (errorMsg) {
    text = errorMsg
  } else if (location) {
    text = `lat: ${location.coords.latitude} lon:${location.coords.longitude}`
  }

  return (
    <View>
      <Text>{text}</Text>
    </View>
  )
}
