import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Button, Linking, Image, ImageBackground, Div} from 'react-native';
import styled from 'styled-components/native';
// import * as Location from 'expo-location';

const QuoteText = styled.Text`
    font-weight: 700;
    color: white;
    font-size: 20px;
`;

const APIButton = styled.TouchableOpacity`
    width: 50%;
    padding: 10px;
    margin: 5px;
    background-color: green;
    text-align: center; 
    border-radius: 20px;
`;

const WelcomeText = styled.Text`
    color: white;
    font-size: 18px;
    padding: 15px;
`;

const ButtonText = styled.Text`
    font-weight: bold;
`;

const ScreenBackground = styled.ImageBackground`
    justify-content: center;
    height: 100%;
`;

const Box = styled.View`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 50px;
    // background-color: white;
    // opacity: 0.5;
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
    // const getLocation = () => {
    //     Location.requestForegroundPermissionsAsync().then((data) => {
    //         if (data.status !== 'granted') {
    //             console.log('Permission to access location was denied');
    //         } else {
    //             return Location.getCurrentPositionAsync({});      
    //             }
    //     }).then((locationData) => {
    //     Linking.openURL(`http://www.google.com/maps/place/${locationData.coords.latitude},${locationData.coords.longitude}`)
    //     });
    // };

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
    <ScreenBackground source={require('../assets/typewriter.jpg')}>
        <Box>
        <WelcomeText>Welcome to the quote machine:</WelcomeText>
        <APIButton onPress={generateQuote}>
            <ButtonText>Click me!</ButtonText>
        </APIButton>
        <QuoteText>{quote.content}</QuoteText>
        <WelcomeText>Author: {quote.author}</WelcomeText>
        </Box>
        {/* <Button title="Get location" onPress={getLocation} /> */}
        {/* <TechnigoImage source= {require()} resizeMode="contain"/> */}
    </ScreenBackground>
    )};

export default ButtonApi;


