import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import ShakeAPI from './components/ShakeAPI'
import Header from './components/Header'
import Footer from './components/Footer'

const Container = styled.View`
	flex: 1;
 	align-items: center;
	background-color: #F8EDED;
 	padding: 8px;
	position: relative;
	min-height: 100%;
`

const App = () => {
	return (
		<Container>
			<Header></Header>
			<ShakeAPI></ShakeAPI>
			<Footer></Footer>
		</Container>
	);
};

export default App
