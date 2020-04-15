import React, { useState, useEffect } from 'react'
import { Text, Image, ScrollView, View } from 'react-native'

import styled from 'styled-components/native'
import { DogsList } from './DogsList'


const Container = styled.View`
  flex: 1;
  background-color: #c2afa1;
  justify-content: flex-start;
  align-items: center;
`
const DogsDetailH1 = styled.Text`
 font-size: 42px; 
 max-width:300px;
 margin-right:auto;
 margin-left:auto;
 margin-bottom:10px;
 padding-top:20px;
 font-family:"CHIBOLD";
 color:#453930;

`
const DogsDetailH2 = styled.Text`
  font-size: 24px;
  font-family:"CHIBOLD";
  color:#806b59;
  margin-bottom:20px;
  margin-left:20px;;
`
const TemperamentContainer = styled.View`
  background-color: #dbd0c8;
  width:80%;
  padding: 20px;
  border-radius:10px;
`
const TemperamentText = styled.Text`
  font-size: 21px;
  font-family:"CHIBOLD";
  color:#806b59;
`

const TemperamentHeader = styled.Text`
font-size: 28px;
font-family:"CHIBOLD";
color:#453930;
`

export const DogDetails = ({ route }) => {
  const APIkey = `ee52902c-58da-4c17-881c-5ed49ec22dd2`
  const { breed } = route.params

  const [photo, setPhoto] = useState([])
  // const [detail, setDetail] = useState({
  //   id: '',
  //   url: ''
  // })
  const doggoDetail = `https://api.thedogapi.com/v1/images/search?include_breed=1&breed_id=${breed.id}`

  useEffect(() => {
    fetch(doggoDetail,
      { headers: { Authorization: APIkey } })
      .then((res) => res.json())

      .then((json) => {
        setPhoto(json)
        console.log(json[0])
      })
  }, [breed])



  // const randomdogs = 'https://api.thedogapi.com/v1/images/search'
  // const dogImage = { uri: `https://cdn2.thedogapi.com/images/${photo.id}_1280.jpg` }

  return (

    <Container>
      <DogsDetailH1>Breed Details</DogsDetailH1>
      <DogsDetailH2>{breed.name}</DogsDetailH2>
      <TemperamentContainer>
        <TemperamentHeader>Temperament</TemperamentHeader>
        <TemperamentText>{breed.temperament}</TemperamentText>


      </TemperamentContainer>

      {photo.map((image) => (
        <View key={image.id}>
          <Image
            resizeMode="contain"
            source={{ uri: image.url }}
            style={{ width: 300, height: 300 }}
            accessibilityLabel={breed.name} />
        </View>
      ))}


    </Container>

  )

}