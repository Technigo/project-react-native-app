import React, { useState, useEffect } from 'react'
import { View, Image, Button } from 'react-native'

import VillagerArray from './VillagerArray'
import { BodyTextStyle } from './BodyTextStyle'
import { Title } from './Title'


export const Randomizer = () => {
  const [villager, setVillager] = useState([])
  console.log(VillagerArray)

  const getVillager = () => {
    const theVillager = VillagerArray[Math.floor(Math.random() * VillagerArray.length)]
    setVillager(theVillager)
  }
  return (
    <View>
      <Title>{villager.name}</Title>
      {/* fix image link */}
      <Image source={villager.uri} />
      {/* info text needs styling */}
      <BodyTextStyle>{villager.saying}</BodyTextStyle>
      <BodyTextStyle>Personality: {villager.personality}</BodyTextStyle>
      <BodyTextStyle>Birthdate: {villager.birthday}</BodyTextStyle>
      <BodyTextStyle>Species: {villager.species}</BodyTextStyle>
      <BodyTextStyle>Gender: {villager.gender}</BodyTextStyle>
      <BodyTextStyle>Hobby: {villager.hobby}</BodyTextStyle>
      <BodyTextStyle>Catch Phrase: {villager.catchPhrase}</BodyTextStyle> 

      <Button
        onPress={() => { getVillager()}}>
      Very Buttony Button
      </Button>
    </View>
  )
}