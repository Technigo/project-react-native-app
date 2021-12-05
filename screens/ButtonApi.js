import React, { useState, useEffect} from "react";
import { Text, ActivityIndicator, StyleSheet, View, TouchableOpacity, Image, SafeAreaView } from 'react-native'



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
        return (
            <SafeAreaView  style={styles.activityindicator}>
                <ActivityIndicator size="large" color="#1a1a1a"/>
            </SafeAreaView>
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.quote}>{quote.content}</Text>
                <Text style={styles.author}>{quote.author}</Text>
            </View>

            <SafeAreaView style={styles.shadowProp}>
                <Image source={require('../assets/bear.gif')} 
                style={styles.containersmall}/> 
            </SafeAreaView>

            <TouchableOpacity style={[styles.button, styles.shadowProp]} onPress={generateQuote}>
                <Text style={styles.buttonText}>Generate quote!</Text>
            </TouchableOpacity>
        </SafeAreaView>

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
        backgroundColor: "#9BCBCB",
        padding: 16,
        marginBottom: 32,
        borderRadius: 8,
        minWidth: 343,
        marginBottom: 32,
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
      },
      shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      containersmall: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 24,
        marginLeft: 8,
        marginRight: 8,
        padding: 16,
        borderRadius: 8,
        width: 160,
        maxHeight: 140,
        alignItems: 'center',
      },
      activityindicator: {
        flex: 1,
        justifyContent: "center",
      }
})
