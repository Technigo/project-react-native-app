import React, { useState, useEffect } from "react"
import { StyleSheet, Text, Pressable, Image, View, Button, SafeAreaView, TextInput } from "react-native"

import styled from 'styled-components/native'

import RadioGroup from 'react-native-radio-buttons-group'

import Loader from '../components/Loader'

import Instructions from '../components/Instructions'

import { Container, PrimaryButton, PrimaryButtonText } from '../styles/GlobalStyles'

import { RandomCatMemeAPI } from '../utils/URLs'

import ModalComponent from '../components/ModalComponent'

const DesignAMeme = () => {


  const [memeText, setMemeText] = useState('Too lazy to make a meme...')

  const [isLoading, setIsLoading] = useState(false)

  const [catMemeURL, setCatMemeURL] = useState('')

  const [memeColor, setMemeColor] = useState('sienna')

  const tryAgainButtonText = 'Try again'

  const colorRadioButtonsData = [{
    id: 'red',
    value: 'red',
    color: 'red',
    size: '32',
    selected: memeColor === 'red' ? true : false,
    onPress: (id) => setMemeColor(id)
  }, {
    id: 'blue',
    value: 'blue',
    color: 'blue',
    size: '32',
    selected: memeColor === 'blue' ? true : false,
    onPress: (id) => setMemeColor(id)
  }, {
    id: 'gold',
    value: 'gold',
    color: 'gold',
    size: '32',
    selected: memeColor === 'gold' ? true : false,
    onPress: (id) => setMemeColor(id)
  }, {
    id: 'green',
    value: 'green',
    color: 'green',
    size: '32',
    selected: memeColor === 'green' ? true : false,
    onPress: (id) => setMemeColor(id)
  }]

  const [memeAction, setMemeAction] = useState('')

  const actionRadioButtonsData = [{
    id: 'sleeping',
    label: 'sleeping',
    value: 'sleeping',
    layout: "column",
    selected: memeAction === 'sleeping' ? true : false,
    containerStyle: { width: '20%' },
    onPress: (id) => setMemeAction(id)
  }, {
    id: 'flying',
    label: 'flying',
    value: 'flying',
    layout: "column",
    selected: memeAction === 'flying' ? true : false,
    containerStyle: { width: '20%' },
    onPress: (id) => setMemeAction(id)
  }, {
    id: 'evil',
    label: 'evil',
    value: 'evil',
    layout: "column",
    selected: memeAction === 'evil' ? true : false,
    containerStyle: { width: '20%' },
    onPress: (id) => setMemeAction(id)
  },
  {
    id: 'jump',
    label: 'jumping',
    value: 'jump',
    layout: "column",
    selected: memeAction === 'jump' ? true : false,
    containerStyle: { width: '20%' },
    onPress: (id) => setMemeAction(id)
  }]


  const generateCatMeme = () => {
    setModalVisible(true)
    setIsLoading(true)
    fetch(RandomCatMemeAPI({ memeAction, memeText, memeColor }))
      .then(res => res.json())
      .then(data => {
        setCatMemeURL(`https://cataas.com/${data.url}`)
        setIsLoading(false)
      })
      .then(console.log(catMemeURL))
  }

  const startOver = () => {
    setCatMemeURL('')
    setMemeAction('')
    setMemeText('Too lazy to make a meme...')
    setMemeColor('sienna')
    setModalVisible(!modalVisible)
  }

  const [modalVisible, setModalVisible] = useState(false)

  const instructionsText = 'You are the designer here: select an action and a text color and type your meme!'

  return (
    isLoading ? <Loader isLoading={isLoading} /> : (
      <Container>
        <ModalComponent tryAgainButtonText={tryAgainButtonText} startOver={startOver} setModalVisible={setModalVisible} modalVisible={modalVisible} shareURL={catMemeURL} shareText={`I made a cat meme for you!`} />
        {!modalVisible &&
          <>
            <Instructions instructionsText={instructionsText} />
            <InputContainer>
            <TextInputField
                onChangeText={input => input !== '' && setMemeText(input)}
                defaultValue={memeText}
                clearButtonMode="while-editing"
                maxLength={30}
                placeholder="Type some text for your meme"
              />

              <RadioGroup
                radioButtons={actionRadioButtonsData}
                layout="row"
              />

              <RadioGroup
                radioButtons={colorRadioButtonsData}
                layout="row"
              />
            </InputContainer>

            <View>
              <PrimaryButton
                onPress={generateCatMeme}
              >
                <PrimaryButtonText>Show me a meme!</PrimaryButtonText>
              </PrimaryButton>
            </View>

          </>
        }
      </Container>
    )
  )
}


const InputContainer = styled.View`
  align-items: center;
`

const TextInputField = styled.TextInput`
  height: 40px;
  margin: 12px;
  border: 2px solid #e63946;
  border-radius: 30px;
  padding: 10px;
  color: #1d3557;
  width: 275px;
`



export default DesignAMeme