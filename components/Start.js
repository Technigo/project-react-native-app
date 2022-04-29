import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import LottieView from 'lottie-react-native'

import animation from '../assets/animation.json'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 70
    },
    title: {
        fontSize: 30,
        color: 'black',
        marginTop: 10,
        padding: 70
    },
    highlight: {
        color: '#ED254E',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 18,
        fontStyle: 'italic',
        color: 'black',
        marginTop: 70
    },
})

const Start = () => {

    return (
        <View style={styles.container}>
            <LottieView source={animation} autoPlay />
            <Text style={styles.title}>Are you <Text style={styles.highlight}>bored</Text> ?</Text>
            <Text style={styles.subtitle}>Click the button and let's do something</Text>
        </View>
    )
}

export default Start