import React from "react"
import styled from "styled-components/native"
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { render } from "react-dom";



// const DATA = {   ///this was the initial code fot the data
//   timer: 1234567,
//   laps: [12345, 23456, 34567, 45678],
// }

function Timer({ interval, style }) {
  const pad = (n) => n < 10 ? '0' + n : n
  const duration = moment.duration(interval)
  const centiseconds = Math.floor(duration.milliseconds() / 10)
  return (
    // <View style={styles.timerContainer}>
    <TimerContainer>
      <Text style={style}>{pad(duration.minutes())}:</Text>
      <Text style={style}>{pad(duration.seconds())},</Text>
      <Text style={style}>{pad(centiseconds)}</Text>
    </TimerContainer>
    // </View>
  )
}

function RoundButton({ title, color, background, onPress, disabled }) {
  return (
    <TouchableOpacity
      onPress={() => !disabled && onPress()
      }
      style={[styles.button, { backgroundColor: background }]}
      activeOpacity={disabled ? 1.0 : 0.7} //activeOpacity changed the opacity of the TouchableOpacity
    >
      <ButtonBorderContainer>
        {/* <ButtonBorderContainer style={styles.buttonBorder}> */}
        <Text style={[styles.buttonTitle, { color }]}>{title}</Text>
      </ButtonBorderContainer>
    </TouchableOpacity >
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
      <Text style={lapStyle}>Lap {number}</Text>
      <Timer style={[lapStyle, styles.lapTimer]} interval={interval} />
    </LapContainer>
  )
}


function LapsTable({ laps, timer }) {
  const finishedLaps = laps.slice(1)

  let min = Number.MAX_SAFE_INTEGER
  let max = Number.MIN_SAFE_INTEGER

  if (finishedLaps.length > 2) {
    finishedLaps.forEach(lap => {  //maybe change to map instead?
      if (lap < min) min = lap
      if (lap > max) max = lap
    })
  }
  return (

    <ScrollView style={styles.scrollView}>
      {laps.map((lap, index) => (
        <Lap
          key={laps.length - index}
          number={laps.length - index}
          interval={index === 0 ? timer + lap : lap}
          fastest={lap === min} // fastest when the lap is equal to the lowest time
          slowest={lap === max} //slowest when the time is equal to the highest time
        />
      ))}
    </ScrollView>
  )
}

function ButtonsRow({ children }) {
  return (
    <ButtonRowContainer>{children}</ButtonRowContainer>  //for the styled component
  )
}





export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // timer: 1234567,  // since I have the start time I dont need this any more
      start: 0,  //start propertie (time) 
      now: 0,  //the time "right now" (starts at 0)
      laps: [],
    }
  }
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
    const { start, now, laps } = this.state  //maybe should use useState here instead
    const timer = now - start
    return (
      <Container >
        {/* <TimerBox */}
        <Timer
          interval={laps.reduce((total, curr) => total + curr, 0) + timer}
          style={styles.timer}
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
    backgroundColor: #0D0D0D;
    alignItems: center;
    paddingTop: 130px;
    paddingHorizontal: 20px;
`

// const TimerBox = styled.View`
//     color: #FFFFFF;
//     fontSize: 76px;
//     fontWeight: 200;
//     width: 110px;
// `
const TimerContainer = styled.View`
  flex-direction: row;
`
// const TouchableOpacity = styled.view`
//     width: 80;
//     height: 80;
//     border-radius: 40;
//     justify-content: center;
//     align-tems: center;
// `

const ButtonRowContainer = styled.View`
    flex-direction: row;
    align-self: stretch;
    justify-content: space-between;
    margin-top: 80px;
    margin-bottom: 30px; 
`

const LapContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    border-color: #151515;
    border-top-width: 1;
    padding-vertical: 10; 
`

// const ScrollView = styled.View`
//     align-self: stretch;
// `

const ButtonBorderContainer = styled.View`
    width: 76px;
    height: 76px;
    border-radius: 38px;
    border-width: 1px;
    justify-content: center;
    align-items: center;
`


////////// Style Sheet//////
const styles = StyleSheet.create({

  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 18,
  },
  timer: {
    color: '#FFFFFF',
    fontSize: 76,
    fontWeight: '200',
    width: 110,
  },
  // timerContainer: {
  //   flexDirection: 'row',
  // },
  // buttonBorder: {
  //   width: 76,
  //   height: 76,
  //   borderRadius: 38,
  //   borderWidth: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },

  lapText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  lapTimer: {
    width: 30,
  },
  scrollView: {
    //makes the laps and the time go apart on the screen 
    alignSelf: 'stretch',
  },
  fastest: {
    color: '#4BC05F',
  },
  slowest: {
    color: '#CC3531'
  }


});


