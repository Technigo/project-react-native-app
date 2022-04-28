import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { Answer } from './Answer'
import { SensorComponent } from './SensorComponent'

const StartPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ask me something!</Text>
            
            <Text style={styles.title}>Shake me to to get an answer</Text>
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
        color: '#833471',
        margin: 20,
        padding: 20,
        textAlign: 'center'
    },
    
})


