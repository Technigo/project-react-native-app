import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'

const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [hundredths, setHundredths] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [formattedTime, setFormattedTime] = useState('00:00,00');
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setHundredths((hundredths) => {
          if (hundredths === 99) {
            setHundredths(0);
            setSeconds((seconds) => {
              if (seconds === 59) {
                setSeconds(0);
                setMinutes((minutes) => minutes + 1);
              }
              return seconds + 1;
            });
          }
          return hundredths + 1;
        });
      }, 10);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  useEffect(() => {
    const min = minutes <= 9 ? `0${minutes}` : minutes;
    const sec = seconds <= 9 ? `0${seconds}` : seconds;
    const hun = hundredths <= 9 ? `0${hundredths}` : hundredths;
    setFormattedTime(`${min}:${sec},${hun}`);
  }, [minutes, seconds, hundredths]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleLap = () => {
    const lap = {
      num: laps.length + 1,
      time: formattedTime
    };
    setLaps((laps) => [lap, ...laps]);
  };

  const handleReset = () => {
    setHundredths(0);
    setSeconds(0);
    setMinutes(0);
    setLaps([]);
  };

  return (
    <Container>
      <FixedSection>
        <TimerText>{formattedTime}</TimerText>
        <ButtonContainer>
          <StartStopContainer>
            {!isRunning ?
              <StartButton onPress={() => handleStart()}>
                <ButtonText>Start</ButtonText>
              </StartButton>
            :
              <StopButton onPress={() => handleStop()}>
                <ButtonText>Stop</ButtonText>
              </StopButton>
            }
          </StartStopContainer>
          <LapResetContainer>
            {!isRunning ?
              <ResetButton onPress={() => handleReset()}>
                <ButtonText>Reset</ButtonText>
              </ResetButton>
            :
              <LapButton onPress={() => handleLap()}>
                <ButtonText>Lap</ButtonText>
              </LapButton>
            }
          </LapResetContainer>
        </ButtonContainer>
      </FixedSection>
      <ScrollView>
        <LapContainer>
          {laps.map((item) => (
            <LapListItem 
              key={item.num}>
              <Span>Lap {item.num}</Span><Span>{item.time}</Span>
            </LapListItem>
          ))}
        </LapContainer>
      </ScrollView>
    </Container>
  );
};

export default App;

const Container = styled.View`
  justify-content: center;
  background-color: #222222;
  flex: 1;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  width: 100%;
`

const FixedSection = styled.View`
  align-items: stretch;
  display: flex;
  justify-content: space-evenly;
  height: 55%;
`

const ButtonContainer = styled.View`
  justify-content: space-around;
  display: flex;
  flex-direction: row-reverse;
`

const StyledButton = styled.TouchableHighlight`
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 100px;
  justify-content: center;
  width: 100px;
`

const StartButton = styled(StyledButton)`
  background-color: #008000;
`

const StopButton = styled(StyledButton)`
  background-color: #ef0000;
`

const ResetButton = styled(StyledButton)`
  background-color: #808080;
`

const LapButton = styled(StyledButton)`
  background-color: #000000;
`

const ButtonText = styled.Text`
  font-size: 28px;
  color: #ffffff;
`

const TimerText = styled.Text`
  color: #ffffff;  
  font-family: Courier New;
  font-size: 65px;
  text-align: center;
`

const StartStopContainer = styled.View`
  align-item: center;
`

const LapResetContainer = styled.View`
  align-item: center;
`

const LapListItem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Span = styled.Text`
  color: #ffffff;
  font-family: Courier New;
  font-size: 20px;
`
   
const LapContainer = styled.View`
  margin-top: 30px;
`
