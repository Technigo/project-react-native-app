import React, { useEffect, useState } from 'react'
import {Text, View, Button, TextInput, TouchableOpacity, Modal, Alert} from 'react-native'
import styled from 'styled-components/native'

import {NewButton, ButtonText, Container, Number, ButtonContainer} from './StyledAppComponents'


export const Timer = ({route, navigation}) => {
    const {routeTime} = route.params; //Gets the time that is set in the HomeScreen

    const [minutes, setMinutes] = useState(routeTime);
    const [seconds, setSeconds] = useState(0)
    const [counter, setCounter] = useState(false)
    const [timerDone, setTimerDone] = useState(false)
    const [isPressed, setIsPressed] = useState(false)

    const startCount = () => {
        setCounter(true)
        setSeconds(seconds === 0 ? 59 : seconds - 1)
    }

    const stopCount = () => {
        setCounter(false)
    }

    const resetCount = () => {
        setCounter(false)
        setMinutes(routeTime)
        setSeconds(0)
        setTimerDone(false)
    }


    useEffect(() => {
        if(counter) {
            if (minutes > 0){
                seconds === 59 ? setMinutes(minutes - 1) : ''
                const secondsInterval = setInterval(()=> {
                        seconds > 0 ? setSeconds(seconds - 1) : setSeconds(59)
                }, 1000);
                
                return () => {clearInterval(secondsInterval)}

            } else if (minutes === 0){
                const lastSecondsInterval = setInterval(()=> {
                    seconds > 0 ? setSeconds(seconds - 1) : setSeconds(0)
                }, 1000);
                
                (minutes === 0 && seconds === 0) ? setTimerDone(true) : setTimerDone(false)

                return () => {clearInterval(lastSecondsInterval)}
            }
        }

        },[seconds]);
        

    return (
        <Container>
            <Number>{minutes < 10 ? "0" :""}{minutes}:{seconds < 10 ? "0" :""}{seconds}</Number>
            <ButtonContainer>
                {!timerDone &&
                    <NewButton onPress={() => {
                        isPressed ? stopCount() : startCount(), setIsPressed(!isPressed) 
                        }} title="Start">
                        <ButtonText>{isPressed ? "Pause" : "Start"}</ButtonText>
                    </NewButton>
                }
                <NewButton onPress={() => { 
                    resetCount(), 
                    setIsPressed(false)
                    }} title="Reset">
                    <ButtonText>Start over</ButtonText>
                </NewButton>
            </ButtonContainer>
            {timerDone && <Text>Well done!</Text>}
        </Container>
    )
}

