import React, { useState, useEffect } from 'react'
import ShowActivity from './components/ShowActivity'
import styled from 'styled-components/native'

const Container = styled.View`
	flex: 1;
	background-color: #111111;
	justify-content: center;
	align-items: center;
`

const App = () => {
	return (
		<Container>
			<ShowActivity />
		</Container>
	)
}

export default App
