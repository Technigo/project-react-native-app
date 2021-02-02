import React, { useState } from 'react'
import { Vibration } from 'react-native'
import styled from 'styled-components/native'

import backgroundImage from '../assets/background-fruits.png'

const mealsArray = [
  {
    meals: 'GREEK SALAD',
    picture: require('../assets/grekisksallad.jpeg')
  },
  {
    meals: 'CLUB SANDWICH',
    picture: require('../assets/clubsandwich.jpeg')
  },
  {
    meals: 'CHICKEN STEW',
    picture: require('../assets/kycklinggryta.jpeg')
  },
  {
    meals: 'CHICKEN PASTA',
    picture: require('../assets/kycklingpasta.jpeg')
  },
  {
    meals: 'BOLOGNESE',
    picture: require('../assets/kottfarssas.jpeg')
  },
  {
    meals: 'LASAGNE',
    picture: require('../assets/lasagne.jpeg')
  },
  {
    meals: 'SALMON SALAD',
    picture: require('../assets/laxsallad.jpeg')
  },
  {
    meals: 'PASTA PESTO',
    picture: require('../assets/pastapesto.jpeg')
  },
  {
    meals: 'STEAK STEW',
    picture: require('../assets/steakstew.jpeg')
  },
  {
    meals: 'PANCAKES',
    picture: require('../assets/pannkakor.jpeg')
  },
  {
    meals: 'PIZZA',
    picture: require('../assets/pizza.jpeg')
  },
  {
    meals: 'QUESADILLA',
    picture: require('../assets/quesadilla.jpeg')
  },
  {
    meals: 'HAMBURGER',
    picture: require('../assets/hamburgare.jpeg')
  }

]

const MealList = () => {
  const [meal, setMeals] = useState({})

  const setRandomMeals = () => {
    const allTheMeals =
      mealsArray[Math.floor(Math.random() * mealsArray.length)]
    setMeals(allTheMeals)
    Vibration.vibrate()
  }

  return (
    <Container>
      <BackgroundImageContainer
        source={backgroundImage}>
        <ButtonContainer
          onPress={(setRandomMeals()
          )}
        >
          <ButtonText>FIND MEAL</ButtonText>
        </ButtonContainer>
        <MealContainer>
          <MealText>{meal.meals}</MealText>
          <MealImage
            source={meal.picture} />
        </MealContainer>
      </BackgroundImageContainer>
    </Container>
  )
}

const BackgroundImageContainer = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`

const MealText = styled.Text`
  margin-top: 10px
  padding: 50px;
  text-align: center;
  font-size: 35px;
  color: orange;
  font-weight: bold;
`


const Container = styled.View`
flex: 1;
`

const ButtonContainer = styled.TouchableOpacity`
margin: 100px;
top: 100px;
align-items: center;
justify-content: center;
background: green;
width: 200px;
border-radius: 50px;
`

const ButtonText = styled.Text`
padding: 25px;
text-align: center;
font-size: 24px;
color: white;
font-weight: bold;
`

const MealImage = styled.Image`
bottom: 35px;
width: 300px;
height: 200px;
margin-left: 55px;
justify-content: center;
`

export default MealList