import React, { useEffect, useState } from 'react';

import styled from 'styled-components/native'
import {  View, Button, Text, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import backgroundImage from '../assets/banana.png';

// import { getSigns} from './Url';
import { SelectTimeFrame } from './SelectTimeFrame';
import { SelectSign } from './SelectSign';


const HomeContainer = styled.ImageBackground`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 18px;
`;

const HomeText = styled.Text`
    font-size: 30px;
`;


const HomeScreen = ({ navigation }) => {

    const [ selectedSign,  setSelectedSign] = useState('');         
    const [ selectedTimeFrame, setselectedTimeFrame] = useState('');


    useEffect(() => {
        navigation.setOptions({ headerShown: false });
      });
  
    const navigateToDetails = () => {
        navigation.navigate('Details' , {name: 'Daily Horoscope'});
    };


    return  (
        <HomeContainer source={backgroundImage}>
        <HomeText>Astro Logical</HomeText>
        <Text>{selectedSign}</Text>
        {/* //only render selectsign if selectsignstate not set */}
        <SelectSign onSignSelected={setSelectedSign} />    
        {/* // only paint timeframe if sign selected          */}
        <SelectTimeFrame onTimeFrameSelected={setselectedTimeFrame} /> 
        <Button
        title="Details"
        onPress={navigateToDetails}>
        </Button>
        </HomeContainer>
    );
};




export default HomeScreen;