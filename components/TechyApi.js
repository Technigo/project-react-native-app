import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const TechyApi = () => {
    const [techwords, setTechwords] = useState({})

    const generateTechWords = () => {
        fetch('https://techy-api.vercel.app/api/json')
        .then(response => response.json())
        .then((data) => setTechwords(data))
    }

    const APIButton= styled.TouchableOpacity`
    font-weight: 700;
    width: 50%;
    background-color: tomato;
    margin: 20px;
    border-radius: 10px;
    border: 2px solid darkred;
    padding; 5px;
    `
useEffect(() => {
    generateTechWords();
}, []);

return (
        <View>
            <Text>{techwords.message}</Text>
          <APIButton onPress={generateTechWords}>
          <Text>New sentence</Text>
          </APIButton>
          </View>                           
      
    
)
}



export default TechyApi;