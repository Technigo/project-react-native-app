import React, { useState, useEffect } from 'react'
import { View, Image } from 'react-native'

import villagers from '../villagers.json'
import { BodyTextStyle } from './BodyTextStyle'
import { Title } from './Title'



const randomSelector = () => {
  return array[Math.floor(Math.random() * array.length)];
}




export const Randomizer = () => {
  const [villager, setVillager] = useState([])
  console.log(villagers.x)
  
  // useEffect(() => {
  //   // randomizer output determines index of object to be random villager
  // }, [])

  // needs object to hold random object variable?

  return (
    <View>
      <Title>{villagers.x[5].name}</Title>
      {/* fix image link */}
      <Image source={villagers.x[5].uri} />
      {/* info text needs styling */}
      <BodyTextStyle>{villagers.x[5].saying}</BodyTextStyle>
      <BodyTextStyle>Personality: {villagers.x[5].personality}</BodyTextStyle>
      <BodyTextStyle>Birthdate: {villagers.x[5].birthday}</BodyTextStyle>
      <BodyTextStyle>Species: {villagers.x[5].species}</BodyTextStyle>
      <BodyTextStyle>Gender: {villagers.x[5].gender}</BodyTextStyle>
      <BodyTextStyle>Hobby: {villagers.x[5].hobby}</BodyTextStyle>
      <BodyTextStyle>Catch Phrase: {villagers.x[5].catchPhrase}</BodyTextStyle>


    </View>
  )
}

{/* 
const randomVillagerKeeper = {
  key={id},
  name={id.name.name-EUen},
  image={id.icon_uri},
  catchphrase={id.catch-phrase},
  personality={id.personality},
  hobby={id.hobby},
  birthday={id.birthday-string},
  saying={id.saying},
}
*/}