import React, { useState, useEffect } from "react"
import { View, Text, Button, Image } from "react-native"
import styled from 'styled-components/native'

import LottieView from 'lottie-react-native'

import Header from "./components/Header"
import Counter from "./components/Counter"

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

		<Header title="Dog Finder" />
		{/* <LottieView 
		source={require('./assets/animation.json')} 
		autoPlay/> */}

		<Counter />


		{/* {dog.url : <Image source={dog.url} /> ? <Text>{dog.weight}</Text>} */}

		<DogImage
        source={dog.url} />

		<Text>{dog.weight}</Text>

        <Text>{dog.bred_for}</Text>


		<Button title="New dog" onPress={generateDog} />

		</StyledView>
	)
}


//Styled components

const StyledView = styled.View`
flex: 1;
background-color: papayawhip;
align-items: "center";
justify-content: "space-around";
`

const DogImage = styled.Image`
width: 200;
height: 200;
justify-content: center;
text-align: center;
`

