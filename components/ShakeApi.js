import React, { useState, useEffect } from 'react';
import {
        View,
        Text,
        ActivityIndicator,
        StyleSheet
    } from 'react-native';

import { Accelerometer } from 'expo-sensors';

const ShakeApi = () => {

    const [quote, setQuote] = useState({});
    const [loading, setLoading] = useState(false);
    const [subscription, setSubscription] = useState(null);
    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });

    useEffect(() => {
        generateQuote()
    }, []);

    useEffect(() => {
        Accelerometer.setUpdateInterval(1000);
        subscribe();
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (isShakingEnough(data)) {
            generateQuote()
        }
    }, [data]);

    const subscribe = () => {
        setSubscription(
            Accelerometer.addListener(accelerometerData => {
                setData(accelerometerData);
            })
        );
    };

    const unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };

    const isShakingEnough = (data) => {
        const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
        return totalForce > 1.78;
    }

    const { x, y, z } = data;

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

    return (
        <View style={styles.view}>
            <Text style={styles.qotd}>Quote of the Day:</Text>
            <Text style={styles.qtext}>{quote.content}</Text>
            <Text style={styles.qauthor}>- {quote.author}</Text>
            <Text>Shake your device a bit to generate a new quote. :)</Text>
            <Text>Data X: {x}</Text>
            <Text>Data Y: {y}</Text>
            <Text>Data Z: {z}</Text>
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
    }
})

export default ShakeApi