import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

const StartScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome!</Text>
            <Ionicons name="sunny-outline" size={50} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'papayawhip',
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 24,
		color: 'palevioletred'
	},
	image: {
		width: 66,
		height: 66
	}
})

export default StartScreen