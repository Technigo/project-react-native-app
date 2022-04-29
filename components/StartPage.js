import React from "react";
import { Text, View, Button } from "react-native";
import LottieView from 'lottie-react-native';

import Header from "./Header";

const StartPage = ({ navigation }) => {
    


    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Header />
        <LottieView
          source={require('../assets/sadanimation.json')}
          autoPlay/>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Button
        onPress={() => navigation.navigate('Foxes')}
        title="Go to Fox randomizer"
      />
      </View>
    </View>
    )
}

export default StartPage