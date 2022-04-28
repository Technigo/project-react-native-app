import React, { useState, useEffect } from 'react'
import { Button, View, Pressable, TouchableOpacity, StyleSheet, Text } from 'react-native'
import styled from 'styled-components/native'
import { Accelerometer } from 'expo-sensors'
import { Ionicons } from '@expo/vector-icons'

import ShareButton from '../components/ShareButton'

import OpenURLButton from '../components/OpenURLButton'

import ModalComponent from '../components/ModalComponent'


import Loader from '../components/Loader'

import { RandomCatGifAPI } from '../utils/URLs'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const CatImage = styled.Image`
  width: 100%;
  height: 375px;
`

// This is the main container for this screen
// const FeedContainer = styled.View`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
// `

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

const CatGif = () => {



  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })
  const [subscription, setSubscription] = useState(null)

  const [topPosition, setTopPosition] = useState(50)
  const [leftPosition, setLeftPosition] = useState(50)

  const [onTarget, setOnTarget] = useState(false)

  const checkTarget = () => {
    if (x >= 0.45 && x <= 0.55 && y >= 0.26 && y <= 0.38) {
      setOnTarget(true)
    } else {
      setOnTarget(false)
    }
  }

  useEffect(() => {
    checkTarget()
  })

  const subscribe = () => {
    // setData({
    //   x: 0,
    //   y: 0,
    //   z: 0,
    // })
    // setTopPosition(50)
    // setLeftPosition(50)
    checkTarget()
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData)
        setTopPosition(topPosition - (accelerometerData.y * 50))
        setLeftPosition(leftPosition + (accelerometerData.x * 50))
        // setTopPosition(50)
        // setLeftPosition(50)

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

  const MovingIcon = styled(Ionicons)`
    z-index: 2;
    color: tomato;
    font-size: 60px;
    position: absolute;
    top: ${topPosition}%;
    left: ${leftPosition}%;
    /* transform: translate(-50%, -50%); */
`

  const FixedIcon = styled(Ionicons)`
    z-index: 1;
    color: gray;
    font-size: 100px;
    position: absolute;
    top: 30%;
    left: 70%;
    /* transform: translate(-50%, -50%); */
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


  // if (isLoading) {
  //   return <Loader isLoading={isLoading} />
  // }
  const startOver = () => {
    setOnTarget(false)
    setCatGifURL('')
    setModalVisible(!modalVisible)
    setOnTarget(false)
  }



  return (
    isLoading ? <Loader isLoading={isLoading} /> : (
      <Container>
        <ModalComponent startOver={startOver} setModalVisible={setModalVisible} modalVisible={modalVisible} shareURL={catGifURL} shareText={`Look at this cat gif!`} shareTitle={`Share this cat gif`} />

        <TouchableOpacity onPress={subscription ? unsubscribe : subscribe} style={[styles.button, styles.buttonOpen]}>
          <Text>{subscription ? 'Stop' : 'Start'}</Text>
        </TouchableOpacity>
        <Title>{onTarget ? 'good' : 'bad'}</Title>
        {subscription &&
          <>
            <FixedIcon name="ios-cloud-outline" />
            <MovingIcon name="ios-logo-octocat" />
          </>
        }

        {(onTarget && !subscription) &&
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={generateCatGif}
          >
            <Text style={styles.textStyle}>Generate a cat gif</Text>
          </Pressable>
        }



      </Container>
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


export default CatGif
