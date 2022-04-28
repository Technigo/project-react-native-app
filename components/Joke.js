import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Joke = ({navigation}) => {

    const [joke, setJoke] = useState({})

    useEffect (() => {
        fetch('https://icanhazdadjoke.com/slack')
        .then(res => res.json())
        .then(data => setJoke(data.attachments[0]))
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{joke.fallback}🤣</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Start')} style={styles.btn}>
                <Text>Restart</Text>
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
        color: '#833471',
        margin: 20,
        padding: 20,
        textAlign: 'center'
    },
    btn: {
      padding: 20,
      width: 100,
      alignSelf: "center",
      textAlign: 'center',
      borderWidth: 1,
      backgroundColor: 'lightblue'



}
})