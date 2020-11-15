import React, { useEffect } from 'react'
import { View } from 'react-native'

export const Fetch = ({ setVillager }) => {
  const acApi = 'http://acnhapi.com/v1/villagers/'
  useEffect(() => {
    fetch(acApi)
      .then((res) => res.json())
      .then((json) => setVillager(json))
        return console.log
      .catch((error) => {console.log(error)
      })
  }, [id])

  return (
    <View />
    
  )
}

// fetch villager data then randomize