import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'

import { TealContainer } from './components/TealContainer'
import { Title } from './components/Title'
import { Footer } from './components/Footer'
import { Fetch } from './components/Fetch'
import img from './assets/placeholder.png'

import Home from './production/Home'


const App = () => {
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
    <Fetch />
  }, [sensorData])

  return (
    <TealContainer>
      <Title>
        Shake to load a random villager.
      </Title>

      <Image source={img} />
      
      <Home />
      <Fetch />
      
      <Footer />
    </TealContainer>
  )
}

export default App