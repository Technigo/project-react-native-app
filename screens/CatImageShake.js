import React, { useState, useEffect } from "react"
import { View, Text, Button } from 'react-native'
import styled from 'styled-components/native'

import { Accelerometer } from "expo-sensors"
import OpenURLButton from '../components/OpenURLButton'

import ShareExample from '../components/ShareExample'

import Loader from '../components/Loader'

import { RandomCuteCatAPI, RandomUglyCatAPI } from '../utils/URLs'

// ==========================
// = Functions
const isShaking = (data) => {
  // x,y,z CAN be negative, force is directional
  // We take the absolute value and add them together
  // This gives us the total combined force on the device
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)

  // If this force exceeds some threshold, return true, otherwise false
  // Increase this threshold if you need your user to shake harder
  // return totalForce > 1.78
  return totalForce > 1.78

}

const isShakingEnough = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
  return totalForce > 3
}


// ==========================
// = Styled components
const ShakeView = styled.View`
  display: flex;
  flex-direction: column;
`

const ShakeAlert = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #aa0000;
`

const ShakeDataView = styled.View``
const ShakeDataTitle = styled.Text`
  font-weight: bold;
`
const ShakeData = styled.Text``

const Title = styled.Text`
	font-size: 24px;
	color: black;
`

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



// This is the main container for this screen
const NotificationsContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const CatImageShake = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('Shake to generate a random cat')
  const [catURL, setCatURL] = useState('')
  const [catInfoURL, setCatInfoURL] = useState('')
  const [catBreed, setCatBreed] = useState('')

  const generateUglyCat = () => {
    setIsLoading(true)
    fetch(RandomUglyCatAPI())
      .then(res => res.json())
      .then(data => {
        setCatURL(data[0].url)
        setCatBreed(data[0].breeds[0].name)
        setCatInfoURL(data[0].breeds[0].wikipedia_url)
        setIsLoading(false)
        setMessage('Come on, shake more for a cuter cat!')
      })
  }

  const generateNiceCat = () => {
    setIsLoading(true)
    fetch(RandomCuteCatAPI())
      .then(res => res.json())
      .then(data => {
        setCatURL(data[0].url)
        setCatBreed(data[0].breeds[0].name)
        setCatInfoURL(data[0].breeds[0].wikipedia_url)
        setIsLoading(false)
        setMessage('Shake again for another nice cat!')
      })
  }



  // This function determines how often our program reads the accelerometer data in milliseconds
  // https://docs.expo.io/versions/latest/sdk/accelerometer/#accelerometersetupdateintervalintervalms
  Accelerometer.setUpdateInterval(400)

  // The accelerometer returns three numbers (x,y,z) which represent the force currently applied to the device
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })

  // This keeps track of whether we are listening to the Accelerometer data
  const [subscription, setSubscription] = useState(null)

  const _subscribe = () => {
    // Save the subscription so we can stop using the accelerometer later
    setSubscription(
      // This is what actually starts reading the data
      Accelerometer.addListener((accelerometerData) => {
        // Whenever this function is called, we have received new data
        // The frequency of this function is controlled by setUpdateInterval
        setData(accelerometerData)
      })
    )
  }

  // This will tell the device to stop reading Accelerometer data.
  // If we don't do this our device will become slow and drain a lot of battery
  const _unsubscribe = () => {
    subscription && subscription.remove()
    setSubscription(null)
  }

  useEffect(() => {
    // Start listening to the data when this SensorComponent is active
    _subscribe()

    // Stop listening to the data when we leave SensorComponent
    return () => _unsubscribe()
  }, [])


  const moreURL = catInfoURL


  if (isLoading) {
    return <Loader isLoading={isLoading} />
  }


  return (
    <Container>
      {!isShakingEnough(data) && (isShaking(data) && generateUglyCat())}
      {isShakingEnough(data) && generateNiceCat()}

      <Title>{message}</Title>

      {catURL !== '' && (
        <>
          <CatImage source={{ uri: catURL }} />
          <OpenURLButton url={moreURL}>{`More about ${catBreed}`}</OpenURLButton>
          <ShareExample shareURL={catURL} shareTitle='Share this cat picture' />
        </>
      )}
    </Container>

    // <ShakeView>
    //   {/* 
    //   If isShaking returns true:
    //     - We could render conditionally
    //     - Maybe we want to dispatch some redux event when device shakes?
    //     - Maybe change some styled props? 
    //   */}
    //   {isShaking(data) && <ShakeAlert>Shaking</ShakeAlert>}
    //   {isShaking(data) && generateCat()}

    //   <ShakeDataView>

    //     <ShakeDataTitle>Shake Data</ShakeDataTitle>
    //     {/* toFixed(2) only shows two decimal places, otherwise it's quite a lot */}
    //     <ShakeData>X: {data.x.toFixed(2)}</ShakeData>
    //     <ShakeData>Y: {data.y.toFixed(2)}</ShakeData>
    //     <ShakeData>Z: {data.z.toFixed(2)}</ShakeData>
    //   </ShakeDataView>
    // </ShakeView>
  )
}

export default CatImageShake
