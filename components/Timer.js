import React, { useEffect, useState } from 'react'
import {Text, View, Button, TextInput, TouchableOpacity, Modal, Alert} from 'react-native'
import styled from 'styled-components/native'

import {NewButton, ButtonText, Container} from './StyledAppComponents'


export const Timer = ({route, navigation}) => {
    const {routeTime} = route.params;

    const [time, setTime] = useState(routeTime)
    const [count, setCount] = useState(time);
    const [counter, setCounter] = useState(false)
    
    // const [userTime, setUserTime] = useState()
    const [isChanged, setIsChanged] = useState(false)

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
        // setCount(count-1)
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

    useEffect(()=> {
        if (isChanged) {
            setCounter(false)
            setCount(userTime)
            setTime(userTime)
            setModalVisible(false)
            console.log(userTime)
            setIsChanged(false)
        }
    },[isChanged])
        

    console.log('run every second', count)

    const Paragraph = styled.Text`
    font-size: 25px;
    `

    const Number = styled.Text`
    font-size: 80px;
    `

   

    return (
        <Container>
            
            <Paragraph>Route Time:{routeTime}</Paragraph>
            <Paragraph>Meditation time:</Paragraph>
            <Number>00:{count < 10 ? "0" :""}{count}</Number>
            <NewButton onPress={countDown} title="Start"><ButtonText>Start</ButtonText></NewButton>
            <NewButton onPress={stopCount} title="Pause"><ButtonText>Pause</ButtonText></NewButton>
            <NewButton onPress={resetCount} title="Reset"><ButtonText>Start over</ButtonText></NewButton>
            


        </Container>
    )
}

{/*
// // onChangeText={text => setUserTimeTest(text)}
 <NewButton onPress={resetCount()} title="Reset"><ButtonText>Set Time</ButtonText></NewButton> */}
//  <NewButton onPress={resetCount} title="Reset"><ButtonText>Start over</ButtonText></NewButton>