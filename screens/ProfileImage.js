import React from "react";
import { View, Image, StyleSheet } from 'react-native'


export const ProfileImage = () => {

    return (

        <View style={styles.container}>
            <Image 
                style={styles.img} 
                source={require('../assets/jes.png')} 
            />
        </View>

    )
}

const styles = StyleSheet.create({
    img: {
      width: 150,
      height: 150,
      borderRadius: 75,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    }
  });
