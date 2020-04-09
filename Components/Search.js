import React from 'react'
import styled from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native';
import { Button, View, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useParams } from 'react-router-dom'

const Container = styled.View`
  flex: 1;
  background-color: #FA4960;
  justify-content: center;
  align-items: center;
`
const NailTitle = styled.Text`
  font-size: 24px;
  color: #3B2F90;
  margin-bottom: 20px;
  font-weight:bold;
`
const SmallTitle = styled.Text`
  font-size: 16px;
  color: #3B2F90;
  margin-bottom: 20px;
`

const Title = styled.Text`
  font-size: 16px;
  color: #f194ff;
`
const MyTouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  background-color: #3B2F90;
  border: 2px solid;
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
  `
  const MyTextInput = styled.TextInput`
  margin: 10px;
  padding: 10px;
  width: 100; 
  border-color: gray; 
  border-width: 1;
  background-color: white; 
  text-align: center;
  `

export const Search = ({navigation}) => {
  // const {MyTextInput}=useParams()

  const [value, onChangeText] = React.useState('Location 📍')
  return (
    <Container>
    <NailTitle> NEED A MANI OR A PEDI? </NailTitle>
    <SmallTitle>Let's find the best salon near you! </SmallTitle>
      <MyTextInput 
       onChangeText = {text => onChangeText(text)} 
       value = {value}/>
      <MyTouchableOpacity
       onPress={() => navigation.navigate('Results', {location: value})}>
        <Title> S.O.S 💅🏽 </Title>
      </MyTouchableOpacity>
    </Container>
  )
}