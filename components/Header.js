import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Header (props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
     )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        background: 'white',
    },
    title: {
        fontSize: 30,
    }
})