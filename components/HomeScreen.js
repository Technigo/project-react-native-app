import React, {useState} from 'react'
import {Text, Modal} from 'react-native'
import styled from 'styled-components/native'


import {NewButton, ButtonText, Container, Paragraph} from './StyledAppComponents'

export const HomeScreen = ({navigation}) => {
    
    const [modalVisible, setModalVisible] = useState(false)
    const [userTime, setUserTime] = useState()

    const setMeditationTime = () => {
        setModalVisible(true)
    }

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
            <Text>Welcome! </Text>
            <NewButton onPress={()=>navigation.navigate('Timer', {routeTime: userTime})}>
                <ButtonText>Start</ButtonText>
            </NewButton>
            <NewButton onPress={setMeditationTime} title="Reset"><ButtonText>Set Time</ButtonText></NewButton>
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
                            onSubmitEditing={text => {setUserTime(text.nativeEvent.text), setModalVisible(false)}}
                        ></Input>
                    </ModalView>
                </Container>
            </Modal>
        </Container>
    )
}

{/* <Modal
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
            </Modal> */}