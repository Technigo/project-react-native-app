import React, { useState } from "react"
import styled from "styled-components/native"
import bg from "./assets/dnd70.jpg"

const App = () => {

  const dices = [[1, 4], [2, 4], [1, 6], [2, 6], [1, 8], [2, 8], [1, 10], [2, 10], [1, 12]]
  const [result, setResult] = useState({
    rolls: [],
    sum: 0
  })

  const getRandom = (diceType) => {
    return Math.floor(Math.random() * diceType) + 1
  }

  const dicesRoll = (diceType, diceAmount) => {
    let tempRolls = []
    let tempSum = 0
    for (let index = 0; index < diceAmount; index++) {
      tempRolls.push(getRandom(diceType))
    }
    tempRolls.forEach(e => {
      tempSum += e
    })
    setResult({
      rolls: tempRolls,
      sum: tempSum
    })
  }

  const dicesOptions = dices.map(e => {
    return (<Dice key={`${e[0]}d${e[1]}`} onPress={() => dicesRoll(e[1], e[0])}><Title> {e[0]}d{e[1]} </Title></Dice>)
  })

  const rollsResults = result.rolls.map(e => (<Rolls key={Math.floor(Math.random() * 100000) + 1}>{e}</Rolls>))

  return (
    <Container>
      <Top><Title>DnD Dice Roller</Title></Top>
      <Content source={bg}>
        <Title>Rolls:</Title>
        {rollsResults}
        <Title>Result:</Title>
        <Result>{result.sum}</Result>
      </Content>
      <Dices>
        {dicesOptions}
      </Dices>

    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  text-align: center;
`

const Top = styled.View`
  height: 10%;
  background-color: #0B1B3F;
  justify-content: center;
`
const Content = styled.ImageBackground`
  height: 50%;
`

const Dices = styled.View`
  height: 40%;
  flex-direction: row;
  flex-wrap: wrap;
`

const Title = styled.Text`
  font-size: 30px;
  color: #9d0a0e;
  text-align: center;
  font-weight: 900;
`
const Rolls = styled.Text`
  font-size: 50px;
  color: #9d0a0e;;
  text-align: center;
`
const Result = styled.Text`
  font-size: 200px;
  color: #9d0a0e;;
  text-align: center;
`

const Dice = styled.TouchableOpacity`
  border: #fff 1px solid;
  font-size: 20px;
  padding: 10px;
  width: 33%;
  height:33%;
  justify-content: center;
  background-color: #e7e7db;
`

export default App
