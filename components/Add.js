import React, { useState } from 'react'
import { Text, Button, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import styled from 'styled-components/native';


const Main = styled.View`
flex:1;
margin-bottom: 70px;

`

const Input = styled.TextInput`
padding:10px;
`
const InputBox = styled.View`
border: solid grey 1px;
border-radius:10px;
height:40px;
margin-bottom: 10px;
`

const ButtonBox = styled.View`
border-radius: 10px;
background-color: coral;
width:200px;
padding: 10px;
margin-left:50px;
margin-bottom:20px;
text-align: center;
font-weight:bold;
height:40px;
align-items:center;
`
const ButtonText = styled.Text`
color: white;
font-weight:bold;

`

export default function Add({submitHandler}) {
    const [text, setText] = useState()

    const changeHandler = (val) => {
        setText(val)
    }
    return(
        <Main>
            <InputBox>
            <Input
                placeholder='add at least 4 characters...'
                onChangeText={(val) => changeHandler(val)}
            /></InputBox>
            <ButtonBox>
            <TouchableOpacity onPress={() => submitHandler(text)} >
            <ButtonText>ADD</ButtonText>
            </TouchableOpacity>
            </ButtonBox>
        </Main>



    )
}


