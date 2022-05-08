import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";
import LottieView from 'lottie-react-native';


const image = { uri: "https://i.postimg.cc/WbknmQ4T/Untitled-Artwork.png" };


const Joke = ({navigation}) => {

    const [joke, setJoke] = useState({})

    useEffect (() => {
        fetch('https://icanhazdadjoke.com/slack')
        .then(res => res.json())
        .then(data => setJoke(data.attachments[0]))
    }, [])

    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>{joke.fallback}</Text>

                <LottieView source={require('../assets/haha.json')} style={{width: 200,
                height: 200}} autoPlay loop />

                <TouchableOpacity onPress={() => navigation.navigate('Start')} style={styles.btn}>
                    <Text style={styles.title3}>Restart</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>

    )
}

export default Joke

/////////////           STYLING        /////////////////

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3d3d3d',
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
        color: '#3d3d3d',
        padding: 5,
        textAlign: 'center'
    },
    background: {
        flex: 1,
    }
})