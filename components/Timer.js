import React, { useEffect, useState } from 'react'
import {Text, Image} from 'react-native'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';


import {NewButton, ButtonText, Container, Number, ButtonContainer} from './StyledAppComponents'


export const Timer = ({route, navigation}) => {
    const {routeTime} = route.params; //Gets the time that is set in the HomeScreen

    const [minutes, setMinutes] = useState(routeTime);
    const [seconds, setSeconds] = useState(0)
    const [counter, setCounter] = useState(true)
    const [timerDone, setTimerDone] = useState(false)
    const [isPressed, setIsPressed] = useState(true)

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
        <LinearGradient colors={['rgba(58, 15, 76, 1)','rgba(97, 14, 159, 1)','rgba(135, 30, 170, 1)']}
        style={{flex: 1}}>
        <Container>
        <Image style={{
            width: 400,
            height: 400,
          }} source={require('./assets/Elephant_PNG.png')} />
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
        </LinearGradient>
    )
}

