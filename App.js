import React from 'react'
import styled from 'styled-components/native'
import { SensorComponent } from './components/SensorComponent'

const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`

const Title = styled.Text`
	font-size: 24px;
	color: palevioletred;
`

const App = () => {
	return (
		<Container>
			<Title>Time for a time out?</Title>
			<Title>⌛️⌛️⌛️</Title>
			<SensorComponent></SensorComponent>
		</Container>
	)
}

export default App
