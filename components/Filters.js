import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const Filters = ({filter, setFilter}) => {
  const onPress = () => setFilter(!filter)
  console.log(filter)
  return (
   <> 
    <Button 
    filter={filter}
    onPress={onPress}
    >
      <Text>5 ingredients</Text>
    </Button>
  </> 
  )

}
export default Filters

const Button = styled.TouchableOpacity`
  width: 120px;  
  height: 40px;
  background-color: ${props => (props.filter? "#ffadad" : "#ccc")};
  border: none;
  font-size: 16px;
  border-radius: 20px;
  padding: 10px;
`