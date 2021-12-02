import React, { useState, useEffect} from "react";
import { Text, ActivityIndicator, StyleSheet, View, TouchableOpacity } from 'react-native'



export const ButtonApi = () => {
    const [quote, setQuote] = useState ({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        generateQuote()
    }, [])
   

    const generateQuote = () => {
        setLoading(true)
        fetch("http://api.quotable.io/random")
        .then((res) => res.json())
        .then((quote) => setQuote(quote))
        .finally(() => setLoading(false))
    }

    if (loading) {
        return <ActivityIndicator/>
    }

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.quote}>{quote.content}</Text>
                <Text style={styles.author}>{quote.author}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={generateQuote}>
                <Text style={styles.buttonText}>Generate quote!</Text>
            </TouchableOpacity>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#eee',
    },
    button: {
        height: 56,
        backgroundColor: "#87AAAA",
        padding: 16,
        marginBottom: 32,
        borderRadius: 8,
        minWidth: 343,
        marginBottom: 64,
      },
      buttonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#1a1a1a',
        textAlign: 'center',
      },
      quote: {
        fontSize: 32,
        lineHeight: 36,
        fontWeight: '200',
        textAlign: 'center',
        marginBottom: 48,
        marginTop: 48,
        maxWidth: 343,
      },
      author: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: '400',
        textAlign: 'center',
        maxWidth: 343,
      }
})
