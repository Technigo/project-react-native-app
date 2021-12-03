import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ActivityIndicator, Vibration } from "react-native";
import styled from "styled-components/native";
import { Accelerometer } from "expo-sensors";

import Header from "./Header";

const Container = styled.View`
    flex: 1;
    background-color: papayawhip;
    justify-content: center;
    align-items: center;
`;

const Title = styled.Text`
    font-size: 24px;
    color: palevioletred;
`;


const DiceText = styled.Text`
    font-weight: 700;
`;

const APIButton = styled.TouchableOpacity`
    width: 50%;
    background-color: yellow;
`;

const isShaking = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
};

const RollD6 = () => {
    const [subscription, setSubscription] = useState(null);
    const [dice, setDice] = useState();
    const [loading, setloading] = useState();
    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });

    useEffect(() => {
        rollDiceD6();
    }, []);

    useEffect(() => {
        if (isShaking(data)) {
            rollDiceD6();
        }
    }, [data]);

    useEffect(() => {
        Accelerometer.setUpdateInterval(1000);

        _subscribe();
        return () => _unsubscribe();
    }, []);

    const _subscribe = () => {
        Accelerometer.setUpdateInterval(1000);

        setSubscription(
            Accelerometer.addListener((accelerometerData) => {
                setData(accelerometerData);
            })
        );
    };

    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };

    const { x, y, z } = data;

    const rollDiceD6 = () => {
        setloading(true);
        Vibration.vibrate();
        fetch("http://roll.diceapi.com/json/d6")
            .then((res) => res.json())
            .then((data) => setDice(data.dice))
            .finally(() => setloading(false));
    };

    if (loading) {
        return <ActivityIndicator />;
    }

    return (
        <Container>
            <Header />

            <Title>Shake to roll a D6 (6 sided dice)</Title>

            <View>
                {dice && (
                    <>
                        <DiceText>Value: {dice[0]?.value}</DiceText>
                        <Text>Dice: {dice[0]?.type}</Text>
                    </>
                )}
            </View>
            <View>
                <Text>Hate shaking your phone!?</Text>

                <APIButton onPress={rollDiceD6}>
                    <Text>Click to roll!</Text>
                </APIButton>
            </View>
        </Container>
    );
};

export default RollD6;
