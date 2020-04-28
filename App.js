import React, { useState } from 'react'
import Header from './components/Header'
import BreakLength from './components/BreakLength'
import SessionLength from './components/SessionLength'
import Timer from './components/Timer'
import { View, ImageBackground, StyleSheet } from "react-native";

const image = { uri: 'https://images.unsplash.com/photo-1573869522166-0eed5b27f2d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80' }

const App = () => {

  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [session, setSession] = useState(true)
  const [timerMinute, setTimerMinute] = useState(25)

  const onSwitch = (isSession) => {
    if (isSession) {
      this.setState({
        timerMinute: this.state.sessionLength
      })
    } else {
      this.setState({
        timerMinute: this.state.breakLength
      })
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.content}>
          <Header />
          <BreakLength breakLength={breakLength} setBreakLength={setBreakLength} />
          <SessionLength sessionLength={sessionLength} setSessionLength={setSessionLength} setTimerMinute={setTimerMinute} />
          <Timer session={session} timerMinute={timerMinute} setTimerMinute={setTimerMinute} breakTimer={breakLength} setSessionLength={setSessionLength} setBreakLength={setBreakLength} />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    backgroundColor: 'white',
    width: 300,
    height: 'auto',
    borderRadius: 20,
    padding: 20,
    boxShadow: '3px 6px 18px 0px rgba(0,0,0,0.62)'
  }
})

export default App
