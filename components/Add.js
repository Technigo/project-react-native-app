import React, { useState } from 'react'
import { Text, Button, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import styled from 'styled-components/native';


const Main = styled.View`
flex:1;
margin-bottom: 70px;

`

const Input = styled.TextInput`
border: solid grey 1px;
margin-bottom: 10px;
padding: 10px;
border-radius: 10px;

`



export default function Add({submitHandler}) {
    const [text, setText] = useState()

    const changeHandler = (val) => {
        setText(val)
    }
    return(
        <Main>
            <Input
                placeholder='add to the list ...'
                onChangeText={(val) => changeHandler(val)}
            />
            <TouchableOpacity onPress={() => submitHandler(text)}  style={styles.addButton}>
            <Text style={styles.appButtonText}>ADD</Text>
            </TouchableOpacity>
        </Main>



    )
}


const styles = StyleSheet.create({
    addButton: {
        backgroundColor: "#009688",
        width:100,
        padding: 10,
        marginLeft:100,
        marginBottom:20,
        textAlign: 'center',
    },
    appButtonText: {
        color:'white',

    }
})