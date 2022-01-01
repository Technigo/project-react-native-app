import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Button, Linking, Image, ImageBackground} from 'react-native';
import styled from 'styled-components/native';
import * as Location from 'expo-location';

const QuoteText = styled.Text`
    font-weight: 700;
`;

const APIButton = styled.TouchableOpacity`
    width: 50%;
    background-color: green;
`;
const TechnigoImage = styled.Image`
    height: 100%;
    width: 100%
`;

const ScreenBackground = styled.ImageBackground`
    height: 100%
`;

const ButtonApi = () => {
    const [quote, setQoute] = useState({});
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState({});

    useEffect(() => {
        generateQuote();
    }, []);

    const generateQuote = () => {
        setLoading(true);
        fetch('http://api.quotable.io/random')
        .then((res) => res.json())
        .then((data) => setQoute(data))
        .finally(() => setLoading(false));
    };

    // v1 - Promise
    const getLocation = () => {
        Location.requestForegroundPermissionsAsync().then((data) => {
            if (data.status !== 'granted') {
                console.log('Permission to access location was denied');
            } else {
                return Location.getCurrentPositionAsync({});      
                }
        }).then((locationData) => {
        Linking.openURL(`http://www.google.com/maps/place/${locationData.coords.latitude},${locationData.coords.longitude}`)
        });
    };

    // v2 - Async await
    // const getLocation = async () => {
    //     const data = await Location.requestForegroundPermissionsAsync();
    //     if (data.status !== 'granted') {
    //         console.log( 'Permission to access location was denied' );
    //     } else {
    //         const locationData = await Location.getCurrentPositionAsync({});
    //         Linking.openURL(`http://www.google.com/maps/place/${locationData.coords.latitude},${locationData.coords.longitude}`);
    //     };
    //     }
    // }


    fetch(URL)
        .then((res) => res.json())
        .then((data) => console.log(data));

    if (loading) {
        return <ActivityIndicator/>
    }

    return (
    <ScreenBackground source={require('../assets/splash.png')}>
        <Text>Click button to generate quote!</Text>
        <APIButton onPress={generateQuote}>
            <Text>Click clock</Text>
        </APIButton>
        <QuoteText>Quote: {quote.content}</QuoteText>
        <Text>Author: {quote.author}</Text>
        <Button title="Get location" onPress={getLocation} />
        <TechnigoImage source= {require('../assets/favicon.png')} resizeMode="contain"/>
    </ScreenBackground>
    )};

export default ButtonApi;

//50:13

