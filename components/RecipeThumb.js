import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'


const RecipeThumb = ({item}) => {
  const navigation= useNavigation()
  //console.log(item)
  const calories = Math.round((Number(item.recipe.calories)/Number(item.recipe.totalWeight))*100)
  return (
    <Container>
      <ImageContainer>
        <ImageCard source={{uri: item.recipe.image}}/>
      </ImageContainer>
    <TextContainer>
        <Title>{item.recipe.label}</Title>
        <DetailsContainer>
          <DetailsText>{calories} ccal |</DetailsText>
          <DetailsText>{item.recipe.source}</DetailsText>
        </DetailsContainer>
        <Button onPress={() => navigation.navigate('Recipe', { caption: `${item.recipe.uri}` })}>
          <Text>Go to recipe</Text>
        </Button>
    </TextContainer> 
    </Container>
  )
}

export default RecipeThumb

const Container = styled.View `
  position: relative;
  background-color: gray;
`
const ImageContainer = styled.View `
  width: 100%;
  background-color: black;
`
const TextContainer = styled.View `
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 5px;
`
const DetailsContainer = styled.View `
  flex-direction: row;
`
const ImageCard = styled.Image `
  width: 100%;
  height: 300px;
  opacity: 0.7;
`
const Title = styled.Text `
  color: white;
  font-size: 22px;
  font-weight: bold;
  font-family: Arial;
`
const DetailsText = styled.Text `
  font-size: 16px;
  margin: 5px;
  color: white;
`

const Button = styled.TouchableOpacity`
  width: 120px;  
  height: 40px;
  border: none;
  font-size: 16px;
  border-radius: 20px;
  padding: 10px;
  margin: 3px;
  justify-content: center;
  align-items:center;
  background-color: blue;
`