import React, { useState } from "react";
import { View, Text, Button } from "react-native"
import LottieView from 'lottie-react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';


const Facts = () => {
    const [color, setColor] = useState({color: 'pink',});
  
  // Add random background color with the press of a button
    const randomHex =() =>{
      console.log("Func Called");
      let letters = "0123456789ABCDEF";
      let random = "#";
      for (let i = 0; i < 6; i++) {
          random += letters[Math.floor(Math.random() * 16)];
      }
      setColor({
        color: random,
      });
      console.log("New color: "+color.color);
    }

    let [fontsLoaded] = useFonts({
      Inter_900Black,
    });

    if (!fontsLoaded) {
      return <AppLoading />;
    }

    return(
        <View style={[styles.container, {backgroundColor: color.color }]}>
           
          <LottieView
          source={require('../assets/animation.json')}
          autoPlay/>

          <Text style={{ textAlign:"center" }}>
            Fox families live in underground dens. 
              These underground dens also provide shelter from predators, such as coyotes, wolves, and bears. 
              Humans, however, pose the largest threat to foxes.</Text>
            <Text style={{ textAlign:"center" }}>Foxes stink. They have a sickly, musty scent that comes from the glands at the base of their tails. 
              If you start smelling this around your home or in your crawl space, it may be an indicator that foxes are near.</Text>
            <Text style={{ textAlign:"center" }}>When you are reading this you might think: "Foxes have alot of similarities with developers.</Text>

          <Button title="Change background" onPress={randomHex}/>

        
        </View>
    )
}

var styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export default Facts