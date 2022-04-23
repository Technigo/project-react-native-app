import React from 'react'
import styled from 'styled-components/native'

import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import quotes from './reducers/quotes'


import * as Sharing from 'expo-sharing'
import ShareExample from './components/ShareExample'
import FetchQuote from './components/FetchQuote'

const reducer = combineReducers({
	quotes: quotes.reducer
})

const store = configureStore({ reducer })


const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
	padding: 60px 20px;
`

const Title = styled.Text`
	font-size: 24px;
	color: palevioletred;
`

const App = () => {
	return (
		<Provider store={store}>
			<Container>
				<Title>💖</Title>
				<FetchQuote />
				<ShareExample />
			</Container>
		</Provider>
	)
}

export default App
