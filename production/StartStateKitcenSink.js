import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'
import { Accelerometer } from 'expo-sensors'
import styled from 'styled-components/native'

import { TealContainer } from './TealContainer'
import { BodyTextStyle } from './BodyTextStyle'
import { Title } from './Title'
import { Footer } from './Footer'
import { VillagerThumb } from './VillagerThumb'
import img from '../assets/placeholder.png'

import { Home } from '/production/Home'


const List = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false })
  })
  
  const [sensorData, setSensorData] = useState({})
  const [villager, setVillager] = useState({})

  useEffect(() => {
    Accelerometer.setUpdateInterval(100)
    const listener = Accelerometer.addListener((data) => {
      const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
        if (totalForce > 3.5) {
        setSensorData(data)
      }
    })

    return () => {
      listener && listener.remove()
    }
  }, [])
  useEffect(()=> {
      const acApi = 'http://acnhapi.com/v1/villagers/'
      useEffect(() => {
        fetch(acApi)
          .then((res) => res.json())
          .then((json) => setVillager(json))
            return console.log
          .catch((error) => {console.log(error)
          })
      }, [id])
      const randomSelector = array => {
        return array[Math.floor(Math.random() * array.length)];
      }

      const randomVillagerKeeper = {
        key={id},
        name={id.name.name-EUen}
        image={id.icon_uri},
        catchphrase={id.catch-phrase},
        personality={id.personality},
        hobby={id.hobby},
        birthday={id.birthday-string},
        saying={id.saying},
      }
  }, [sensorData])




  return (
    <TealContainer>
      <Title>Shake to load a random villager</Title>
      <Image source={img} />
      <Home />
      <Footer />
    </TealContainer>
  )
}

export default List


{/* 
 this should have the listener and accelerameter to trigger 
 
 ON SHAKE:

 1. api call > 
  see array > 
    randomizer > 
      display VillagerInfo
      push character data into VillagerInfo
      AND be ready to detect next shake event

  2. footer disappears

    const [villager, setVillager] = useState()

*/}