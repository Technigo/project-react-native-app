import React from 'react';
import { View, Image, Text, Button, TouchableOpacity, StyleSheet } from "react-native";

//approach without styled components
const Start = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../assets/zoltar-start.gif')} />
            <Text style={styles.text}>Do you want to know your fortune?</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Answers')}>
                <Text style={styles.buttonText} >Ask to Zoltar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Merienda",
        width: "100%",
        flex: 1,
    },
    image: {
        borderRadius: 10,
        width: 270,
        height: 250,
        marginBottom: 25,
        flex: 0.7,

    },
    text: {
        fontSize: 24,
        color: "#D9D9D9",
        margin: 25,
        textAlign: "center",
        fontWeight: "bold",
    },
    button: {
        marginTop: 20,
        backgroundColor: "#CF3030",
        padding: 20,
        borderRadius: 10,

    },
    buttonText: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
    }

});

export default Start;