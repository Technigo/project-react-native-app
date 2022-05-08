import React from 'react'
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';

import { SensorComponent } from './SensorComponent'

const image = { uri: "https://i.postimg.cc/WbknmQ4T/Untitled-Artwork.png" };


const StartPage = ({navigation}) => {
    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>Hello, let's have some fun!</Text>
                <Image 
                    style={styles.shake}
                    source={require('../assets/shake.png')}/>
                <Text style={styles.title}>Shake me to to get an inspirational quote</Text>
                <SensorComponent navigation={navigation}/>
            </View>
        </ImageBackground>
    )
}

export default StartPage

/////////////           STYLING        /////////////////
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3d3d3d',
        margin: 20,
        padding: 20,
        textAlign: 'center'
    },
    shake: {
        width: 200,
        height: 200,
    },
    background: {
        flex: 1,
    }
    
})


