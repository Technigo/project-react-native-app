import React from 'react'
import styled from 'styled-components/native'
import Moment from 'react-moment';
import {View, Text, Button} from 'react-native'

export const DetailScreen = ({ route, navigation }) => {
  const { launch } = route.params

  // Display here in detail each information about each launch
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>Misison Name: {launch.mission_name}</Text>
      {/* <Text>Launch date: {launch.launch_date_unix}</Text> */}
      <Text>Launch Date: 
        <Moment unix format="YYYY/MM/DD" element={Text}>{launch.launch_date_unix}</Moment>
      </Text>
      <Text>Rocket Name: {launch.rocket.rocket_name}</Text>
      <Text>Type: {launch.rocket.second_stage.payloads[0].payload_type}</Text>

      <Button
        title="Go to Launchpad"
        onPress={() => navigation.navigate('Launchpad')}
      />
    </View>
  );
}