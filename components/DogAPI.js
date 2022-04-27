import React, {useState, useEffect} from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';

const DogAPI = () => {

  const [dog, setDog] = useState({})

  const generateDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => setDog(data))
  }

  useEffect(() => {
    generateDog();
  }, [])

  return (
    <View>
      <Image style={{ width: 200, height: 200 }} 
        source={{ uri: `${dog.message}` }} />
    </View>
  )
}

export default DogAPI;

