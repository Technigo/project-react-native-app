import React from 'react'
import styled from 'styled-components/native'

import Shakecomponent from './components/ShakeComponent'

const Container = styled.View`
	flex: 1;
	background-color: #B1BCA0;
	justify-content: space-evenly;
	align-items: center;
`


const App = () => {

	return (
		<Container>
			<Shakecomponent />
		</Container>
	)
}

export default App
