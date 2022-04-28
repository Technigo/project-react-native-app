import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextComponent } from 'react-native';
import { Accelerometer } from "expo-sensors";

import Header from "./Header";
import ButtonApi from "./ButtonApi";

const ShakePhone = () => {
    
    const arrayAnswers = [
    "yes, but I'm not sure so...", 
    "maybe in a galaxy far, far away", 
    "no, dear...", 
    "absolutely not, don't do it", 
    "ask again later",
    "whatever makes you happy",
    "please ask new question"
    ];

    const [answer, setAnswer] = useState([])

    const generateAnswer = () => {
       const theAnswer = arrayAnswers[Math.floor(Math.random() * arrayAnswers.length)];
       setAnswer(theAnswer)
    }

    useEffect(()=> {
        generateAnswer();
    }, []);

    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });

    const [subscription, setSubscription] = useState(null);

    const { x, y, z } = data;

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

    useEffect(() => {
        subscribe();
        return () => unsubscribe();
    }, []);

    const isShaking = (data) => {
        const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
        return totalForce > 1.78;
    }

    useEffect(()=> {
        if (isShaking(data)) {
            generateAnswer();
        }
    }, [data])

    return (
        <View style={styles.view}>
            <Header />
            <Text style={styles.preText}>My answer is: </Text>
            <Text style={styles.answer}>{answer}</Text>
            <ButtonApi />
        </View>     
    )
}


const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        padding: 24
    },
    preText: {
        textAlign: 'center',
        fontSize: 18

    },
    answer: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 70
    },
    author: {
        marginBottom: 8,
    }
})

export default ShakePhone;
