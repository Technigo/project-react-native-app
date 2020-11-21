import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'
import { Accelerometer } from 'expo-sensors'

import VillagerArray from './VillagerArray'
import { Name, Textspan, Container, Label } from './ProfileSyles'
import { ButtonStyle } from './ButtonStyle'
import placeholder from '../assets/placeholder.png'

export const Randomizer = () => {
  const [villager, setVillager] = useState([])
  const [data, setData] = useState({})
  let { x, y, z } = data
  let villagerIcon = villager.uri
  
  // function to fetch random villager
  const getVillager = () => {
    const theVillager = VillagerArray[Math.floor(Math.random() * VillagerArray.length)]
    setVillager(theVillager)
  }

  useEffect(() => {
    Accelerometer.setUpdateInterval(120)
    const shake = Accelerometer.addListener((setData) => {
      const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
        if (totalForce > 3.5) {
          setData(setData)
        }
    })
    return () => {
      shake && shake.remove()
    }
  }, [])

  useEffect(() => {
    getVillager()
  }, [setData])

  return (
    <Container>
      <Name>
        {villager.name !== undefined ? villager.name : "Shake to load a random villager"}
      </Name>
      {/* <Image source={require('../assets/placeholder.png')} /> */}
      <Image 
        source={{uri: villagerIcon} !== undefined ?  villagerIcon : "../assets.placeholder.png"}
        style={{
          width: 120,
          height: 120,
          marginBottom: 10
      }}/>

      <Textspan>{villager.saying}</Textspan>
      <Textspan>Personality: {villager.personality}</Textspan>
      <Textspan>Birthdate: {villager.birthday}</Textspan>
      <Textspan>Species: {villager.species}</Textspan>
      <Textspan>Gender: {villager.gender}</Textspan>
      <Textspan>Hobby: {villager.hobby}</Textspan>
      <Textspan>Catch Phrase: {villager.catchPhrase}</Textspan> 

      <ButtonStyle onPress={() => { getVillager()}} type="button">
        <Label>Button</Label>
      </ButtonStyle>
    
    </Container>
  )
}