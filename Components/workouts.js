import React from 'react'
import styled from 'styled-components/native'
import { Text, View, Button, Alert } from 'react-native';

export const Workouts = () => {

  const WorkoutArray = [
    {
      workout: "10 squats",
      category: "Strength",
      color: "blue",
      textColor: "black",
    },
    {
      workout: "Run 5km",
      category: "fitness",
      color: "black",
      textColor: "white",
    },
    {
      workout: "Yoga",
      category: "flexibility",
      color: "pink",
      textColor: "red",
    },
  ]
  return (
    <View>

      {WorkoutArray.map(work => (
        <Text key={work.workout}> {work.workout} </Text>
      ))}
      <Button title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}></Button>
    </View>

  )
}