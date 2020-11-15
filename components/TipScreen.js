import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import { Accelerometer } from 'expo-sensors';

import snowGlobeImage from "../assets/snowglobe.png"; 

//Styling
const TipContainer = styled.View `
    flex: 1;
    align-items: center;
    padding: 18px;
    background: #136278;
    `;

const TipText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    margin-top: 150px;
    `;

const TipMessage = styled.Text`
    font-size: 22px;
    color: #ffffff;
    padding-top: 5px;
    text-align: center;
    `;

const ImageContainer = styled.ImageBackground`
    width: 300;
    height: 300;
    `;

const Button = styled.TouchableOpacity`
    background-color: #78B2BF;
    padding: 20px;
    border-radius: 50px;
    text-align: center;
    margin-top: 70px;
    `;

const ButtonText = styled.Text`
    color: #136278;
    font-size: 20px;
    text-align: center;
    `;

//TipScreen 
const TipScreen = ({ navigation }) => {
    const [data, setData] = useState({});
    const [hasShaked, setHasShaked] = useState(false);
    const [message, setMessage] = useState({})

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
      },[]);
    
      const navigateToStart = () => {
        navigation.navigate("Start", { name: "Start" });
      };

    // Array and function for randoom christmas messages.
    //Adding useEffect with an empty array at the end to prevent an infinite loop.
    useEffect(() => {
        const tips = ['Bake some Christmas Cookies 🍪', 'Wrap a gift 🎁', 'Decorate your home ✨', 'Get a Christmas Tree 🎄', 'Watch a Christmas movie 🍿🎬', 'Make some Christmas candy 🍭🍬', 'Send a Christmas postcard 💌', 'Let go of all that Christmas-stress! Do something nice (or naughty...) with a special someone ❤️ 🤶', 'Snow? Go outside! ⛷ ❄️', 'Build a snowman ☃️', 'Make a Spotify-playlist with your favorite Christmas music 🎧'];
        const randomChristmasTips = (tips) => {
        return (
            tips[Math.floor(Math.random() * tips.length)]
        )}
        setMessage(randomChristmasTips(tips))
    },[]); 

    useEffect(() => {
        //Accelerometer.setUpdateInterval(500); //do i need thins..?
        const listener = Accelerometer.addListener((accelerometerData) => {
            setData(accelerometerData);
        },[]);
    
        return () => {
            listener && listener.remove();
        };
    }, []);
   
    // Takes the accelerometerData (data) and calculates the totalForce of the movement
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    //If the phone is shaked and the totalForce is over 2, the message is triggered
    if (!hasShaked && totalForce > 3) {
        setHasShaked(true);
    }

  return (
    <TipContainer>
        <TipText>Shake me for a cosy Christmas tip!</TipText>
            <ImageContainer source={snowGlobeImage}></ImageContainer>
            {hasShaked && <TipMessage>{message}</TipMessage>}
            <Button onPress={navigateToStart}>
                <ButtonText>Back to countdown ⏰</ButtonText>
            </Button>
    </TipContainer>
    );
};

export default TipScreen;
