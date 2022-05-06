import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const TechyApi = () => {
    const [techwords, setTechwords] = useState({})

    const generateTechWords = () => {
        fetch('https://techy-api.vercel.app/api/json')
        .then(response => response.json())
        .then((data) => setTechwords(data))
    }

const Container = styled.View`
    flex: 1;
	justify-content: center;
	align-items: center;
	margin: 20px;
    width: 80%;
    padding-left: 20px;
    padding-right: 20px;  
    `;

    const Quote = styled.Text`
	font-size: 20px;
	color: black;
    font-style: italic;
`;

const APIButton= styled.TouchableOpacity`
    font-weight: 700;
    width: 40%;
    background-color: green;
    margin-top: 20px;
    border-radius: 10px;
    border: 2px solid darkgreen;
    padding; 5px;
    color: white;
    `;

    
useEffect(() => {
    generateTechWords();
}, []);

return (
        <Container>
            <Quote>
            {techwords.message}</Quote>
          <APIButton onPress={generateTechWords}>
          <Text>New sentence</Text>
          </APIButton>
          </Container>                           
)
}

export default TechyApi;