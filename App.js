import { createDrawerNavigator } from '@react-navigation/drawer'
import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Loadingspinner from './components/Loadingspinner'
import styled from 'styled-components/native'

// const Drawer = createDrawerNavigator()

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
	text-align: center;
`

const Heading = styled.Text`
	font-size: 28px;
	color: #eabd91;
	display: flex;
	position: absolute;
	top: 3em;
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
	const [activity, setActivity] = useState([])
	const [loading, setLoading] = useState(false)

	const getActivity = () => {
		setLoading(true)
		{
			loading && <Loadingspinner />
		}
		fetch('https://www.boredapi.com/api/activity')
			.then((response) => response.json())
			.then((data) => setActivity(data))
			.catch((error) => console.log(error))
			.finally(() => setLoading(false))
	}

	// function MyDrawer() {
	// 	return (
	// 		<Drawer.Navigator initialRouteName='Feed'>
	// 			<Drawer.Screen name='Feed' component={Feed} options={{ drawerLabel: 'Home' }} />
	// 			<Drawer.Screen name='Notifications' component={Notifications} options={{ drawerLabel: 'Updates' }} />
	// 			<Drawer.Screen name='Profile' component={Profile} options={{ drawerLabel: 'Profile' }} />
	// 		</Drawer.Navigator>
	// 	)
	// }

	return (
		<Container>
			<Heading>Are you bored and need some inspiration?</Heading>

			<Title>{activity.activity}</Title>

			<ButtonAPI onPress={getActivity}>
				<ButtonText>TAP</ButtonText>
			</ButtonAPI>
		</Container>
	)
}

export default App
