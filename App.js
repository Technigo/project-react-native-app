import React, { useState, useEffect } from "react"
import { View, Text, Button, Image, Wrapper } from "react-native"
import styled from 'styled-components/native'

import LottieView from 'lottie-react-native'

import { DOG_URL } from "./utils/urls"



export default function App() {

	const [dog, setDog] = useState({})

    const generateDog = () => {
    fetch(DOG_URL)
    .then(response => response.json())
    .then(data => setDog(data[0]))
    }

    useEffect(() => {
        generateDog()
    }, [])

console.log(dog)

	return (
		<StyledView>


		{/* <LottieView 
		source={require('./assets/animation.json')} 
		autoPlay/> */}


		{/* {dog[0].bred_for 
			: 
			<Text>{dog[0].bred_for</Text>
			<Image source={dog.url} /> 
			? 
			<Text>{dog.weight}</Text>} */}

			<WrapThis>
			<Title>Dog Finder</Title>
				<DogImage
				source={dog.url} />

				{/* <Text>{dog.weight}</Text>

				<Text>{dog.bred_for}</Text> */}


				<StyledButton onPress={generateDog}>
				<TextButton>New doggie</TextButton>
				</StyledButton>
			</WrapThis>
		</StyledView>
	)
}

//Styled components

const StyledView = styled.View`
flex: 1;
background-color: papayawhip;
align-items: "center";
justify-content: "space-around";
padding: 10px;
`

const Title = styled.Text`
color: #ad8850;
font-size: 28px;
margin-bottom: 1em;
font-weight: bold;
`

const WrapThis = styled.View`
background: #e7cba499;
padding: 2em;
border-radius: 40;
text-align: center;
width: 100%;
align-items: center;
`

const DogImage = styled.Image`
width: 290;
height: 290;
justify-content: center;
text-align: center;
border-radius: 10px;
`

const StyledButton = styled.TouchableOpacity`
  background-color: white;
  border-radius: 10px;
  padding:20px;
  margin-top: 40px
`

const TextButton = styled.Text`
  font-size: 18px;
  color: #C68507;
  `

