import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, TextComponent } from 'react-native'
import styled from 'styled-components/native'
import { Accelerometer } from 'expo-sensors'


const WineText = styled.Text`
    font-weight: 700;
`

const WineButton = styled.TouchableOpacity`
    width: 50%;
    background-color: red;
`

const ShakeApi = () => {
	const [data, setData] = useState({
		x: 0,
		y: 0,
		z: 0,
	})
    const [wine, setWine] = useState({})
    const [loading, setLoading] = useState(false)
	const [subscription, setSubscription] = useState(null)

    useEffect(() => {
        randomWine()
    }, [])

	useEffect(() => {
		Accelerometer.setUpdateInterval(1000)
		subscribe()
		return () => unsubscribe()
	  }, [])
	
	  useEffect(() => {
		if (isShakingEnough(data)) {
			randomWine()
		}
	  }, [data])
	


  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData)
      })
    )
  }

  const unsubscribe = () => {
    subscription && subscription.remove()
    setSubscription(null)
  }



    const randomWine = () => {
        setLoading(true)
		fetch('https://winemag.herokuapp.com/wines/random')
        .then((res) => res.json())
        .then((wine) => setWine(wine))
        .finally(() => setLoading(false))
	}

	const isShakingEnough = (data) => {
		const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
		return totalForce > 1.78
	  }

    if (loading) {
        return <ActivityIndicator />
    }

	const { x, y, z } = data


    return (
        <View>
       		<WineText>Variety: </WineText><Text>{wine.variety}</Text>
            <WineText>Title: </WineText><Text>{wine.title}</Text>
            <WineText>Description: </WineText><Text>{wine.description}</Text>
            <WineText>Points: </WineText><Text>{wine.points}</Text>
        </View>
    )
}

export default ShakeApi