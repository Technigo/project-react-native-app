import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const ButtonApi = () => {
    
    const [quote, setQuote] = useState({})

    const generateQuote = () => {
        fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => setQuote(data))
    }

    useEffect(()=> {
        generateQuote();
    }, []);

    return (
        <View>
            <Text style={styles.firstText}>Click on the button below to read some wise quotes and maybe you'll find your way to epiphany there. </Text>
            <Text style={styles.quote}>"{quote.content}"</Text>
            <Text style={styles.author}>{quote.author}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={generateQuote}
            >
                <Text style={styles.btnText}>Generate quote</Text>
            </TouchableOpacity>  
        </View>
    )
}


const styles = StyleSheet.create({
    firstText: {
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 18
    },
    quote: {
        fontStyle: 'italic',
        marginTop: 17,
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 18
    },
    author: {
        textAlign: 'center'
    },
    button: {
        alignItems: "center",
        backgroundColor: 'tomato',
        padding: 15,
        marginBottom: 30,
        marginTop: 20,
        alignSelf: 'center'
    },
    btnText: {
        color: 'papayawhip'
    }
});

export default ButtonApi;
