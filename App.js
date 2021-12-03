import React, {useState} from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'
import { useFonts } from 'expo-font';
import { Image, ImageBackground } from "react-native"

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import ShakeFox from './components/ShakeFox'
import ShakeDog from './components/ShakeDog'
import ShakeCat from './components/ShakeCat'

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const Title = styled.Text`
	font-family: 'BubbleShine';
	font-size: 50px;
	color: black;
	text-align: center;
`
const FrontImage = styled.Image`
	height: 280px;
 	width: 280px;
	margin-top: 20px;
`
const StartButton = styled.TouchableOpacity`
	width: 100px;
    margin: 20px;
	padding: 10px;
	border-radius: 10px;
    background-color: lightgreen;
`
const EnterText = styled.Text`
	text-align: center;
	font-weight: 700;
`

const Drawer = createDrawerNavigator()

const App = () => {

	const [onHome, setOnHome] = useState(true)

	const [loaded] = useFonts({
		BubbleShine: require('./assets/fonts/BubbleShine.ttf'),
	  });
	  
	  if (!loaded) {
		return null;
	  }

	return (
		<>
			{onHome ? (
			<Container>
				<Title>RANDOM</Title><Title>ANIMAL SHAKER</Title> 
				<FrontImage source={require('./assets/front.gif')} />
				<StartButton onPress={() => setOnHome(false)}><EnterText>Enter</EnterText></StartButton>
			</Container>
			) : (
			<NavigationContainer>
				<Drawer.Navigator initialRouteName="Foxes">	
					<Drawer.Screen name="Foxes" component={ShakeFox} 
						options={{		
							drawerIcon: () => (
								<Ionicons name="logo-firefox" />
						)}}
					/>
					<Drawer.Screen name="Dogs" component={ShakeDog}
						options={{		
							drawerIcon: () => (
								<Ionicons name="paw-outline" />
						)}}
					/>
					<Drawer.Screen name="Cats" component={ShakeCat}
						options={{		
							drawerIcon: () => (
								<Ionicons name="logo-octocat" />
						)}}
					/>
				</Drawer.Navigator>
			</NavigationContainer>
			)}
		</>
	)
};

export default App;
