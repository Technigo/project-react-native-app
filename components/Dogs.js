import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator, Image } from 'react-native'

import styled from 'styled-components/native'
import { Accelerometer } from 'expo-sensors'
import { useFonts, Montserrat_500Medium } from '@expo-google-fonts/montserrat'

const ScreenBackground = styled.ImageBackground`
	height: 100%;
	resize-mode: center;
`
const MainView = styled.View`
	display: flex;
	align-items: center;
`
const MovieView = styled.View`
	display: flex;
	justify-content: center;
	flex-direction:row
	width: 100%;
`
const Animation = styled.Image`
	width: 150px;
	height: 150px;
`
const MovieImage = styled.Image`
	width: 340px;
	height: 340px;
	resize-mode: center;
`
const QuoteText = styled.Text`
	padding: 3px;
	font-weight: bold;
	textShadowColor: #ffffff8C;
  textShadowOffset: {width: -1, height: 1};
  textShadowRadius: 10px;
`

const Dogs = () => {
	const [data, setData] = useState({
		x: 0,
		y: 0,
		z: 0,
	})
	const [dog, setDog] = useState([])
	const [quote, setQuote] = useState({})
	const [loading, setLoading] = useState(false)
	const [subscription, setSubscription] = useState(null)
	const [fontsLoaded] = useFonts({
		Montserrat_500Medium,
	})

	useEffect(() => {
		generateDog()
		generateQuote()
	}, [])

	useEffect(() => {
		Accelerometer.setUpdateInterval(1000)
		subscribe()
		return () => unsubscribe()
	}, [])

	useEffect(() => {
		if (isShakingEnough(data)) {
			generateDog()
			generateQuote()
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

	const generateDog = () => {
		setLoading(true)
		fetch(`https://random.dog/woof.json`)
			.then((res) => res.json())
			.then((data) => setDog(data))
			.finally(() => setLoading(false))
	}
	const generateQuote = () => {
		setLoading(true)
		fetch('http://api.quotable.io/random')
			.then((res) => res.json())
			.then((data) => setQuote(data))
			.finally(() => setLoading(false))
	}



	const isShakingEnough = (data) => {
		const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
		return totalForce > 1.78
	}

	if (loading || !fontsLoaded) {
		return <ActivityIndicator />
	}

	return (
		<>
		
		<ScreenBackground source={require('../assets/background.jpg')}>
			<MainView >
			<Animation source={require('../assets/dog.gif')} />
				<View style={{backgroundColor: '#ffffff8C', margin: '5px', padding: '5px', border: 'solid 2px black'}}>
					<MovieView>
						<MovieImage source={{uri: dog.url }} />
					</MovieView>
					<QuoteText style={{ fontFamily: 'Montserrat_500Medium' }}>
						{quote.content}
					</QuoteText>
					<Text style={{ fontFamily: 'Montserrat_500Medium', fontStyle: 'italic' }}>Author: {quote.author}</Text>
				</View>
			</MainView>
			</ScreenBackground>
		</>
	)
}

export default Dogs
