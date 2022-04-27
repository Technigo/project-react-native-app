import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Text, Image, ImageBackground } from 'react-native'
import styled from 'styled-components/native'

const ButtonApi = () => {

    const [picture, setPicture ] = useState({})

    const generatePicture = () => {
        fetch('https://randomfox.ca/floof/')
        .then(response => response.json())
        .then(data => setPicture(data))
        // console.log(data)
    }

    const APIButton = styled.TouchableOpacity`
        font-weight: 700;
        width: 50%
        background-color: tomato;
    `

    useEffect(()=> {
        generatePicture();
    }, []);

    return (
        <View>
            {/* <ImageBackground source={picture.image} 
            resizeMode="cover" 
                >

            </ImageBackground>
                <Image source={picture.image}/>
                <Image source={data.link}/> */}
            
            <APIButton onPress={generatePicture}>
                <Text>Click Me</Text>
            </APIButton>
        </View>
    )
}

export default ButtonApi;