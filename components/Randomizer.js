import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'

import VillagerArray from './VillagerArray'
import { StartState } from './StartState'
import { DetectShake } from './DetectShake'
import { Name, Textspan, Container } from './ProfileSyles'

export const Randomizer = () => {
  const [villager, setVillager] = useState([])
  let villagerIcon = villager.uri

 // Function to fetch random villager from array
  const getVillager = () => {
    const theVillager = VillagerArray[Math.floor(Math.random() * VillagerArray.length)]
    setVillager(theVillager)
  }

  // Start = No villager is selected: Instruction text and placeholder image displayed.
  const [start, setStart] = useState(true)
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
        <Name>
          {villager.name}
        </Name>
        <Image 
          source={{uri: villagerIcon}}
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
      </Container>
      )}
  </>
)}