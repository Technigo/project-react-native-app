import React from "react";
import { Text, View, StyleSheet } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';


const Header = () => {

    let [fontsLoaded] = useFonts({
        Inter_900Black,
      });

      if (!fontsLoaded) {
        return <AppLoading />;
      }
    return(
        <View style={styles.container}>
            <Text style={{ fontFamily: 'Inter_900Black', fontSize: 24}}>Are you feeling blue?</Text>
            <Text style={{ fontFamily: 'Inter_900Black', fontSize: 24}}>This will cheer you up!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
})


export default Header