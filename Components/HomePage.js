import React from 'react'

//import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
import { Text } from 'react-native';


const HomePage = ({navigation}) => {
  return (
    <Button
    onPress= {() => navigation.navigate('Movie list')}
    >
      <Text>Now Playing</Text>


    </Button>
  )
}
export default HomePage

const Button = styled.TouchableOpacity `
    align-items: center;
    background-color: #DDDDDD;
    padding: 10px;
`
