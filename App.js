import React, {useState} from 'react';
import styled from 'styled-components/native';
import { View, Text, Image, Button } from "react-native"

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// import ButtonApi from './components/ButtonApi';
import Header from './components/Header'
import Home from './components/Home'
import ShakeFox from './components/ShakeFox'
import ShakeDog from './components/ShakeDog'
import ShakeCat from './components/ShakeCat'

const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`;

const Title = styled.Text`
	font-size: 22px;
	color: palevioletred;
`;

const StartButton = styled.TouchableOpacity`
	width: 100px;
    margin: 20px;
	padding: 10px;
	border-radius: 10px;
    background-color: orange;
`
const EnterText = styled.Text`
	text-align: center;
`

const Drawer = createDrawerNavigator()

const App = () => {
	/* 	return (
		<Container>
			<Header headerTitle="App headers title"/>
			<ShakeApi />
		</Container>
	); */

	/* const homeonOn = true */
	const [onHome, setOnHome] = useState(true)

	return (
		<>
		{onHome ? 
		(<Container>
			<Title>Welcome to the Animal Shaker</Title>
			<StartButton onPress={() => setOnHome(false)}><EnterText>Enter</EnterText></StartButton>
		</Container>) 
		: (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Home">
				
				<Drawer.Screen name="Foxes" component={ShakeFox} 
					options={{		
						drawerIcon: ({ }) => (
						<Image
							source={require('./assets/fox-icon.svg')}
							style={{ height: 15, width: 15 }}
						/>
					)}}
				/>
				<Drawer.Screen name="Dogs" component={ShakeDog}
					options={{		
						drawerIcon: ({ }) => (
						<Image
							source={require('./assets/dog-icon.svg')}
							style={{ height: 15, width: 15 }}
						/>
					)}}
				/>
				<Drawer.Screen name="Cats" component={ShakeCat}
					options={{		
						drawerIcon: ({ }) => (
						<Image
							source={require('./assets/cat-icon.svg')}
							style={{ height: 15, width: 15 }}
						/>
					)}}
				/>
		  	</Drawer.Navigator>
		</NavigationContainer>
		)}
	</>
	  )

};

export default App;
