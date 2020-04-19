import React, { useState, useEffect } from 'react';
import { Modal, Text, View, Alert, TouchableOpacity } from 'react-native'
import styled from "styled-components/native"
import { ShakeEventExpo } from './components/ShakeEventExpo'
import { Introduction } from './components/Introduction'
import { Button } from './components/Button'
// import { Advice } from './components/Advice'

const Container = styled.View`
  flex: 1;
  background-color: #152266;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const AdviceContainer = styled.View`
  flex: 1;
  background-color: #152266;
  justify-content: center;
  align-items: center;
`

const RandomAdvice = styled.Text`
  color: white;
  text-align: center;
  font-size: 36px;
`

const ButtonText = styled.Text`
  color: white;
`

const App = () => {

  const allAdvice = [
    'Yes, of course.',
    'Yes, absolutely.',
    'Go for it.',
    'That could work.',
    'You should not.',
    'Oh no.',
    'Think again.',
    'Absolutely not.',
    'Perhaps.',
    'Just do not.',
    'Never.'
  ]

  const myAdvice =
    allAdvice[
    Math.floor(Math.random() * allAdvice.length)
    ]

  const [modalVisible, setModalVisible] = useState(false);

  const shakePhone = () => {
    setModalVisible(true)
  }

  useEffect(() => {
    ShakeEventExpo.addListener(() => {
      shakePhone()
    })

    return () => {
      ShakeEventExpo.removeListener();
    }
  }, [])

  return (
    <Container>
      <Introduction />
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <AdviceContainer>
          <View>
            {/* <Advice /> */}
            <RandomAdvice>{myAdvice}</RandomAdvice>
            <Button
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <ButtonText>✨More troubles?✨</ButtonText>
            </Button>
          </View>
        </AdviceContainer>
      </Modal>
    </Container >
  );
}
export default App
