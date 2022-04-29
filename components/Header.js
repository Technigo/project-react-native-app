import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 70
	}, 
	title: {
		fontSize: 28,
		color: 'black',	
	}, 
    highlight: {
        color: '#ED254E',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 18,
        fontStyle: 'italic',
        color: 'black',
        marginTop: 10 
    }
})

const Header = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Are you <Text style={styles.highlight}>bored</Text> ?</Text>
            <Text style={styles.subtitle}>Click the button to end your boredness</Text>
        </View>
    )
}

export default Header