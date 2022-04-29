import React, { useState, useEffect } from 'react'
import { Button, Vibration, View, Pressable, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Text, TouchableHighlight } from 'react-native'
import styled from 'styled-components/native'
import { Accelerometer } from 'expo-sensors'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCat } from '@fortawesome/free-solid-svg-icons/faCat'

import { Container, PrimaryButton, PrimaryButtonText } from '../styles/GlobalStyles'

import ModalComponent from '../components/ModalComponent'


import Loader from '../components/Loader'

import { RandomCatGifAPI } from '../utils/URLs'
import Instructions from '../components/Instructions'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const CatImage = styled.Image`
  width: 100%;
  height: 375px;
`

const Title = styled.Text`
	font-size: 24px;
	color: black;
`

const CloudTheCat = () => {

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })
  const [subscription, setSubscription] = useState(null)

  const [topPosition, setTopPosition] = useState(50)
  const [leftPosition, setLeftPosition] = useState(50)

  const [onTarget, setOnTarget] = useState(false)

  const tryAgainButtonText = 'Try again'

  const checkTarget = () => {
    if (x >= 0.40 && x <= 0.60 && y >= 0.21 && y <= 0.43) {
      setOnTarget(true)
      // Vibration.vibrate()
    } else {
      setOnTarget(false)
      // Vibration.cancel()
    }
  }


  ///////////////
  // const shouldVibrate = () => {
  //   if (x >= 0.45 && x <= 0.55 && y >= 0.26 && y <= 0.38) {
  //     Vibration.vibrate()
  //   } else {
  //     Vibration.cancel()
  //   }
  // }

  // useEffect(() => {
  //   shouldVibrate()
  // })
  ///////////////



  useEffect(() => {
    checkTarget()
  })

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



  const Title = styled.Text`
	font-size: 24px;
	color: red;
`

  const FixedIcon = styled(Ionicons)`
    z-index: 2;
    color: gray;
    font-size: 100px;
`

  const MovingIconContainer = styled(View)`
    z-index: 1;
    position: absolute;
    top: ${topPosition}%;
    left: ${leftPosition}%;
`

  const FixedIconContainer = styled(TouchableOpacity)`
    z-index: 3;
    position: absolute;
    top: 30%;
    left: 70%;
`



  const [modalVisible, setModalVisible] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  const [catGifURL, setCatGifURL] = useState('')

  const generateCatGif = () => {
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


  const startOver = () => {
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

const instructionsText = 'Tilt your phone to hide the cat behind the cloud before touching the cloud: if you got it, you will be rewarded!'

  return (
    isLoading ? <Loader isLoading={isLoading} /> : (
      <Container>
        <ModalComponent tryAgainButtonText={tryAgainButtonText} startOver={startOver} setModalVisible={setModalVisible} modalVisible={modalVisible} shareURL={catGifURL} shareText={`Look at this cat gif!`} />
        {(!subscription && !onTarget && !modalVisible) &&
          <>
            <Instructions instructionsText={instructionsText} />
            <PrimaryButton onPress={subscription ? unsubscribe : subscribe}>
              <PrimaryButtonText>Click here to start!</PrimaryButtonText>
            </PrimaryButton>
          </>
        }
        {subscription &&
          <>
            <Text>{onTarget ? 'good' : 'bad'}</Text>
            <FixedIconContainer onPressIn={unsubscribe}>
              <View>
                <FixedIcon name="ios-cloud" />
              </View>
            </FixedIconContainer>
            <MovingIconContainer>
              <FontAwesomeIcon icon={faCat} size={50} color='#e63946' />
            </MovingIconContainer>
          </>
        }

        {/* <View>
          <Button title="Vibrate once" onPress={() => Vibration.vibrate()} />
          <Button
            title="Vibrate with pattern close"
            onPress={() => Vibration.vibrate(PATTERN_CLOSE)}
          />
          <Button
            title="Vibrate with pattern on target"
            onPress={() => Vibration.vibrate(PATTERN_ON_TARGET)}
          />
        </View> */}



        {(!subscription && onTarget && !modalVisible) &&
          <PrimaryButton onPress={generateCatGif}>
            <PrimaryButtonText>I want a gif!</PrimaryButtonText>
          </PrimaryButton>
        }
      </Container>
    )
  )
}

export default CloudTheCat
