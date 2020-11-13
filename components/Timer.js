import React, { useEffect, useState } from 'react'
import {Text, View, Button, TextInput, TouchableOpacity, Modal, Alert} from 'react-native'
import styled from 'styled-components/native'

import {NewButton, ButtonText, Container, Number, ButtonContainer} from './StyledAppComponents'


export const Timer = ({route, navigation}) => {
    const {routeTime} = route.params;

    const [time, setTime] = useState(routeTime)
    const [count, setCount] = useState(time);
    const [counter, setCounter] = useState(false)
    const [seconds, setSeconds] = useState(0)

    const [isPressed, setIsPressed] = useState(false)

    const countDown = () =>{
        setCounter(true)
        setSeconds(59)
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
                seconds === 59 ? setCount(count - 1) : ''
                const secondsInterval = setInterval(()=> {
                        seconds > 0 ? setSeconds(seconds - 1) : setSeconds(59)
                }, 1000);
                
                return () => {clearInterval(secondsInterval)}}
            else if (count === 0){
            const lastSecondsInterval = setInterval(()=> {
                seconds > 0 ? setSeconds(seconds - 1) : setSeconds(0)
        }, 1000);
        
        return () => {clearInterval(lastSecondsInterval)}}
        }
        },[seconds]);
        

    console.log('run every second', count)

   

    return (
        <Container>

            
    <Number>{count < 10 ? "0" :""}{count}:{seconds < 10 ? "0" :""}{seconds}</Number>
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

