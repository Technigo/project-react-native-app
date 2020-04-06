import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import styled from "styled-components/native"

const Wrapper = styled.View`
justify-content: center;
height: 300px;
color: white;

`;

const MyImage = styled.Image`
width: 300px;
height: 300px;
margin: 15px auto;
border-radius: 150px;
transform: ${props => props.transform}
`;


export const ImageWrapper =(props) => {
    return (
      <Wrapper >
   <MyImage source={require('../assets/compassWhite.jpg')} transform={`rotate(${props.degree}deg)`} />

        </Wrapper>
          
    );
  }