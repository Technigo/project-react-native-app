import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const Joke = ({navigation}) => {

    const [joke, setJoke] = useState({})

    useEffect (() => {
        fetch('https://icanhazdadjoke.com/slack')
        .then(res => res.json())
        .then(data => setJoke(data.attachments[0]))
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{joke.fallback}</Text>
            <Image 
                style={styles.emoji}
                source={require('../assets/laughing.png')}/>
            <TouchableOpacity onPress={() => navigation.navigate('Start')} style={styles.btn}>
                <Text style={styles.title3}>Restart</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Joke

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ae936f',
        padding: 5,
        margin: 10,
        textAlign: 'center'
    },
    btn: {
        padding: 20,
        margin: 50,
        width: 150,
        alignSelf: "center",
        textAlign: 'center',
        backgroundColor: '#E6BA95',
        borderRadius: 10
    },
    title3: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6d5c45',
        padding: 5,
        textAlign: 'center'
    },
    emoji: {
        width: 300,
        height: 200
    }
})