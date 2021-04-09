import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const Filters = ({ingredientsFilter, setIngredientsFilter, glutenFilter, setGluteFilter, calloriesFilter, setCalloriesFilter}) => {
  const onPress = () => setIngredientsFilter(!ingredientsFilter)
  const glutenToggle = () => setGluteFilter(!glutenFilter)
  const calloriesToggle = () => setCalloriesFilter(!calloriesFilter)
  return (
   <FiltersWrapper horizontal={true}> 
    <ButtonIngredients 
      ingredientsFilter={ingredientsFilter}
      onPress={onPress}>
      <Text>5 ingredients</Text>
    </ButtonIngredients>
    <ButtonGluten
      glutenFilter={glutenFilter}
      onPress={glutenToggle}>
      <Text>gluten-free</Text>
    </ButtonGluten>

    <ButtonCallories
      calloriesFilter={calloriesFilter}
      onPress={calloriesToggle}>
      <Text> 150 callories</Text>
    </ButtonCallories>
    <ButtonCallories
      calloriesFilter={calloriesFilter}
      onPress={calloriesToggle}>
      <Text> 150 callories</Text>
    </ButtonCallories>
    <ButtonCallories
      calloriesFilter={calloriesFilter}
      onPress={calloriesToggle}>
      <Text> 150 callories</Text>
    </ButtonCallories>

  </FiltersWrapper> 
  )

}
export default Filters
const FiltersWrapper = styled.View `
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  background: black;
  padding: 10px;
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
`
const ButtonIngredients = styled(Button) `
  background-color: ${props => (props.ingredientsFilter? "#6e8c6c" : "#ccc")};
`
const ButtonGluten = styled(Button) `
  background-color: ${props => (props.glutenFilter? "#6e8c6c" : "#ccc")}
`
const ButtonCallories = styled(Button) `
  background-color: ${props => (props.calloriesFilter? "#6e8c6c" : "#ccc")};
`