import React, {useState, useEffect} from 'react'
import { Text, View } from 'react-native'

export const DogsList = () => {
  const [dogs, setDogs]= useState([])

  useEffect(() => {
    fetch('https://api.thedogapi.com/v1/breeds?limit=10&page=0')
      .then(res => res.json())
      .then(json => setDogs(json))
  }, [])

  return (
    <View>  
      {dogs.map(dog => <Text>{dog.name}</Text>)}
    </View>
  )
}