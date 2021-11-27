import React from 'react';
import { View, Image, Text, Button, StyleSheet } from "react-native";


const Start = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../assets/zultar.gif')} />
            <Text style={styles.text}>Do you want to know your fortune?</Text>
            <Button
                title="Tap to ask"
                color="red"
                onPress={() => navigation.navigate('Answers')}
            />
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
        width: 250,
        height: 250,
        marginBottom: 20
    },
    text: {
        fontSize: 24,
        color: "wheat",
        margin: 16,
        textAlign: "center",
    },
    button: {
        marginTop: 16,
        backgroundColor: "blue",
    }

});

export default Start;