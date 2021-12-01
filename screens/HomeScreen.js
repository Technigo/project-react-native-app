import React from 'react'
import { Button, Text,  View, StyleSheet, ImageBackground  } from 'react-native'
import { CardItems } from './CardItems'



export const HomeScreen = () => {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
            <ImageBackground source={require('../assets/backgroundimage.png')} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Welcome!</Text>
                <CardItems />
            </ImageBackground>
        </View>
    </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      },
      backgroundContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      },
      image: {
        flex: 1,
        justifyContent: 'center',
      },
      text: {
        color: 'white',
        fontSize: 32,
        lineHeight: 38,
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft: 16,
      },
  });
