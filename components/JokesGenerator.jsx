import React from 'react'
import styled from 'styled-components/native'

import { SensorComponent } from './SensorComponent'


const MainContainer = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
  width:100%;
`
const TopContainer = styled.View`
    flex: 0.6;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 10px;
`
const JokeContainer = styled.View`
flex: 3;
  background-color: #000000;
  justify-content: flex-start;
  align-items: center;
  width:100%;
`

const Title = styled.Text`
  justify-content: center;
  align-items: center;
  font-size: 30px;
  text-align: center;
  color: #000000;
`

const BottomContainer = styled.View`
flex: 0.3;
justify-content: center;
align-items: flex-start;
  background-color: #000000;
  width:100%;
`

const Explanation = styled.Text`
font-size: 17px;
text-align: left;
color: #ffffff;
margin-left: 15px;
font-style: italic;
`


export const JokesGenerator = () => {
    return (
    <MainContainer>
        <TopContainer>
          <Title>JOKE GENERATOR</Title>
        </TopContainer>
        <JokeContainer>
          <SensorComponent />
        </JokeContainer>
        <BottomContainer>
            <Explanation>* Shake the phone - get the joke.</Explanation>
        </BottomContainer>

    </MainContainer>
    )
}



