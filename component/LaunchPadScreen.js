import React, {useState, useEffect} from 'react'
import styled from 'styled-components/native'
import {View, Text, ActivityIndicator, ScrollView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler'

const Container = styled.View`
  flex: 1;
  background-color: #FFF;
  justify-content: center;
  align-items: center;
`
const Title = styled.Text`
  font-size: 24px;
  color: red;
  padding: 10px;
  background-color: purple;
`

function LoadingScreen () {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator color={"#000"} />
    </View>  
  )
}

export const LaunchPadScreen = ({ navigation }) => {
  const [launches, setLaunches] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches/upcoming')
      .then((res) => res.json())
      .then((json) => setLaunches(json))
      .then(() => setIsLoading(false))
  }, [])

  return (
    <ScrollView>
      <Container>

        {/* Loading anitmation if fetch response takes time */}
        {isLoading && <LoadingScreen />}

        {launches.map((launch) => (
          // Creates a button that will navigate to Detail page and pass all data on that launch into Detail to be used.
          // Style this touchableOpacity or better element to be my display card for each launch
          <TouchableOpacity
          key={launch.mission_name}
          onPress={() => navigation.navigate('Detail', { launch })} // navigating to details screen with the clicked house info passed along
          >
            <Title key={launch.mission_name}>{launch.mission_name}</Title>
          </TouchableOpacity>

        ))}

      </Container>
    </ScrollView>
  )
}