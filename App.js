import React, { useState, useEffect } from "react"
import { View, Text, Button, Image, Wrapper } from "react-native"
import styled from 'styled-components/native'

import LottieView from 'lottie-react-native'

import { DOG_URL } from "./utils/urls"

import Footer from './components/Footer'


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

// console.log(dog?.breeds[0]?.name)
console.log(dog)

	return (
		<StyledView>

		{/* <LottieView
		source={require('./assets/animation.json')}
		autoPlay/> */}

			<WrapThis>
			<Title>Dog of the Day</Title>
				<DogImage
				source={dog.url} />

				<DogInfo>{dog.breeds ? dog.breeds[0]?.name : ''}</DogInfo>
				<DogInfo>{dog.breeds ? dog.breeds[0]?.bred_for : ''}</DogInfo>

				<DogInfo>{dog.breeds ? dog.breeds[0]?.breed_group : ''}</DogInfo>
				<DogInfo>{dog.breeds ? dog.breeds[0]?.life_span : ''}</DogInfo>
				<DogInfo>{dog.breeds ? dog.breeds[0]?.temperament : ''}</DogInfo>
				{/* <DogInfo>{dog.breeds ? dog.breeds[0]?.height : ''}</DogInfo> */}


				<StyledButton onPress={generateDog}>
					<TextButton>New doggie</TextButton>
				</StyledButton>

			</WrapThis>
			<Footer />
		</StyledView>
	)
}

//Styled components

const StyledView = styled.View`
flex: 1;
background-color: papayawhip;
align-items: center;
justify-content: space-around;
padding: 10px;
`

const Title = styled.Text`
color: #ad8850;
font-size: 28px;
margin-bottom: 1em;
font-weight: bold;
`

const DogInfo = styled.Text`
font-size: 16px;
color: #ad8850;
`

const WrapThis = styled.View`
background: #e7cba499;
padding: 2em;
border-radius: 10%;
text-align: center;
width: 100%;
align-items: center;
`

const DogImage = styled.Image`
width: 290px;
height: 290px;
justify-content: center;
text-align: center;
border-radius: 7%;
margin-bottom: 5%;
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

