import React, { useEffect, useState } from 'react'
import {Text, View, Button, TextInput, TouchableOpacity, Modal, Alert} from 'react-native'
import styled from 'styled-components/native'

import {NewButton, ButtonText, Container} from './StyledAppComponents'


export const Timer = () => {
    const [time, setTime] = useState(30)
    const [count, setCount] = useState(time);
    const [counter, setCounter] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [userTime, setUserTime] = useState()
    const [isChanged, setIsChanged] = useState(false)

    const countDown = () =>{
        setCounter(true)
        setCount(count-1)
    }

    const resetCount = () =>{
        setCounter(false)
        setCount(userTime)
        setModalVisible(false)
        console.log(userTime)
    }

    const stopCount = () =>{
        setCounter(false)
        // setCount(count-1)
    }

    const setMeditationTime = () => {
        setModalVisible(true)
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

    const Input = styled.TextInput`
    width: 200px;
    flex: 0.5;
    border-radius: 10px;
    font-size: 40px;
    text-align: center;
    `

    const ModalView = styled.View`
    background-color: white;
    padding: 35px;
    border-radius: 20px;
    `

    return (
        <Container>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={()=>{Alert.alert("Closed")}}
            >
                <Container>
                    <ModalView>
                        <Paragraph>Set the time of the timer</Paragraph>
                        <Input
                            style={{height: 40, borderColor:'gray', borderWidth: 2}}
                            keyboardType="number-pad"
                            onSubmitEditing={text => {setUserTime(text.nativeEvent.text), setIsChanged(true), setModalVisible(false)}}
                        ></Input>
                    </ModalView>
                </Container>
            </Modal>

            <Paragraph>Meditation time:</Paragraph>
            <Number>00:{count < 10 ? "0" :""}{count}</Number>
            <NewButton onPress={countDown} title="Start"><ButtonText>Start</ButtonText></NewButton>
            <NewButton onPress={stopCount} title="Pause"><ButtonText>Pause</ButtonText></NewButton>
            <NewButton onPress={resetCount} title="Reset"><ButtonText>Start over</ButtonText></NewButton>
            <NewButton onPress={setMeditationTime} title="Reset"><ButtonText>Set Time</ButtonText></NewButton>


        </Container>
    )
}

{/*
// // onChangeText={text => setUserTimeTest(text)}
 <NewButton onPress={resetCount()} title="Reset"><ButtonText>Set Time</ButtonText></NewButton> */}
//  <NewButton onPress={resetCount} title="Reset"><ButtonText>Start over</ButtonText></NewButton>