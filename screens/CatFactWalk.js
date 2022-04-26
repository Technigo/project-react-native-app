import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Pedometer } from 'expo-sensors'

import styled from 'styled-components/native'

import ShareExample from '../components/ShareExample'

import Loader from '../components/Loader'

import { RandomCatFactAPI } from '../utils/URLs'
import { TouchableOpacity } from 'react-native-gesture-handler'

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


const CatFactWalk = () => {

  const [isLoading, setIsLoading] = useState(false)

  const [catFact, setCatFact] = useState('')

  const generateCatFact = () => {
    setIsLoading(true)
    fetch(RandomCatFactAPI)
      .then(res => res.json())
      .then(data => {
        // make sure the fact is verified = true
        data = data.find(item => item.status.verified === true).text
        console.log(data)
        setCatFact(data)
        setIsLoading(false)

      })
      .catch((error) => {
        console.error(error.message)
        throw error
      })
  }

  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking')
  const [pastStepCount, setPastStepCount] = useState(0)
  const [currentStepCount, setCurrentStepCount] = useState(0)

  let _subscription


  const _subscribe = () => {
    _subscription = Pedometer.watchStepCount(result => {
      setCurrentStepCount(result.steps)
    })


    Pedometer.isAvailableAsync().then(
      result => {
        setIsPedometerAvailable(result)
      },
      error => {
        setIsPedometerAvailable('Could not get isPedometerAvailable: ' + error)
      }
    )

    const end = new Date()
    const start = new Date()
    start.setDate(end.getDate() - 1)
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        setPastStepCount(result.steps)
      },
      error => {
        setPastStepCount('Could not get stepCount: ' + error)
      }
    )
  }

  const _unsubscribe = () => {
    _subscription && _subscription.remove()
    _subscription = null
  }


  useEffect(() => {
    _subscribe()
    return () => _unsubscribe()
  })


  if (isLoading) {
    return <Loader />
  }


  return (
    <View style={styles.container}>
      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={_subscription ? _unsubscribe : _subscribe} style={styles.button}>
          <Text>{_subscription ? 'On' : 'Off'}</Text>
        </TouchableOpacity>
      </View> */}

      <Container>
        <Text>Pedometer.isAvailableAsync(): {isPedometerAvailable}</Text>
        <Text>Steps taken in the last 24 hours: {pastStepCount}</Text>
        <Text>Walk! And watch this go up: {currentStepCount}</Text>
        {currentStepCount > 10 && <Text style={styles.testPodo}>You walked 10 steps!</Text>}
        {/* fetch non stop... */}
        {currentStepCount > 10 && generateCatFact()}
        <Title>{catFact}</Title>

        <Button title={catFact === '' ? 'Generate a cat fact' : 'Generate another cat fact'} onPress={generateCatFact} />
        {/* <View>
        <TouchableOpacity onPress={generateCatFact}><Text>{catURL === '' ? 'Generate a cat' : 'Generate another cat'}</Text></TouchableOpacity>
      </View> */}
        {catFact !== '' && (
          <>
            {/* <CatImage source={{ uri: catURL }} /> */}
            {/* <OpenURLButton url={moreURL}>{`More about ${catBreed}`}</OpenURLButton> */}
            {/* <Text>{catFact}</Text> */}
            <ShareExample shareText={`Did you know that? ${catFact}`} shareTitle='Share this cat fact' />
          </>
        )}
      </Container>


    </View>
  )
}

export default CatFactWalk

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  testPodo: {
    color: 'red',
    fontSize: 30,
  },
})

const Title = styled.Text`
	font-size: 24px;
	color: black;
`
