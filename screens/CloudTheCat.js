import React, { useState, useEffect } from 'react'
import { Vibration } from 'react-native'
import styled from 'styled-components/native'
import { Accelerometer } from 'expo-sensors'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCat } from '@fortawesome/free-solid-svg-icons/faCat'

import { RandomCatGifAPI } from '../utils/URLs'
import Loader from '../components/Loader'
import ModalComponent from '../components/ModalComponent'
import Instructions from '../components/Instructions'
import { PrimaryButton, SecondaryButton } from '../components/Buttons'

import { Container, ScreenIcon } from '../styles/GlobalStyles'

const CloudTheCat = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })
  const [subscription, setSubscription] = useState(null)
  const [topPosition, setTopPosition] = useState(50)
  const [leftPosition, setLeftPosition] = useState(50)
  const [catGifURL, setCatGifURL] = useState('')
  const [onTarget, setOnTarget] = useState(false)

  //--------- Local styles ---------
  const FixedIcon = styled(ScreenIcon)`
    z-index: 2;
    position: absolute;
    top: 20%;
    left: 70%;
    color: gray;
  `
  const MovingIconContainer = styled.View`
    z-index: 1;
    position: absolute;
    top: ${topPosition}%;
    left: ${leftPosition}%;
  `
  //--------------------------------

  const subscribe = () => {
    setData({
      x: 0,
      y: 0,
      z: 0,
    })
    setTopPosition(50)
    setLeftPosition(50)
    checkTarget()
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData)
        setTopPosition(50 - (accelerometerData.y * 50))
        setLeftPosition(50 + (accelerometerData.x * 50))
      })
    )
  }

  const unsubscribe = () => {
    subscription && subscription.remove()
    setSubscription(null)
  }

  useEffect(() => {
    unsubscribe()
    return () => subscribe()
  }, [])

  const { x, y, z } = data

  const checkTarget = () => {
    if (x >= 0.43 && x <= 0.63 && y >= 0.42 && y <= 0.62) {
      setOnTarget(true)
    } else {
      setOnTarget(false)
    }
  }

  useEffect(() => {
    checkTarget()
  })

  const generateCatGif = () => {
    Vibration.vibrate()
    setModalVisible(true)
    setIsLoading(true)
    fetch(RandomCatGifAPI, {
      method: "GET",
      headers: {
        "x-api-key": "6a245bef-34b3-42f8-8457-d697e7a835bf"
      }
    })
      .then(res => res.json())
      .then(data => {
        setCatGifURL(data[0].url)
        setIsLoading(false)
      })
  }

  const tryAgain = () => {
    setData({
      x: 0,
      y: 0,
      z: 0,
    })
    setTopPosition(50)
    setLeftPosition(50)
    setCatGifURL('')
    setModalVisible(!modalVisible)
    setOnTarget(false)
  }

  const instructionsText =
    'Tilt your phone to hide the cat behind the cloud and you will be rewarded!'
  const tryAgainButtonText = 'Try again'

  return (
    isLoading ? <Loader isLoading={isLoading} /> : (
      <Container>

        {(!subscription && !onTarget && !modalVisible) &&
          <>
            <Instructions instructionsText={instructionsText} />
            <ScreenIcon name="ios-game-controller" />
            <PrimaryButton
              onPress={subscription ? unsubscribe : subscribe}
              primaryButtonText="Click here to start!"
            />
          </>
        }

        {subscription &&
          <>
            <SecondaryButton
              onPress={unsubscribe}
              secondaryButtonText="Check if i got it!"
            />
            <FixedIcon name="ios-cloud" />
            <MovingIconContainer>
              <FontAwesomeIcon
                color='#e63946'
                icon={faCat}
                size={50}
              />
            </MovingIconContainer>
          </>
        }

        {(!subscription && onTarget && !modalVisible) &&
          <PrimaryButton
            onPress={generateCatGif}
            primaryButtonText="I want my gif!"
          />
        }

        <ModalComponent
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          shareURL={catGifURL}
          shareText={`Look at this cat gif!`}
          tryAgain={tryAgain}
          tryAgainButtonText={tryAgainButtonText}
        />

      </Container>
    )
  )
}

export default CloudTheCat
