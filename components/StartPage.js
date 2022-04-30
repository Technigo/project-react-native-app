import React from "react";
import { View, Button, StyleSheet } from "react-native";
import LottieView from 'lottie-react-native';

import Header from "./Header";

const StartPage = ({ navigation }) => {
    


    return(
    <View style={styles.container}>

        <Header />

        <LottieView
          source={require('../assets/sadanimation.json')}
          autoPlay/>

      <View style={styles.button}>
       <Button
        onPress={() => navigation.navigate('Foxes')}
        title="Go to Fox randomizer"
      />
      </View>

    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#caf0f8',
  }, 
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default StartPage