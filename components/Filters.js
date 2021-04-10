import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const Filters = ({ ingredientsFilter, setIngredientsFilter, glutenFilter, setGluteFilter, calloriesFilter, setCalloriesFilter, lactoseFilter, setLactoseFilter, peanutFilter, setPeanutFilter }) => {
  const onPress = () => setIngredientsFilter(!ingredientsFilter)
  const glutenToggle = () => setGluteFilter(!glutenFilter)
  const calloriesToggle = () => setCalloriesFilter(!calloriesFilter)
  const lactoseToggle = () => setLactoseFilter(!lactoseFilter)
  const peanutToggle = () => setPeanutFilter(!peanutFilter)
  return (
    <>
      <Heading>Ingredients</Heading>
      <FiltersWrapper>
        <ButtonIngredients
          ingredientsFilter={ingredientsFilter}
          onPress={onPress}>
          <Text>5 ingredients</Text>
        </ButtonIngredients>
      </FiltersWrapper>
      <Heading>Allergies</Heading>
      <FiltersWrapper>
        <ButtonGluten
          glutenFilter={glutenFilter}
          onPress={glutenToggle}>
          <Text>gluten-free</Text>
        </ButtonGluten>
        <ButtonLactose
          lactoseFilter={lactoseFilter}
          onPress={lactoseToggle}>
          <Text> dairy-free</Text>
        </ButtonLactose>
        <ButtonPeanut
          peanutFilter={peanutFilter}
          onPress={peanutToggle}>
          <Text> peanut-free</Text>
        </ButtonPeanut>

      </FiltersWrapper>
      <Heading>Callories per 100 gramms</Heading>
      <FiltersWrapper>
        <ButtonCallories
          calloriesFilter={calloriesFilter}
          onPress={calloriesToggle}>
          <Text> 150 callories</Text>
        </ButtonCallories>
      </FiltersWrapper>
    </>
  )

}
export default Filters
const FiltersWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  background: #1D1E20;
  padding: 10px;
`

const Button = styled.TouchableOpacity`
  width: 120px;  
  height: 40px;
  border: none;
  font-size: 16px;
  border-radius: 20px;
  padding: 5px;
  margin: 3px;
  justify-content: center;
  align-items:center;
`
const ButtonIngredients = styled(Button)`
  background-color: ${props => (props.ingredientsFilter ? "#6e8c6c" : "#ccc")};
`
const ButtonGluten = styled(Button)`
  background-color: ${props => (props.glutenFilter ? "#6e8c6c" : "#ccc")}
`
const ButtonLactose = styled(Button)`
  background-color: ${props => (props.lactoseFilter ? "#6e8c6c" : "#ccc")};
`
const ButtonPeanut = styled(Button)`
  background-color: ${props => (props.peanutFilter ? "#6e8c6c" : "#ccc")};
`
const ButtonCallories = styled(Button)`
  background-color: ${props => (props.calloriesFilter ? "#6e8c6c" : "#ccc")};
`


const Heading = styled.Text`
font-size: 16px;
margin: 2px 2px 2px 15px;
color: white;
`