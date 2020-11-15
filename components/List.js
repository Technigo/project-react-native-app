import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'

import { TealContainer } from './TealContainer'
import { BodyTextStyle } from './BodyTextStyle'
import { Title } from './Title'
import { Footer } from './Footer'
import { VillagerThumb } from './VillagerThumb'
import img from '../assets/placeholder.png'


const List = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false })
  })

  const [villagers, setVillagers] = useState({})
  const acApi = 'http://acnhapi.com/v1/villagers/'  
  
  useEffect(() => {    
    fetch(acApi)
      .then((res) => res.json())
      .then((json) => setVillagers(json))
  }, [])

  return (
    <TealContainer>
      <Title>Please pardon the dust!</Title>
      <BodyTextStyle>The randomizer isn't ready yet. In the meantime, here's a list of all villagers in New Horizons.</BodyTextStyle>
      <Image source={img} />
        {villagers.map((villager) => (
          <VillagerThumb key={villager.id} {...villager} />
        ))}
      <Footer />
    </TealContainer>
  )
}

export default List