import React, {useState} from 'react'
import {Text, Modal, Image} from 'react-native'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';



import {NewButton, ButtonText, Container, Paragraph, Number,ButtonContainer} from './StyledAppComponents'

export const HomeScreen = ({navigation}) => {
    
    const [modalVisible, setModalVisible] = useState(false)
    const [userTime, setUserTime] = useState(10)

    const setMeditationTime = () => {
        setModalVisible(true)
    }

    const Input = styled.TextInput`
    width: 200px;
    height: 100px;
    border-radius: 10px;
    border-color: rgb(58, 15, 76)
    border-width: 2px;
    font-size: 40px;
    text-align: center;

    `

    const ModalView = styled.View`
    justify-content: center;
    align-items: center;
    background-color: rgb(235, 196, 218);
    padding: 20px;
    border-radius: 20px;
    margin: 0; 
    `

    const Header = styled.View`
    background-color: rgb(58, 15, 76);
    justify-content:center;
    text-align: center;
    padding-top: 40px;
    flex-direction: row;
    `

    const HeaderText = styled.Text `
    width: 100%;
    font-size: 20px;
    color: rgb(235, 196, 218);
    font-weight: bold;
    padding: 10px;
    `

    const IconImage = styled.Image`
    width: 50px;
    height: 32px;
    margin: 50px;
    `

    return (
        <LinearGradient colors={['rgba(58, 15, 76, 1)','rgba(97, 14, 159, 1)','rgba(135, 30, 170, 1)']}
        style={{flex: 1}}>
        <Header><HeaderText><IconImage style={{
          }} source={require('./assets/Elephant_Icon.png')} />   Elephant Meditation</HeaderText></Header>
        <Container>
            
            <Number>{userTime} min</Number>
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
                        <Paragraph style={{color: "rgb(58, 15, 76)"}}>Set meditation time</Paragraph>
                        <Input
                            style={{}}
                            keyboardType="number-pad"
                            onSubmitEditing={text => {setUserTime(text.nativeEvent.text), setModalVisible(false)}}
                        ></Input>
                    </ModalView>
                </Container>
            </Modal>
            
        </Container>
        </LinearGradient>
    )
}

