import React, { useState, useEffect } from "react";
import {
        View,
        Text,
        ActivityIndicator,
        Button,
        Pressable,
        StyleSheet
    } from 'react-native';

const ButtonApi = () => {

    const [quote, setQuote] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        generateQuote()
    }, [])

    const generateQuote = () => {
        setLoading(true)
		fetch('https://api.quotable.io/random')
			.then(response => response.json())
			.then(data => setQuote(data))
            .finally(() => setLoading(false))
	}

    if (loading) {
        return (
            <ActivityIndicator
                size="large"
                color="silver"
            />
        )
    }

    return(
        <View style={styles.view}>
            <Text style={styles.qotd}>Quote of the Day:</Text>
            <Text style={styles.qtext}>{quote.content}</Text>
            <Text style={styles.qauthor}>- {quote.author}</Text>
            <Pressable
                onPress={generateQuote}
                style={styles.qpressable}
            >
                <Text>Quote Generator</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
    },
    qotd: {
        fontSize: 24,
        fontWeight: '700',
    },
    qtext: {
        marginTop: 8,
        fontWeight: '700',
    },
    qauthor: {
        marginBottom: 8,
    },
    qpressable: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 32,
        width: '50%',
        color: 'white',
        backgroundColor: 'steelblue'
    },

})

export default ButtonApi