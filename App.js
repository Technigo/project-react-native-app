import React, { useState, useEffect } from "react"
import styled from "styled-components/native"
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import moment from 'moment'
import { render } from "react-dom"





function Timer({ interval, style }) {
  const pad = (n) => n < 10 ? '0' + n : n
  const duration = moment.duration(interval)
  const centiseconds = Math.floor(duration.milliseconds() / 10)
  return (
    <TimerContainer>
      <StyledText style={style}>{pad(duration.minutes())}:</StyledText>
      <StyledText style={style}>{pad(duration.seconds())},</StyledText>
      <StyledText style={style}>{pad(centiseconds)}</StyledText>
    </TimerContainer>
  )
}

function RoundButton({ title, color, background, onPress, disabled }) {
  return (
    <ButtonContainer
      onPress={() => !disabled && onPress()}
      style={[styles.button, { backgroundColor: background }]}
      activeOpacity={disabled ? 1.0 : 0.7} //activeOpacity changed the opacity of the TouchableOpacity
    >
      <ButtonBorderContainer>
        <ButtonText style={[styles.buttonTitle, { color }]}>{title}</ButtonText>
      </ButtonBorderContainer>
    </ButtonContainer >
  )
}

function Lap({ number, interval, fastest, slowest }) {
  const lapStyle = [
    styles.lapText,
    fastest && styles.fastest, //if the lap is = (&&) fastest will the styles.fastest implement
    slowest && styles.slowest //if the lap is = (&&) slowest will the styles.fastest implement
  ]
  return (
    <LapContainer>
      <LapText style={lapStyle}>Lap {number}</LapText>
      <Timer style={[lapStyle, styles.lapTimer]} interval={interval} />
    </LapContainer>
  )
}


function LapsTable({ laps, timer }) {
  const finishedLaps = laps.slice(1)

  let min = Number.MAX_SAFE_INTEGER
  let max = Number.MIN_SAFE_INTEGER

  if (finishedLaps.length > 2) {
    finishedLaps.forEach(lap => {
      if (lap < min) min = lap
      if (lap > max) max = lap
    })
  }
  return (
    <ScrollViewContainer>
      {laps.map((lap, index) => (
        <Lap
          key={laps.length - index}
          number={laps.length - index}
          interval={index === 0 ? timer + lap : lap}
          fastest={lap === min} // fastest when the lap is equal to the lowest time
          slowest={lap === max} //slowest when the time is equal to the highest time
        />
      ))}
    </ScrollViewContainer>
  )
}

function ButtonsRow({ children }) {
  return (
    <ButtonRowContainer>{children}</ButtonRowContainer>
  )
}





export default class App extends React.Component {

  // const App = () => {
  //continue working with it and change it to useState instead
  // const [start, setStart] = useState(0)
  // const [now, setNow] = useState(0)
  // const [laps, setLaps] = useState([])
  // }

  constructor(props) {
    super(props)
    this.state = {
      // timer: 1234567,  // since I have the start time I dont need this any more
      start: 0,  //start propertie (time) 
      now: 0,  //the time "right now" (starts at 0)
      laps: [],
    }
  }

  //here I should change to useEffect
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  start = () => {
    const now = new Date().getTime()

    this.setState({
      start: now,
      now,
      laps: [0],
    })
    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime() })
    }, 100)
  }

  lap = () => {
    const timestamp = new Date().getTime()
    const { laps, now, start } = this.state
    const [firstLap, ...other] = laps  //makes the last lap first in the array
    this.setState({
      laps: [0, firstLap + now - start, ...other],
      start: timestamp,
      now: timestamp,
    })
  }

  stop = () => {
    clearInterval(this.timer)
    const { laps, now, start } = this.state
    const [firstLap, ...other] = laps
    this.setState({
      laps: [firstLap + now - start, ...other],
      start: 0,
      now: 0,
    })
  }

  reset = () => {
    this.setState({
      laps: [],
      start: 0,
      now: 0,
    })
  }

  resume = () => {
    const now = new Date().getTime()
    this.setState({
      start: now,
      now,
    })
    // this starts the timer again
    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime() })
    }, 100)

  }

  render() {
    const { start, now, laps } = this.state  //should use useState here instead
    const timer = now - start

    return (
      <Container >

        <Timer
          interval={laps.reduce((total, curr) => total + curr, 0) + timer}
        />
        {laps.length === 0 && (
          <ButtonsRow>
            <RoundButton
              title='Lap'
              color='#8B8B90'
              background='#151515'
              disabled
            />
            <RoundButton
              title='Start'
              color='#50D167'
              background='#1B361F'
              onPress={this.start}
            />
          </ButtonsRow>
        )}
        {start > 0 && (
          <ButtonsRow>
            <RoundButton
              title='Lap'
              color='#FFFFFF'
              background='#3D3D3D'
              onPress={this.lap}
            />
            <RoundButton
              title='Stop'
              color='#E33935'
              background='#3C1715'
              onPress={this.stop}
            />
          </ButtonsRow>
        )}
        {laps.length > 0 && start === 0 && (
          <ButtonsRow>
            <RoundButton
              title='Reset'
              color='#FFFFFF'
              background='#3D3D3D'
              onPress={this.reset}
            />
            <RoundButton
              title='Start'
              color='#50D167'
              background='#1B361F'
              onPress={this.resume}
            />
          </ButtonsRow>
        )}
        <LapsTable laps={laps} timer={timer} />
      </Container>
    )
  }
}

////Styled component///

const Container = styled.View`
    flex: 1;
    background-color: #0D0D0D;
    align-items: center;
    padding-top: 130px;
    padding-horizontal: 20px;
`
const TimerContainer = styled.View`
    flex-direction: row;
`
const StyledText = styled.Text`
    color: #FFFFFF;
    font-size: 76px;
    font-weight: 200;
    width: 110px;
`
const ButtonContainer = styled.TouchableOpacity`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    justify-content: center;
    align-items: center;
`
const ButtonBorderContainer = styled.View`
    width: 76px;
    height: 76px;
    border-radius: 38px;
    border-width: 1px;
    justify-content: center;
    align-items: center;
`
const ButtonRowContainer = styled.View`
    flex-direction: row;
    align-self: stretch;
    justify-content: space-between;
    margin-top: 80px;
    margin-bottom: 30px; 
`
const ButtonText = styled.Text`
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 200;
    width: 110px;
    text-align: center;
`
const LapContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    border-color: #151515;
    border-top-width: 1;
    padding-vertical: 10; 
`
const LapText = styled.Text`
    color: #FFFFFF;
    font-size: 18px;
    width: 50px;
`
const ScrollViewContainer = styled.ScrollView`
    align-self: stretch;
`




////////// Style Sheet//////
const styles = StyleSheet.create({

  lapTimer: {
    fontSize: 18,
    width: 30,
  },

  fastest: {
    color: '#4BC05F',
  },
  slowest: {
    color: '#CC3531'
  }


});


