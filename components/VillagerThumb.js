import React, { useState, useEffect } from 'react'
import { Image, TouchableOpacity } from 'react-native'

import { TealContainer } from './TealContainer'
import { BodyTextStyle } from './BodyTextStyle'
import { Title } from './Title'
import { Footer } from './Footer'
import img from '../assets/placeholder.png'


const VillagerThumb = ({ 
  id,
  name,
  icon_uri,
 }) => {
  
  const toVillagerInfo = () => {
    navigation.navigate("VillagerInfo", {thingtopass: "Peggy go to sleep"})
  }

  
  return (
    <View>
          <TouchableOpacity onPress={toVillagerInfo}>
            <BodyTextStyle key={villager.id}>
              {villager.id}
            </BodyTextStyle>
          </TouchableOpacity>
        ))}
    </View>
  )
}

export default VillagerThumb