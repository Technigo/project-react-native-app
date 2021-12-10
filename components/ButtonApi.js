import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import * as Location from 'expo-location'
import styled from 'styled-components/native'

const ApiButton = styled.TouchableHighlight`
  background-color: grey;
  box-shadow: 0 10px 15px red;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`

export const ButtonApi = () => {
  const [pvgis, setPvgis] = useState()
  const [loading, setLoading] = useState(false)
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

  const fetchPvgis = () => {
    setLoading(true)
    let API_URL = 'https://re.jrc.ec.europa.eu/api/PVcalc?'
    fetch(`${API_URL}lat=45&lon=8&peakpower=1&loss=14&outputformat=json`)
      .then(res => res.json())
      .then(res => setPvgis(res))
      .finally(() => setLoading(false))
  }

  const onPress = () => {
    if (location) {
      fetchPvgis()
    }
  }

  if (pvgis) {
    text = `Energy: ${pvgis.outputs.totals.fixed.E_y} kWh/year`
  }

  if (loading) {
    return <ActivityIndicator />
  }
  let text = 'Waiting..'

  return (
    <View>
      <Text>Hej</Text>
      <ApiButton onPress={onPress}>
        <Text>Touch Here</Text>
      </ApiButton>
      <Text>
        {text}
        {location.lat}
      </Text>
    </View>
  )
}
