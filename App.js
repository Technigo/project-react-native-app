import React, { useState } from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Ghibli from './components/Ghibli';
import Dogs from './components/Dogs';

const Animation = styled.Image`
	width: 150px;
	height: 150px;
`
const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`
const Title = styled.Text`
	font-size: 22px;
	color: #133337;
`
const StartButton = styled.TouchableOpacity`
	width: 100px;
  margin: 20px;
	padding: 10px;
	border-radius: 10px;
  background-color: #133337;
`
const EnterText = styled.Text`
	color: #fff;
	text-align: center;
`



const App = () => {

	const Drawer = createDrawerNavigator();
	const [onHome, setOnHome] = useState(true)

	return (
		<>
		{onHome ? 
		(<Container>
			<Animation source={require('./assets/morty.gif')} />
			<Title>Are you ready to shake?</Title>
			<StartButton onPress={() => setOnHome(false)}><EnterText>Enter</EnterText></StartButton>
		</Container>) 
		: (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Ghibli">
				<Drawer.Screen name="Ghibli - Shake your phone!" component={Ghibli} />
				<Drawer.Screen name="Dogs - Shake your phone!" component={Dogs} />
			</Drawer.Navigator>
		</NavigationContainer>
	)};
	</>
	)
};

export default App;
