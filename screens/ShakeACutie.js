import React, { useState, useEffect } from "react"
import { Vibration } from 'react-native'
import styled from 'styled-components/native'
import { Accelerometer } from "expo-sensors"

import { RandomCuteCatAPI, RandomUglyCatAPI } from '../utils/URLs'
import Loader from '../components/Loader'
import ModalComponent from '../components/ModalComponent'
import Instructions from '../components/Instructions'
import { PrimaryButton } from '../components/Buttons'

import { Container, ScreenIcon } from '../styles/GlobalStyles'

//--------- Local styles ---------
const ShakingText = styled.Text`
  color: #e63946;
  font-size: 32px;
  font-style: italic;
`
//--------------------------------

const ShakeACutie = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [catURL, setCatURL] = useState('')
  const [catInfoURL, setCatInfoURL] = useState('')
  const [catBreed, setCatBreed] = useState('')
  const [tryAgainButtonText, setTryAgainButtonText] = useState('')
  const [subscription, setSubscription] = useState(null)
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })

  Accelerometer.setUpdateInterval(400)

  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData)
      })
    )
  }

  const unsubscribe = () => {
    subscription && subscription.remove()
    setSubscription(null)
  }

  const isShaking = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
    return totalForce > 1.78
  }

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
    return totalForce > 3
  }

  useEffect(() => {
    if (isShakingEnough(data)) {
      generateCat(RandomCuteCatAPI(), 'Well done! Try again?')
    } else if (isShaking(data)) {
      generateCat(RandomUglyCatAPI(), 'Ouch! Try harder now?')
    }
  }, [data])

  const generateCat = (fetchAPI, buttonText) => {
    Vibration.vibrate()
    unsubscribe()
    setModalVisible(true)
    setIsLoading(true)
    fetch(fetchAPI)
      .then(res => res.json())
      .then(data => {
        setCatURL(data[0].url)
        setCatBreed(data[0].breeds[0].name)
        setCatInfoURL(data[0].breeds[0].wikipedia_url)
        setIsLoading(false)
        setTryAgainButtonText(buttonText)
      })
  }

  const tryAgain = () => {
    unsubscribe()
    setData({
      x: 0,
      y: 0,
      z: 0,
    })
    setCatURL('')
    setCatBreed('')
    setTryAgainButtonText('')
    setCatInfoURL('')
    setModalVisible(!modalVisible)
  }

  const instructionsText =
    'Shake your phone to see if you will get some cute cat or an ugly one!'

  return (
    isLoading ? <Loader isLoading={isLoading} /> : (
      <Container>

        {(!subscription && !modalVisible) &&
          <>
            <Instructions instructionsText={instructionsText} />
            <ScreenIcon name="ios-shuffle" />
            <PrimaryButton
              onPress={subscribe}
              primaryButtonText="Click here to start!"
            />
          </>
        }

        {(subscription && !modalVisible) &&
          <ShakingText>Start shaking now!</ShakingText>
        }

        <ModalComponent
          catInfoURL={catInfoURL} catBreed={catBreed}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          shareURL={catURL}
          shareText={`Look at this ${catBreed}!`}
          tryAgain={tryAgain}
          tryAgainButtonText={tryAgainButtonText}
        />

      </Container>
    )
  )
}

export default ShakeACutie
