import React from 'react'
import styled from 'styled-components/native'
import {View, Text, Button} from 'react-native'

export const DetailScreen = ({ route, navigation }) => {
  const { launch } = route.params

  // Display here in detail each information about each launch
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>{launch.mission_name}</Text>
      <Text>{launch.launch_year}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}