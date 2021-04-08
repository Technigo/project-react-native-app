import React from 'react'
import { Text } from'react-native'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native';


const GoBackButton = () => {
  const navigation = useNavigation()
  return(

    <Button onPress={() => navigation.goBack()}>
      <Text>Go Back</Text>
    </Button>
  )
}
export default GoBackButton

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