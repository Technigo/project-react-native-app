import React, { useState, useEffect } from 'react'
import Loadingspinner from './Loadingspinner'
import styled from 'styled-components/native'

const RandomActivity = () => {
	const [activity, setActivity] = useState([])
	const [loading, setLoading] = useState(false)

	const getActivity = () => {
		setLoading(true)
		fetch('https://www.boredapi.com/api/activity')
			.then((response) => response.json())
			.then((data) => setActivity(data))
			.catch((error) => console.log(error))
			.finally(() => setLoading(false))
	}

	useEffect(() => {
		getActivity()
	}, [])

	return (
		<>
			<Heading>Are you bored and need some inspiration?</Heading>
			<ButtonAPI onPress={getActivity}>
				<ButtonText>TAP</ButtonText>
			</ButtonAPI>
			<Title>
				{loading && <Loadingspinner />}
				{!loading && activity.activity}
			</Title>
		</>
	)
}

//Styled components
const Title = styled.Text`
	font-size: 24px;
	color: #eabd91;
	padding: 32px;
	text-align: center;
	position: absolute;
	bottom: 75px;
`
const Heading = styled.Text`
	display: flex;
	color: #eabd91;
	font-size: 32px;
	padding: 15px;
	position: absolute;
	text-align: center;
	position: absolute;
	top: 75px;
`

const ButtonAPI = styled.TouchableOpacity`
	width: 200px;
	height: 200px;
	border-radius: 100px;
	background: #eabc91;
	position: absolute;
	bottom: 200px;
`

const ButtonText = styled.Text`
	align-self: center;
	padding-top: 70px;
	font-size: 35px;
`

export default RandomActivity
