import React, { useState } from 'react';
import { Modal, Text, View, Alert, TouchableOpacity } from 'react-native';
import styled from "styled-components/native"
// import { Accelerometer } from 'expo-sensors';

import { Introduction } from './components/Introduction.js'
import { Button } from './components/Button.js'

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
  padding: 20px;
`

const Advice = styled.Text`
  color: white;
  font-size: 36px;
`

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const allAdvice = [
    'Yes, of course.',
    'Go for it.',
    'That could work',
    'You should not.',
    'Oh no.',
    'Think again.',
    'Absolutely not.',
    'Perhaps.',
    'Just do not'
  ]

  const myAdvice =
    allAdvice[
    Math.floor(Math.random() * allAdvice.length)
    ]

  return (
    <Container>
      {/* Accelerometer.addListener(listener) */}

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
            <Advice>{myAdvice}</Advice>
            <Button
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text>More troubles?</Text>
            </Button>
          </View>
        </AdviceContainer>
      </Modal>

      <Button
        onPress=
        {() => {
          setModalVisible(true)
        }}>
        <Text>Click here for advice</Text>
      </Button>
    </Container >
  );
}
export default App
