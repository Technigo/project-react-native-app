import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import snowGlobeImage from "../assets/snowglobe.png"; 

//Styling
const TipContainer = styled.View `
    flex: 1;
    align-items: center;
    justify-content:center;
    padding: 18px;
    background: #8BD6D0;
    `;

const TipText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    `;

    const TipMessage = styled.Text`
    font-size: 18px;
    color: #ffffff;
    `;

const ImageContainer = styled.ImageBackground`
    width: 250;
    height: 250;
    padding-top: 30px;
    `;

/*const SnowGlobe = styled.View`
  width: 150,
  height: 150,
`; */
 
//TipScreen 
const TipScreen = () => {
    const [data, setData] = useState({});
    const [hasShaked, setHasShaked] = useState(false);
    const [message, setMessage] = useState({})

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
        Accelerometer.setUpdateInterval(500);
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
    if (!hasShaked && totalForce > 2) {
    setHasShaked(true);
}
    
  return (
        <TipContainer>
            <TipText> Shake me for a cosy Christmas tip ☃️ </TipText>
            <ImageContainer source={snowGlobeImage}></ImageContainer>
            {hasShaked && <TipMessage>{message}</TipMessage>}
        </TipContainer>
    );
};

export default TipScreen;