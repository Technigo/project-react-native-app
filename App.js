import React, { useState, useEffect } from "react"
import { View, Text, Button, Image, Wrapper, ScrollView } from "react-native"
import styled from 'styled-components/native'

import LottieView from 'lottie-react-native'

import { DOG_URL } from "./utils/urls"

import Footer from './components/Footer'


{/* <LottieView
source={require('./assets/animation.json')}
autoPlay
loop
mode="normal"
src="https://assets10.lottiefiles.com/private_files/lf30_pcBP5A.json"
style={{ */}



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
			<ScrollView>
			<StyledView>
		<LottieView source={require('./assets/animation.json')}
 		style={{width: 80, height: 80, zIndex: 1, marginTop: 10}}
		autoPlay 
		loop /><Title>Dog of the Day</Title>

			<WrapThis>
			
				<DogImage
				source={{uri: dog.url}} />

			{/* {dog.breed !== 'undefined' ? <DogInfo>{dog.breeds ? ('Breed: ') + dog.breeds[0]?.name : ''}</DogInfo> : '' */}


<DogWrapper>

				<DogInfo>{dog.breeds ? ('Breed: ') + dog.breeds[0]?.name : ''}</DogInfo>
				<DogInfo>{dog.breeds ? ('Bred for: ') + dog.breeds[0]?.bred_for : ''}</DogInfo>

				<DogInfo>{dog.breeds ? ('Breed Group: ') + dog.breeds[0]?.breed_group : ''}</DogInfo>
				<DogInfo>{dog.breeds ? ('Life span: ') + dog.breeds[0]?.life_span : ''}</DogInfo>
				<DogInfo>{dog.breeds ? ('Temperament: ') + dog.breeds[0]?.temperament : ''}</DogInfo>

</DogWrapper>

				<StyledButton onPress={generateDog}>
					<TextButton>New doggie</TextButton>
				</StyledButton>
			
			</WrapThis>
			<Footer />
			</StyledView>
			</ScrollView>
		</StyledView>
	)
}

//Styled components

const StyledView = styled.View`
flex: 1;
background-color: papayawhip;
padding: 0px;
border-radius: 10;
`

const TextButton = styled.Text`
font-size: 16px;
color: #C68507;
`

const Title = styled.Text`
color: #ad8850;
font-size: 28px;
margin-bottom: 20px;
font-weight: bold;
position: absolute;
top: 60px;
right: 60px;
`

const DogInfo = styled.Text`
font-size: 16px;
color: #ad8850;
`

const WrapThis = styled.View`
background: #e7cba499;
padding: 10px;
border-radius: 1;
text-align: center;
align-items: center;
margin-top: 30px;
width: 100%;
align-items: center;
`

const DogWrapper = styled.View`
text-align: left;
width: 300;
`

const DogImage = styled.Image`
width: 300;
z-index: 2;
height: 200;
justify-content: center;
border-radius: 7;
margin-top: 10%;
margin-bottom: 5%;
`

const StyledButton = styled.TouchableOpacity`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin-top: 25px
`
