import React from "react";
import { View, Text } from "react-native";

const RandomDrink = ({ route }) => {
  return (
    <View>
      <Text>{route.params.title}</Text>
    </View>
  )
}

export default RandomDrink;