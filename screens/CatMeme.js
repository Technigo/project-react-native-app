import React, { useState, useEffect } from "react"
import { StyleSheet, Text, Pressable, Image, View, Button, SafeAreaView, TextInput } from "react-native"

import styled from 'styled-components/native'

import RadioGroup from 'react-native-radio-buttons-group'

import Loader from '../components/Loader'

import { RandomCatMemeAPI } from '../utils/URLs'

import ModalComponent from '../components/ModalComponent'

const CatMeme = () => {


  const [memeText, setMemeText] = useState('Too lazy to make a meme...')

  const [isLoading, setIsLoading] = useState(false)

  const [catMemeURL, setCatMemeURL] = useState('')

  const [memeColor, setMemeColor] = useState('sienna')

  const colorRadioButtonsData = [{
    id: 'red',
    // label: 'Red',
    value: 'red',
    color: 'red',
    size: '32',
    onPress: (id) => setMemeColor(id)
  }, {
    id: 'blue',
    // label: 'Blue',
    value: 'blue',
    color: 'blue',
    size: '32',
    onPress: (id) => setMemeColor(id)
  }, {
    id: 'gold',
    // label: 'Gold',
    value: 'gold',
    color: 'gold',
    size: '32',
    onPress: (id) => setMemeColor(id)
  }, {
    id: 'green',
    // label: 'Green',
    value: 'green',
    color: 'green',
    size: '32',
    onPress: (id) => setMemeColor(id)
  }]

  const [memeAction, setMemeAction] = useState('')

  const actionRadioButtonsData = [{
    id: 'sleeping',
    label: 'Sleeping',
    value: 'sleeping',
    layout: "column",
    containerStyle: { width: '15%' },
    onPress: (id) => setMemeAction(id)
  }, {
    id: 'jump',
    label: 'Jumping',
    value: 'jump',
    layout: "column",
    containerStyle: { width: '15%' },
    onPress: (id) => setMemeAction(id)
  }, {
    id: 'flying',
    label: 'Flying',
    value: 'flying',
    layout: "column",
    containerStyle: { width: '15%' },
    onPress: (id) => setMemeAction(id)
  }, {
    id: 'evil',
    label: 'Evil',
    value: 'evil',
    layout: "column",
    containerStyle: { width: '15%' },
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
  return (
    isLoading ? <Loader isLoading={isLoading} /> : (
      <View style={styles.centeredView}>
        <ModalComponent startOver={startOver} setModalVisible={setModalVisible} modalVisible={modalVisible} shareURL={catMemeURL} shareText={`I made a cat meme for you!`} shareTitle={`Share this cat meme`} />

        <View>
          <RadioGroup
            radioButtons={actionRadioButtonsData}
            layout="row"
          />

          <View>
            <TextInput
              style={styles.input}
              onChangeText={input => input !== '' && setMemeText(input)}
              defaultValue={memeText}
              clearButtonMode="while-editing"
              maxLength={30}
              placeholder="Type some text for your meme"
            />
          </View>
          <RadioGroup
            radioButtons={colorRadioButtonsData}
            layout="row"
          />
          <View>

            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={generateCatMeme}
            >
              <Text style={styles.textStyle}>Generate a cat meme</Text>
            </Pressable>
          </View>

        </View>

      </View>
    )
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

const ContainerImage = styled.View`
  width: 330px;
  height: 330px;

`

const CatImage = styled.Image`
  resize-mode: contain;
  height: 330px;
`

const Container = styled.View`
	flex: 1;
	/* background-color: papayawhip; */
	justify-content: center;
	align-items: center;
`

const Title = styled.Text`
	font-size: 24px;
	color: black;
`



export default CatMeme