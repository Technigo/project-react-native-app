import React, { useState } from "react"
import { View, Alert, Text } from "react-native"
import styled from 'styled-components/native'
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'


const App = () => {
  const [grid,setGrid] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ])
  const [player,setPlayer] = useState(1)
  const [moves,setMoves] = useState(1)

  const placeMove = (x,y) => {
    switch(grid[x][y])
    {
      case 1: return <Icon name="close" size={50} color="orange"/>;
      case -1: return <Icon name="checkbox-blank-circle-outline" size={50} color="darkred"/>;
      default: return <View />;
    }
  }

  const checkWin = () => {
    //Check lines
    if (grid[0].reduce((a,b) => a+b,0) === 3 || grid[1].reduce((a,b) => a+b,0) === 3 ||grid[2].reduce((a,b) => a+b,0) === 3) {return 1}
    else if (grid[0].reduce((a,b) => a+b,0) === -3 || grid[1].reduce((a,b) => a+b,0) === -3 ||grid[2].reduce((a,b) => a+b,0) === -3) {return -1}
  
    //Check columns
    for(let i = 0; i < 3; i++) {
      if ( grid[0][i] + grid[1][i] + grid[2][i] === 3 ) { return 1 }
      else if ( grid[0][i] + grid[1][i] + grid[2][i] === -3 ) { return -1 }
    }

    //Check diagonal 1
    if ( grid[0][0] + grid [1][1] + grid[2][2] === 3 ) { return 1 }
    else if ( grid[0][0] + grid [1][1] + grid[2][2] === -3 ) { return -1 }

    //Check diagonal 2
    if ( grid[0][2] + grid [1][1] + grid[2][0] === 3 ) { return 1 }
    else if ( grid[0][2] + grid [1][1] + grid[2][0] === -3 ) { return -1 }

    return 0
  }

  const playerMove = (x,y) => {
    if( checkWin() === 1 || checkWin() === -1 ) {
      Alert.alert("Game has already finished. Restarting.")
      restart()
    } else {
      if(moves < 10 && grid[x][y] === 0 && checkWin() === 0) {
        let gridCopy = grid.slice()

        gridCopy[x][y] = player
        setGrid(gridCopy)
        setPlayer(player*-1)
        setMoves(moves+1)

      }

      if ( checkWin() === 1 ) { Alert.alert("🎊 Player X won! 🎊")}
      else if ( checkWin() === -1 ) { Alert.alert("🎊 Player O won! 🎊")}
      else if ( checkWin() === 0 && moves === 9 ) { Alert.alert("It's a tie! 🏁 Try again.")}
    }
  }

  const restart = () => {
    setGrid([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ])
    setPlayer(1)
    setMoves(1)
  }

  return (
    <Screen>
      <TopBar>
        <TopBarText>{ checkWin() === 1 ? "Winner: X" : checkWin() === -1 ? "Winner: 0" : moves > 9 ? "It's a tie! 🏁" : player === 1 ? "Next player: X" : "Next player: O" }</TopBarText>
      </TopBar>
      <Grid>
        <Row>
          <Tile onPress={() => playerMove(0,0)}>
            {placeMove(0,0)}
          </Tile>
          <Tile onPress={() => playerMove(0,1)}>
            {placeMove(0,1)}
          </Tile>
          <Tile onPress={() => playerMove(0,2)}>
            {placeMove(0,2)}
          </Tile>
        </Row>
        <Row>
          <Tile onPress={() => playerMove(1,0)}>
            {placeMove(1,0)}
          </Tile>
          <Tile onPress={() => playerMove(1,1)}>
            {placeMove(1,1)}
          </Tile>
          <Tile onPress={() => playerMove(1,2)}>
            {placeMove(1,2)}
          </Tile>
        </Row>
        <Row>
          <Tile onPress={() => playerMove(2,0)}>
            {placeMove(2,0)}
          </Tile>
          <Tile onPress={() => playerMove(2,1)}>
            {placeMove(2,1)}
          </Tile>
          <Tile onPress={() => playerMove(2,2)}>
            {placeMove(2,2)}
          </Tile>
        </Row>
      </Grid>
      <Result>
        <ResultText>
          { checkWin() !== 0 ? "🎉🎉🎉" : moves > 9 ? "🙄🙄🙄" : moves > 6 ? "🧐🧐🧐" : "🤔🤔🤔" }
        </ResultText>
      </Result>
      <Restart>
        <Icon name="reload" size={40} color="darkgreen" onPress={restart}/>
        <Text>Restart</Text>
      </Restart>
    </Screen>
  )
}

export default App

const Screen = styled.View`
    height: 100%;
`

const TopBar = styled.View`
    height: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const TopBarText = styled.Text`
    font-size: 40px;
`

const Grid = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
`

const Row = styled.View`
    flex-direction: row;
`

const Tile = styled.TouchableOpacity`
    border: 2px;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Result = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15%;
`

const ResultText = styled.Text`
    font-size: 60px;
`

const Restart = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
`