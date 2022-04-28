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
	padding: 2em;
	text-align: center;
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

export default RandomActivity
