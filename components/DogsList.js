import React, { useState, useEffect } from 'react'
import { TouchableOpacity, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'
import { DogDetails } from './DogDetails'


const DogListText = styled.Text`
  font-size: 24px;
  color: #c2afa1;
  font-family:"CHIBOLD";
  margin-bottom: 15px;
  
`
const DogsListBreeds = styled.View`
  flex:1;
  justify-content: flex-start;
  margin-left:30px;
  `
const DogsListHeader = styled.Text`
 font-size: 42px; 
 margin-bottom:30px;
 padding-top:20px;
 font-family:"CHIBOLD";
 color:#453930;

`
const DogsListContainer = styled.View`
flex: 1;
background-color: #806b59;
justify-content: flex-start;
align-items: center;
`

export const DogsList = ({ navigation }) => {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    fetch('https://api.thedogapi.com/v1/breeds?limit=100&page=0')
      .then((res) => res.json())
      .then((json) => 
      {console.log(json)
      setDogs(json)})
      
  }, [])
  const [fontsLoaded] = useFonts({
    'CHIBOLD': require('./fonts/CHIBOLD.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ScrollView>
      <DogsListContainer>
        <DogsListHeader>DOG 🐶 BREEDS </DogsListHeader>
        <DogsListBreeds>
          {dogs.map((breed) => (

            <TouchableOpacity
              key={breed.name}
              onPress={() => navigation.navigate('Doggo Details', { breed })}
            >
              <DogListText >{breed.name}</DogListText>
            </TouchableOpacity>
          ))}
        </DogsListBreeds>
      </DogsListContainer>
      </ScrollView>
    )
  }
}