import React from 'react'
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

const Text = styled.Text`
  font-size: 14px;
  color: white;
`

const Button = styled.TouchableOpacity`
  width: 120px;  
  height: 40px;
  border: 3px solid #6e8c6c;
  font-size: 16px;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
  justify-content: center;
  align-items:center;
`