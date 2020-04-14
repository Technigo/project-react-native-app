import React, { useState } from 'react'
import Header from './components/Header'
import BreakLength from './components/BreakLength'
import SessionLength from './components/SessionLength'
import Timer from './components/Timer'
import { View, ImageBackground, StyleSheet } from "react-native";

const image = { uri: 'https://images.unsplash.com/photo-1558818498-28c1e002b655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80' }

const App = () => {

  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [session, setSession] = useState(true)
  const [timerMinute, setTimerMinute] = useState(25)

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Header title='Pomodoro timer' />
        <BreakLength breakLength={breakLength} setBreakLength={setBreakLength} />
        <SessionLength sessionLength={sessionLength} setSessionLength={setSessionLength} setTimerMinute={setTimerMinute} />
        <Timer session={session} timerMinute={timerMinute} breakTimer={breakLength} />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
})

export default App
