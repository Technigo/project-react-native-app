import React, {useState, useEffect} from 'react'
import styled from 'styled-components/native'
import {View, Text, ActivityIndicator} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

export const Launch = () => {
  const [launches, setLaunches] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches/upcoming')
      .then((res) => res.json())
      .then((json) => setLaunches(json))
      .then(() => setIsLoading(false))
  }, [])

  return (
    <Container>
      {isLoading && <ActivityIndicator color={"#000"} />}

      {launches.map((launch) => (
        <Text key={launch.mission_name}>{launch.mission_name}</Text>
      ))}

    </Container>
  )
}