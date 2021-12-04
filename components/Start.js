import React from 'react'
import styled from 'styled-components/native'
import AppLoading from 'expo-app-loading'
import { useFonts, LuckiestGuy_400Regular } from '@expo-google-fonts/luckiest-guy'
import { RobotoCondensed_400Regular } from '@expo-google-fonts/roboto-condensed'
import { ShowTimeOutTip } from './ShowTimeOutTip'

// Photo by Andrey Grushnikov from Pexels
const image = { uri: "https://images.pexels.com/photos/707676/pexels-photo-707676.jpeg" }

const ImageBackground = styled.ImageBackground`
	flex: 1;
	align-items: center;
	padding-top: 35%;
`

const TextContainer = styled.View`
	justify-content: center;	
	background-color: black;
	opacity: 0.75;
	padding: 50px 25px 40px 25px;
	width: 100%;
`

const Title = styled.Text`
	font-family: LuckiestGuy_400Regular;	
	font-size: 60px;
	text-align: center;
	color: magenta;
`

const MyAppText = styled.Text`
	font-family: RobotoCondensed_400Regular;	
	font-size: 24px;
	text-align: center;
	color: white;
	padding: 15px 40px 0 40px;
`

export const Start = () => {
	let [fontsLoaded] = useFonts({
		LuckiestGuy_400Regular,
		RobotoCondensed_400Regular,
	  });

	if (!fontsLoaded) {
	return <AppLoading />;
	} else {
	
	return (
		<ImageBackground source={image}>
			<TextContainer>
				<Title>Time out!</Title>
				<MyAppText>Find inspiration for your time out by shaking your phone!</MyAppText>
			</TextContainer>
			<ShowTimeOutTip />
		</ImageBackground>
	)}
}

