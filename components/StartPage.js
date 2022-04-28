import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

import { Quote } from './Quote'
import { SensorComponent } from './SensorComponent'

const StartPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello, let's have some fun!</Text>
            {/* <LottieView source={require('../assets/lottieShake.json')} autoPlay loop /> */}
            <Image 
                style={styles.shake}
                source={require('../assets/shake.png')}/>
            <Text style={styles.title}>Shake me to to get an inspirational quote</Text>
            <SensorComponent navigation={navigation}/>
           
        </View>
    )
}


export default StartPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#DAB88B',
        margin: 20,
        padding: 20,
        textAlign: 'center'
    },
    shake: {
        width: 300,
        height: 300,
    }
    
})


