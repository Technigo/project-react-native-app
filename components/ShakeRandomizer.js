import React, { useState, useEffect } from 'react'
import { View, Image, Button } from 'react-native'
import { Accelerometer } from 'expo-sensors'

import VillagerArray from './VillagerArray'
import { Name, VillagerIco, Label, Textspan, Test } from './ProfileSyles'

export const ShakeRandomizer = () => {
  // variables to set random villager
  const [villager, setVillager] = useState([])
  const [data, setData] = useState({})
  let { x, y, z } = data
  console.log(VillagerArray)
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
    <View>
      <Name>
        {villager.name !== undefined ? villager.name : "Shake to load a random villager"}
      </Name>
      <Image source={require('../assets/placeholder.png')} />
      <Image 
        source={{uri: 'data:image/png;base64,'}}
        style={{
          width: 200,
          height: 200,
          resizeMode: 'contain'
        }}
      />
      
      <Textspan>{villager.saying}</Textspan>
      <Textspan>Personality: {villager.personality}</Textspan>
      <Textspan>Birthdate: {villager.birthday}</Textspan>
      <Textspan>Species: {villager.species}</Textspan>
      <Textspan>Gender: {villager.gender}</Textspan>
      <Textspan>Hobby: {villager.hobby}</Textspan>
      <Textspan>Catch Phrase: {villager.catchPhrase}
      </Textspan> 

      <Button
        onPress={() => { getVillager()}}
        type="button"
        title="Very Buttony Button"
      />
      
      <Test>
        x: {x} y: {y} z: {z} 
      </Test>
    </View>
  )
}