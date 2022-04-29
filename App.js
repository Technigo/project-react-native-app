import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import RandomActivity from './components/RandomActivity'

const Container = styled.View`
	flex: 1;
	background-color: #111111;
	justify-content: center;
	align-items: center;
`

const App = () => {
	return (
		<Container>
			<RandomActivity />
		</Container>
	)
}

export default App
