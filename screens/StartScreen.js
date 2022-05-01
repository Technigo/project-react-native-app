import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import { Colors } from '../assets/colors'

import StyledButton from '../components/StyledButton'

const StartScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome!</Text>
            <Ionicons name="sunny-outline" size={50} color="black" />
            <StyledButton title="Play game" onPress={() => navigation.navigate('Game')} />
            <StyledButton title="Get dog image" onPress={() => navigation.navigate('Dogs')} />
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.backgroundColor,
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 34,
		color: Colors.textColor
	},
	image: {
		width: 66,
		height: 66
	}
})

export default StartScreen