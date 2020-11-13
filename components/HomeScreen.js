import React, {useState} from 'react'
import {Text, Modal} from 'react-native'
import styled from 'styled-components/native'


import {NewButton, ButtonText, Container, Paragraph, Number,ButtonContainer} from './StyledAppComponents'

export const HomeScreen = ({navigation}) => {
    
    const [modalVisible, setModalVisible] = useState(false)
    const [userTime, setUserTime] = useState(30)

    const setMeditationTime = () => {
        setModalVisible(true)
    }

    const Input = styled.TextInput`
    width: 200px;
    border-radius: 10px;
    font-size: 40px;
    text-align: center;

    `

    const ModalView = styled.View`
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 20px;
    border-radius: 20px;
    margin: 0;
    `

    return (
        <Container>
            <Paragraph>Meditation time: {userTime} min</Paragraph>
            <ButtonContainer>
                <NewButton onPress={()=>navigation.navigate('Timer', {routeTime: userTime})}>
                <ButtonText>Meditate</ButtonText>
                </NewButton>
                <NewButton onPress={setMeditationTime} title="Reset">
                    <ButtonText>Set Time</ButtonText>
                </NewButton>
            </ButtonContainer>
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={()=>{setModalVisible(false)}}
                
            >
                <Container>
                    <ModalView>
                        <Paragraph>Set meditation time</Paragraph>
                        <Input
                            style={{height: 100, borderColor:'gray', borderWidth: 2}}
                            keyboardType="number-pad"
                            onSubmitEditing={text => {setUserTime(text.nativeEvent.text), setModalVisible(false)}}
                        ></Input>
                    </ModalView>
                </Container>
            </Modal>
        </Container>
    )
}

