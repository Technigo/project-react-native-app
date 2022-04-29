import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 80
	}, 
	title: {
		fontSize: 24,
		color: 'black',	
	}, 
    subtitle: {
        fontSize: 18,
        fontStyle: 'italic',
        color: 'black' 
    }
})


const Header = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Are you bored?</Text>
            <Text style={styles.subtitle}>Click the button to end your boredness</Text>
        </View>
    )
}

export default Header