import React, { useState, useEffect } from 'react'
import { Accelerometer } from 'expo-sensors'
import styled from 'styled-components/native'

import Header from './Header'
import EightballHidden from './EightballHidden'
import EightballAnswer from './EightballAnswer'

const isShaking = (data) => {

  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
  return totalForce > 1.78
}

const MainView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`

const AnswerView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  flex: 0.78;
`

export const SensorComponent = () => {

  Accelerometer.setUpdateInterval(400)

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })

  const [subscription, setSubscription] = useState(null)

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData)
      })
    )
  }

  const _unsubscribe = () => {
    subscription && subscription.remove()
    setSubscription(null)
  }

  useEffect(() => {
    _subscribe()
    return () => _unsubscribe()
  }, [])

  const AnswersArray = ['It is certain', 'Without a doubt', 'You may rely on it', 'Yes definitely', 'It is decidedly so', 'As I see it yes', 'Most likely', 'Yes', 'Outlook good', 
  'Signs point to yes', 'Reply hazy try again', 'Better not tell you now', 'Ask again later', 'Cannot predict now', 'Concentrate and ask again', "Don't count on it", 
  'Outlook not so good', 'My sources say no', 'Very doubtful', 'My reply is no']

  const [answer, setAnswer] = useState('')

  useEffect(() => {
    !isShaking(data) && setAnswer(AnswersArray[Math.floor(Math.random() * AnswersArray.length)].toUpperCase())
  }, [isShaking(data)])

  return (
    <MainView>
      {isShaking(data) && 
        <EightballHidden />
      }
      {!isShaking(data) && 
        <AnswerView>
          <Header />
          <EightballAnswer newAnswer={answer}/>
        </AnswerView>
      }
    </MainView>
  )
}
