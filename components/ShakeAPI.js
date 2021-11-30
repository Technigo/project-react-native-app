import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, Image } from 'react-native'
import styled from 'styled-components/native'
import { Accelerometer } from 'expo-sensors'
import { DrinkCard, DrinkWrapper } from './DrinkCard'
import PlaceHolderImage from '../assets/icon.png'

export const ShakeAPI = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })

  const [drink, setDrink] = useState()
  const [loading, setLoading] = useState(false)
  const [subscription, setSubscription] = useState(null)

  useEffect(() => {
    generateDrink()
  }, [])

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000)
    subscribe()
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (isShakingEnough(data)) {
      generateDrink()
    }
  }, [data])

  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData)
      })
    )
  }

  const unsubscribe = () => {
    subscription && subscription.remove()
    setSubscription(null)
  }

  const generateDrink = () => {
    setLoading(true)
    fetch('https://the-cocktail-db.p.rapidapi.com/random.php', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
        'x-rapidapi-key': '61b601b020msh2610520cd8ce94ep162f13jsn7891eb6bc297',
      },
    })
      .then((res) => res.json())
      .then((data) => setDrink(data))
      .finally(() => setLoading(false))
  }

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
    return totalForce > 1.78
  }

  if (loading) {
    return <ActivityIndicator />
  }
  console.log(drink)

  return (
    <DrinkCard>
      {drink?.drinks.length > 0 &&
        drink.drinks.map((item) => (
          <DrinkWrapper key={item.idDrink}>
            <Image
              style={{ width: '100%', height: '100%' }}
              source={{ uri: item.strDrinkThumb }}
            />
            <Text>Drink: {item.strDrink}</Text>
          </DrinkWrapper>
        ))}
    </DrinkCard>
  )
}
