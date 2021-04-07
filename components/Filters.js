import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const Filters = ({filter, setFilter, glutenFilter, setGluteFilter, calloriesFilter, setCalloriesFilter}) => {
  const onPress = () => setFilter(!filter)
  const glutenToggle = () => setGluteFilter(!glutenFilter)
  const calloriesToggle = () => setCalloriesFilter(!calloriesFilter)
  return (
   <FiltersWrapper> 
    <ButtonIngredients 
      filter={filter}
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

  </FiltersWrapper> 
  )

}
export default Filters
const FiltersWrapper = styled.View `
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: gray;
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
  background-color: ${props => (props.filter? "#6e8c6c" : "#ccc")};
`
const ButtonGluten = styled(Button) `
  background-color: ${props => (props.glutenFilter? "#6e8c6c" : "#ccc")}
`
const ButtonCallories = styled(Button) `
  background-color: ${props => (props.calloriesFilter? "#6e8c6c" : "#ccc")};
`