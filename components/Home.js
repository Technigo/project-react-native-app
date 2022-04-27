import React from 'react'
import { View, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
    <Button
      title="Go to Drinks List"
      onPress={() =>
        navigation.navigate('Drinks List', { title: "Alcoholic and Non Alcoholic" })
      }
    />
     <Button
      title="Go to Shake for a Random Drink"
      onPress={() =>
        navigation.navigate('Random Drink', { title: "Shake for a Random Drink" })
      }
    />
    </View>
  );
};

export default Home