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
    background-color: yellow;
    width: 40%;
    padding-left: 20px;
    padding-right: 20px;
    
`;

    const APIButton= styled.TouchableOpacity`
    font-weight: 700;
    width: 50%;
    background-color: green;
    margin: 20px;
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
            <Text>{techwords.message}</Text>
          <APIButton onPress={generateTechWords}>
          <Text>New sentence</Text>
          </APIButton>
          </Container>                           
      
    
)
}



export default TechyApi;