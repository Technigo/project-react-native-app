import React, { useState } from "react"
import { Vibration } from "react-native"
import styled from 'styled-components/native'
import RadioGroup from 'react-native-radio-buttons-group'

import { RandomCatMemeAPI } from '../utils/URLs'
import Loader from '../components/Loader'
import ModalComponent from '../components/ModalComponent'
import Instructions from '../components/Instructions'
import { PrimaryButton } from '../components/Buttons'

import { Container, ScreenIcon } from '../styles/GlobalStyles'

//--------- Local styles ---------
const InputContainer = styled.View`
  align-items: center;
  margin-top: 20px;
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
//--------------------------------

const DesignAMeme = () => {

  const [memeText, setMemeText] = useState('Too lazy to make a meme...')
  const [isLoading, setIsLoading] = useState(false)
  const [catMemeURL, setCatMemeURL] = useState('')
  const [memeAction, setMemeAction] = useState('')
  const [memeColor, setMemeColor] = useState('sienna')
  const [modalVisible, setModalVisible] = useState(false)

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
    Vibration.vibrate()
    setModalVisible(true)
    setIsLoading(true)
    fetch(RandomCatMemeAPI({ memeAction, memeText, memeColor }))
      .then(res => res.json())
      .then(data => {
        setCatMemeURL(`https://cataas.com/${data.url}`)
        setIsLoading(false)
      })
  }

  const tryAgain = () => {
    setCatMemeURL('')
    setMemeAction('')
    setMemeText('Too lazy to make a meme...')
    setMemeColor('sienna')
    setModalVisible(!modalVisible)
  }

  const instructionsText =
    'Select an action and a text color, and type your meme!'
  const tryAgainButtonText = 'Try again'

  return (
    isLoading ? <Loader isLoading={isLoading} /> : (
      <Container>

        {!modalVisible &&
          <>
            <Instructions instructionsText={instructionsText} />
            <ScreenIcon name="ios-build" />
            <InputContainer>
              <TextInputField
                clearButtonMode="while-editing"
                defaultValue={memeText}
                maxLength={30}
                onChangeText={input => input !== '' && setMemeText(input)}
                placeholder="Type some text for your meme"
              />

              <RadioGroup
                layout="row"
                radioButtons={actionRadioButtonsData}
              />

              <RadioGroup
                layout="row"
                radioButtons={colorRadioButtonsData}
              />
            </InputContainer>
            <PrimaryButton
              onPress={generateCatMeme}
              primaryButtonText="Show me a meme!"
            />
          </>
        }

        <ModalComponent
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          shareURL={catMemeURL}
          shareText={`I made a cat meme for you!`}
          tryAgain={tryAgain}
          tryAgainButtonText={tryAgainButtonText}
        />

      </Container>
    )
  )
}

export default DesignAMeme
