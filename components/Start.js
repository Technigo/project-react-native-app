import React from 'react'
import styled from 'styled-components/native'
import { ShowTimeOutTip } from './ShowTimeOutTip'

const image = { uri: "https://images.pexels.com/photos/5477696/pexels-photo-5477696.jpeg" };

const ImageBackground = styled.ImageBackground`
	flex: 1;
	align-items: center;
	padding-top: 75px;
`

const TextContainer = styled.View`
	justify-content: center;	
	background-color: black;
	opacity: 0.70;
	padding: 15px 25px 40px 25px;
	width: 100%;
`

const Title = styled.Text`
	font-size: 54px;
	text-align: center;
	color: magenta;
`

const MyAppText = styled.Text`
	font-size: 20px;
	text-align: center;
	color: white;
	padding: 15px 40px 0 40px;
`

export const Start = () => {
	return (
		<ImageBackground source={image}>
			<TextContainer>
				<Title>Time out!</Title>
				<MyAppText>Find inspiration for your time out by shaking your phone!</MyAppText>
			</TextContainer>
			<ShowTimeOutTip />
		</ImageBackground>
	)
}
