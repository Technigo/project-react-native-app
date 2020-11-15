import React, { useEffect } from 'react';
import styled from 'styled-components/native';

//Background image by Annie Spratt from Unsplash
import backgroundImage from "../assets/annie-spratt-Ee7C9fGiZI4-unsplash.jpg";

//Countdown
import CountDown from 'react-native-countdown-component';

//Styling
const StartContainer = styled.ImageBackground`
    flex: 1;
    align-items: center;
    justify-content:center;
    padding: 18px;
    `;

const StartHeader = styled.Text`
    font-size: 26px;
    padding-top: 3px;
    padding-bottom: 20px;
    text-align: center;
    font-weight: bold;
    color: #952106;
    `;

const StartText = styled.Text`
    font-size: 22px;
    margin-top: 50px;
    margin-bottom: 20px;
    color: #732C26;
    text-align: center;
    font-weight: bold;
    `;

const Button = styled.TouchableOpacity`
    background-color: #894437;
    padding: 20px;
    border-radius: 50px;
    text-align: center;
    `;

const ButtonText = styled.Text`
    color: #ffffff;
    font-size: 20px;
    text-align: center;
    `;

//StartScreen
const StartScreen = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({headerShown: false});
    }, []);

    const navigateToTip = () => {
        navigation.navigate('Christmas-tip', { name: 'Christmas-tip'});
    };

    // Calculating time left until Christmas
    let today = new Date();
    const xmas = new Date('December 24, 2020, 08:00:00 GMT+00:00');
    let milliSeconds = xmas.getTime() - today.getTime();

    const timeLeft = parseInt(
        milliSeconds
            .toString()
            .slice(0, -3)
    );
 
    return (
        <StartContainer source={backgroundImage}> 
            <StartHeader>Christmas Countdown</StartHeader>
                <CountDown
                    until={timeLeft}
                    timeToShow={['D', 'H', 'M', 'S']}
                    onFinish={() => alert('☃️🎄🌟 Merry Christmas! 🎅 🎁 🤶')}
                    onPress={() => alert('Counting down until Christmas Eve... 🤶 🎄 🎅 🎁  ☃️ 🌟')}
                    size={22}
                    digitStyle={{backgroundColor: '#732C26'}}
                    digitTxtStyle={{color: '#ffffff'}}
                    timeLabelStyle={{color: '#403528', fontWeight: 'bold'}}
                />
                <StartText>Can't wait that long?</StartText>
                <Button onPress={navigateToTip}>
                    <ButtonText>✨ Get some inspiration ✨</ButtonText>
                </Button>
        </StartContainer>
    );
};

export default StartScreen;