import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native'


export const ProfileImage = () => {

    return (

        <View style={styles.container}>
            <Image 
                style={styles.img} 
                source={require('../assets/jes.png')} 
            />
            <Text>Jessi Nygren Walhed</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    img: {
      width: 64,
      height: 64,
      borderRadius: 50,
    },
    container: {
        justifyContent: 'bottom'
    }
  });
