import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
	flex: 1;
	background-color: #111111;
	justify-content: center;
	align-items: center;
`

const Title = styled.Text`
	font-size: 24px;
	color: #eabd91;
	padding: 2em;
`

const Heading = styled.Text`
	font-size: 28px;
	color: #eabd91;
	display: flex;
`

const ButtonAPI = styled.TouchableOpacity`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background: #eabc91;
`

const ButtonText = styled.Text`
	align-self: center;
	padding-top: 70px;
	font-size: 35px;
`

const App = () => {
	const [joke, setJoke] = useState([])
	const [loading, setLoading] = useState(false)

	const getJoke = () => {
		setLoading(true)
		fetch('https://dad-jokes.p.rapidapi.com/random/joke', {
			method: 'GET',
			headers: {
				'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
				'X-RapidAPI-Key': 'db35346aa2msh919f5d80553974bp1ec615jsn5e12fad1cdd0',
			},
		})
			.then((response) => response.json())
			.then((data) => setJoke(data.body))
			.catch((error) => console.log(error))
			.finally(() => setLoading(false))
	}

	return (
		<Container>
			<Heading>Are you up for a dad joke?</Heading>
			{joke.map((item) => (
				<Title>{item.setup}</Title>
			))}
			<ButtonAPI onPress={getJoke}>
				<ButtonText>TAP</ButtonText>
			</ButtonAPI>
			{joke.map((item) => (
				<Title>{item.punchline}</Title>
			))}
		</Container>
	)
}

export default App
