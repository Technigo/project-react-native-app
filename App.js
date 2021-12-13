import React from 'react'
import styled from 'styled-components/native'
import RandomDog from './components/RandomDogApi'
import ShareDog from './components/ShareDog'
import Footer from './components/Footer'

const Container = styled.View`
	flex: 1;
	display: flex;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
	width: 100%;
`

const App = () => {

	return (
		<Container>
			<RandomDog/>
			<ShareDog/>
			<Footer/>
		</Container>
	)
}

export default App;
