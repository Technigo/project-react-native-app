import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Accelerometer } from 'expo-sensors';

import greenBackgroundImage from '../assets/green.jpg';
import froggyImage from '../assets/froggy.jpg';
import { FrogImage, FrogBackground } from './FrogScreenStyling'

const FrogScreen = ({ navigation, route }) => {
    const [data, setData] = useState({});

    useEffect(() => {
        navigation.setOptions( {headerShown:false})
        Accelerometer.setUpdateInterval(20);
        const listener = Accelerometer.addListener((accelerometerData) => {
            setData(accelerometerData);
        });

        return () => {
            listener && listener.remove();
        };
    }, []); 

    let xOffset= (data.x || 0)* -60;
    let yOffset= (data.y || 0)* -120;

    return (
        <FrogBackground source={greenBackgroundImage}>
            <FrogImage 
                xOffset={xOffset} 
                yOffset={yOffset}
                source={froggyImage}
            >
            </FrogImage>
            <Text>{route.params.data}</Text>
            <Text>x: {data.x} y: {data.y} z:{data.z}</Text>
        </FrogBackground> 
    );
};

export default FrogScreen;