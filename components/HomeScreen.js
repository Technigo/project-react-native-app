import React, { useEffect } from 'react';

import { HomeText, HomeContainer, StartButton, ButtonText } from './HomeScreenStyling';
import backgroundImage from '../assets/multicolor.jpg';

const HomeScreen = ({navigation}) => {
    useEffect(() => {
        navigation.setOptions( {headerShown:false})
    }, []);
    
const navigateToFrog = () => {
    navigation.navigate('Frog', {data:'Shake your phone to move the froggy'});
};

    return (
        <HomeContainer source={backgroundImage}>
            <HomeText>Welcome to froggy 🐸 accelerometer!</HomeText>
            <StartButton
                onPress={navigateToFrog}
            >
                <ButtonText>Press here to move the froggy</ButtonText>
            </StartButton>
        </HomeContainer>
    );
};

export default HomeScreen;