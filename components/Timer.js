import React, { useEffect, useState } from 'react'
import {Text, View, Button, TextInput, TouchableOpacity, Modal, Alert} from 'react-native'
import styled from 'styled-components/native'

import {NewButton, ButtonText, Container, Number, ButtonContainer} from './StyledAppComponents'


export const Timer = ({route, navigation}) => {
    const {routeTime} = route.params;

    const [time, setTime] = useState(routeTime)
    const [count, setCount] = useState(time);
    const [counter, setCounter] = useState(false)

    const [isPressed, setIsPressed] = useState(false)

    const countDown = () =>{
        setCounter(true)
        setCount(count-1)
    }

    const resetCount = () =>{
        setCounter(false)
        setCount(time)
    }

    const stopCount = () =>{
        setCounter(false)
    }


    useEffect(() => {
        if(counter) {
            if (count > 0){
            const interval = setInterval(()=> {
                setCount(count - 1)
            }, 1000);
            return () => clearInterval(interval)}
        }
        },[count]);
        

    console.log('run every second', count)

   

    return (
        <Container>

            
            <Number>00:{count < 10 ? "0" :""}{count}</Number>
            <ButtonContainer>
            <NewButton onPress={() => {
                isPressed ? stopCount() : countDown(), 
                setIsPressed(!isPressed) 
                }} title="Start">
                <ButtonText>{isPressed ? "Pause" : "Start"}</ButtonText>
            </NewButton>

            <NewButton onPress={() => { 
                resetCount(), 
                setIsPressed(false)
                }} title="Reset">
                <ButtonText>Start over</ButtonText>
            </NewButton>
            </ButtonContainer>

        </Container>
    )
}

