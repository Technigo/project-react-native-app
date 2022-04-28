import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Accelerometer } from 'expo-sensors'
import { Ionicons } from '@expo/vector-icons'

import styled from 'styled-components/native'


const AccScreen = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })
  const [subscription, setSubscription] = useState(null)

  const [topPosition, setTopPosition] = useState(50)
  const [leftPosition, setLeftPosition] = useState(50)


  const slow = () => {
    Accelerometer.setUpdateInterval(1000)
  }

  const medium = () => {
    Accelerometer.setUpdateInterval(800)
  }


  const fast = () => {
    Accelerometer.setUpdateInterval(200)

    // Accelerometer.setUpdateInterval(16)
  }

  const subscribe = () => {
    // setData({
    //   x: 0,
    //   y: 0,
    //   z: 0,
    // })
    // setTopPosition(50)
    // setLeftPosition(50)
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

  const onTarget = () => {
    if (x >= 0.45 && x <= 0.55 && y >= 0.26 && y <= 0.38) {
      return <Text>BRAVO!</Text>
    } else if (x >= 0.45 && x <= 0.55) {
      return <Text>You are close X!</Text>
    } else if (y >= 0.26 && y <= 0.38) {
      return <Text>You are close Y!</Text>
    }
  }

  return (
    <View style={styles.container}>
      <Title>{onTarget()}</Title>
      <FixedIcon name="ios-cloud-outline" />
      <MovingIcon name="ios-logo-octocat" />
      <Text style={styles.text}>Accelerometer: (in Gs where 1 G = 9.81 m s^-2)</Text>
      <Text style={styles.text}>
        x: {round(x)} y: {round(y)} z: {round(z)}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={subscription ? unsubscribe : subscribe} style={styles.button}>
          <Text>{subscription ? 'On' : 'Off'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={slow} style={[styles.button, styles.middleButton]}>
          <Text>Slow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={medium} style={[styles.button, styles.middleButton]}>
          <Text>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fast} style={styles.button}>
          <Text>Fast</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AccScreen

function round(n) {
  if (!n) {
    return 0
  }
  return Math.floor(n * 100) / 100
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    textAlign: 'center',
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
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
})
