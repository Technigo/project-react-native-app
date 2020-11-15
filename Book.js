import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import {  Image, StyleSheet, TouchableHighlight} from 'react-native';



import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_700Bold
  } from "@expo-google-fonts/dev";

import { AppLoading } from 'expo';

const Container = styled.View`
margin-left: 15;

`

const Title = styled.Text`
    font-size: 13;
    color: #161616;
    font-family: Montserrat;
    font-weight: 700;
    padding-top: 5;
    letter-spacing: 0.5;
    text-transform: capitalize; 
    width: 140;

`

const Author = styled(Title)`   
    font-size: 13;
    font-weight: 400;
    color: #757575;
`

const Bookcover = styled.Image`

border-radius: 10;

`


const Book = ({navigation, title, author, image, description, buyLink}) => {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_400Regular_Italic,
        Montserrat_700Bold
      });

      if (!fontsLoaded) {
          return <AppLoading />
      }

    return (

        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => navigation.navigate('Details', { title, author, image, description, buyLink})}
        >

            <Container >
                <Bookcover
                    source={{ uri: `${image}` }}
                    style={{
                        width: 144,
                        height: 227,
                    }}
                />
                <Title>{title}</Title>
                <Author>{author}</Author>
            </Container>
        </TouchableHighlight>
        
    
    )
}
export default Book;