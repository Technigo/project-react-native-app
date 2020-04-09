import React, { useState, useEffect } from 'react'
import { TouchableOpacity, View } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { DogDetails } from './DogDetails'


const DogListText = styled.Text`
  font-size: 21px;
  color: palevioletred;
`


export const DogsList = ({navigation}) => {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    fetch('https://api.thedogapi.com/v1/breeds?limit=10&page=0')
      .then((res) => res.json())
      .then((json) => setDogs(json))
   
  }, [])

  return (
    <View>
      {dogs.map((breed) => (

        <TouchableOpacity
          key={breed.name}
          onPress={() => navigation.navigate('DogDetails', { breed })}
          >
          <DogListText >{breed.name}</DogListText>
        </TouchableOpacity>
        ))}
    </View>
  )
}