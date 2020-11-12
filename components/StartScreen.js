import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native';

//Countdown
import CountDown from 'react-native-countdown-component';

//Styling
const StartContainer = styled.View `
    flex: 1;
    align-items: center;
    justify-content:center;
    padding: 18px;
    `;

const StartHeader = styled.Text`
    font-size: 22px;
    padding-bottom: 20px;
    text-align: center;
    font-weight: bold;
    `;

const StartText = styled.Text`
    font-size: 20px;
    padding-top: 50px;
    padding-bottom: 20px;
    font-weight: bold;
    `;

//StartScreen
const StartScreen = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({headerShown: false});
    }, []);

    const navigateToTip = () => {
        navigation.navigate('Christmas tips', {
            data: [0, 1, 2, 3]
        });
    };

// Calculating time left until Christmas
let today = new Date();
const xmas = new Date('December 24, 2020, 08:00:00 GMT+00:00');
let milliSeconds = xmas.getTime() - today.getTime();

// Converting milliseconds to correct time format for the counter
let timeString = milliSeconds.toString();
let newString = timeString.slice(0, -3);
let timeLeft = parseInt(newString);
 

    return (
        <StartContainer> 
        <StartHeader> Countdown to Christmas </StartHeader>
        <StartHeader> 🎄 🎄 🎄 🎄 🎄 </StartHeader>

        <CountDown
            until={timeLeft}
            timeToShow={['D', 'H', 'M', 'S']}
            onFinish={() => alert('☃️🎄🌟 Merry Christmas! 🎅 🎁 🤶')}
            onPress={() => alert('Counting down until Christmas Eve... 🤶 🎄 🎅 🎁  ☃️ 🌟')}
            size={20}
            digitStyle={{backgroundColor: '#F25244'}}
            digitTxtStyle={{color: '#ffffff'}}
        />
        <StartText> Can't wait that long?  </StartText>
        <Button title='🎄 Get some Christmas inspiration 🎄' onPress={navigateToTip}></Button>
        </StartContainer>
    );
};

export default StartScreen;