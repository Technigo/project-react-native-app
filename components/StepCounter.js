import React, { useState, useEffect } from 'react'
import { Pedometer } from 'expo-sensors'
import LottieView from 'lottie-react-native'

import { 
  ColorContainer1,
  ColorContainer2, 
  ColorContainer3, 
  MainContainer, 
  TopContainer, 
  BottomContainer 
} from './Containers'
import { Title } from './Texts'
import { Button, ButtonText } from './Button'

/* getStepCountAsync - Returns a promise that resolves to an Object with a steps key, which is a Number indicating the number of steps taken between the given dates. */

export const StepCounter = ({navigation}) => {
  const [steps, setSteps] = useState(0)
  const [todaysSteps, setTodaysSteps] = useState(0)
  const [evaluateSteps, setEvaluateSteps] = useState(false)

  const stepsLeft = 10000-todaysSteps

  /*new Date- creates an object with current date and time*/
  /*set Date- sets the day of the month to the date object */
  const endToday = new Date()
  const startToday = new Date()
  startToday.setDate(endToday.getDate() - 1)

  useEffect(() => {
    Pedometer.watchStepCount(result => {
      setSteps(result.steps)
    })
    Pedometer.getStepCountAsync(startToday, endToday)
      .then(result => {
        setTodaysSteps(result.steps)
        if(todaysSteps > 10000) {
          return setEvaluateSteps(true)
        }
    })
  })

  const navigateToWeek = () => {
    navigation.navigate('Week')
  }
  
  /* Removes header nav */
  useEffect(() => {
    navigation.setOptions({headerShown:false})
  }, [])

  return (
    <MainContainer>

      <TopContainer>
        <ColorContainer1>
          <Title>Steps last 24 hours: {todaysSteps}</Title>
        </ColorContainer1>
        <LottieView 
          source={evaluateSteps ? require('../assets/cup.json') : require('../assets/walkingMan.json')}
          autoPlay
          style={{ width: 300, height: 300}}
        />
      </TopContainer>

      <BottomContainer>
        <ColorContainer2>
          <Title>Steps live: {steps}</Title>
        </ColorContainer2>
        <ColorContainer3>
          {evaluateSteps ? 
          <Title>Yay! You made it!</Title> : 
          <Title>Steps left to 10 000: {stepsLeft} </Title>
          }
        </ColorContainer3>
          <Button accessibilityRole='button' onPress={navigateToWeek}>
            <ButtonText>Weekly Info</ButtonText>
          </Button>
      </BottomContainer>

    </MainContainer>
  )
}
