import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'

import VillagerArray from './VillagerArray'
import { StartState } from './StartState'
import { DetectShake } from './DetectShake'
import { Container, Name, Quote, TextContainer, Textspan } from './ProfileStyles'

export const Randomizer = () => {
  const [villager, setVillager] = useState([])
  const [start, setStart] = useState(true)
  let villagerIcon = villager.uri

  const getVillager = () => {
    const theVillager = VillagerArray[Math.floor(Math.random() * VillagerArray.length)]
    setVillager(theVillager)
  }
  
  const shake = () => {
    setStart(false)
  }
  useEffect(() => {
    DetectShake.addListener(() => {
      shake()
      getVillager()
    })
      return () => {
        DetectShake.removeListener()
      }
  }, [])
  return (
    <>
      {start ? (
        <StartState />
      ) : (
        <Container>
        <Image 
          source={{uri: villagerIcon}}
          style={{
            width: 120,
            height: 120,
        }}/>
         <Name>
          {villager.name}
        </Name>
        <Quote>&ldquo;{villager.saying}&rdquo;</Quote>
        <TextContainer>
          <Textspan>Personality: {villager.personality}</Textspan>
          <Textspan>Birthdate: {villager.birthday}</Textspan>
          <Textspan>Species: {villager.species}</Textspan>
          <Textspan>Gender: {villager.gender}</Textspan>
          <Textspan>Hobby: {villager.hobby}</Textspan>
          <Textspan>Catch Phrase: {villager.catchPhrase}</Textspan> 
        </TextContainer>
      </Container>
      )}
  </>
)}