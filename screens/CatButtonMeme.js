import React, { useState } from 'react'
import { Button, View, StyleSheet, Text, SafeAreaView, TextInput } from 'react-native'
import styled from 'styled-components/native'

import RadioGroup, { RadioButton } from 'react-native-radio-buttons-group'

import ShareExample from '../components/ShareExample'

import OpenURLButton from '../components/OpenURLButton'


import Loader from '../components/Loader'

import { RandomCatMemeAPI } from '../utils/URLs'
import { TouchableOpacity } from 'react-native-gesture-handler'


// This is the main container for this screen
// const FeedContainer = styled.View`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
// `

const CatImage = styled.Image`
  width: 100%;
  height: 375px;
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

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})




const CatButtonMeme = () => {
  const [memeText, setMemeText] = useState('Too lazy to make a meme...')

  const [isLoading, setIsLoading] = useState(false)

  const [catMemeURL, setCatMemeURL] = useState('')

  const [memeColor, setMemeColor] = useState('brown')

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


  // const [colorRadioButtons, setColorRadioButtons] = useState(colorRadioButtonsData)

  const [memeMood, setMemeMood] = useState('')

  const moodRadioButtonsData = [{
    id: 'sleeping',
    label: 'Sleeping',
    value: 'sleeping',
    layout: "column",
    containerStyle: { width: '15%' },
    onPress: (id) => setMemeMood(id)
  }, {
    id: 'jump',
    label: 'Jumping',
    value: 'jump',
    layout: "column",
    containerStyle: { width: '15%' },
    onPress: (id) => setMemeMood(id)
  }, {
    id: 'flying',
    label: 'Flying',
    value: 'flying',
    layout: "column",
    containerStyle: { width: '15%' },
    onPress: (id) => setMemeMood(id)
  }, {
    id: 'evil',
    label: 'Evil',
    value: 'evil',
    layout: "column",
    containerStyle: { width: '15%' },
    onPress: (id) => setMemeMood(id)
  }]



  // const [moodRadioButtons, setMoodRadioButtons] = useState(moodRadioButtonsData)


  // const onPressColorRadioButton = (radioButtonsArray) => {
  //   setColorRadioButtons(radioButtonsArray)
  //   console.log(memeColor)
  // }



  const generateCatMeme = () => {
    setIsLoading(true)
    fetch(RandomCatMemeAPI({ memeMood, memeText, memeColor }))
      .then(res => res.json())
      .then(data => {
        setCatMemeURL(`https://cataas.com/${data.url}`)
        setIsLoading(false)
      })
  }

  if (isLoading) {
    return <Loader isLoading={isLoading} />
  }


  return (
    <Container>
      <RadioGroup
        radioButtons={moodRadioButtonsData}
        // onPress={onPressColorRadioButton} 
        layout="row"
      />

      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={inputText => setMemeText(inputText)}
          // value={memeText}
          placeholder="Type some text for your meme"
        />
      </SafeAreaView>
      <RadioGroup
        radioButtons={colorRadioButtonsData}
        // onPress={onPressColorRadioButton} 
        layout="row"
      />

      <Button title={catMemeURL === '' ? 'Generate a cat meme' : 'Generate another cat meme'} onPress={generateCatMeme} />
      {catMemeURL !== '' && (
        <>
          <CatImage source={{ uri: catMemeURL }} />
          <ShareExample shareURL={catMemeURL} shareText={`I made a cat meme for you!`} shareTitle={`Share this cat meme`} />
        </>
      )}
      {/* <Button title={catMemeURL === '' ? 'Generate a cat meme' : 'Generate another cat meme'} onPress={generateCatMeme} /> */}
      {/* <View>
        <TouchableOpacity onPress={generateCatMeme}><Text>{catMemeURL === '' ? 'Generate a cat gif' : 'Generate another cat gif'}</Text></TouchableOpacity>
      </View> */}
      {/* {catMemeURL !== '' && (
        <> */}
      {/* <OpenURLButton url={catMemeURL}>{catMemeURL}</OpenURLButton> */}

      {/* <CatImage source={{ uri: catMemeURL }} />
          <ShareExample shareURL={catMemeURL} shareText={`I made a cat meme for you!`} shareTitle={`Share this cat meme`} />
        </>
      )} */}
    </Container>
  )
}

export default CatButtonMeme
