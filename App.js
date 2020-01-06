import React, { useState } from "react"
import { View, Alert } from "react-native"
import styled from 'styled-components/native'
import { Row } from "./components/Row"
import { Tile } from "./components/Tile"
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'


const App = () => {
  const [grid,setGrid] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ])
  const [player,setPlayer] = useState(1)
  const [moves,setMoves] = useState(1)

  const renderIcon = (x,y) => {
    switch(grid[x][y])
    {
      case 1: return <Icon name="checkbox-blank-circle-outline" size={50} color="darkred"/>;
      case -1: return <Icon name="close"  size={50} color="orange"/>;
      default: return <View />;
    }
  }

  const playerMove = (x,y) => {
    if(moves < 10 && grid[x][y] === 0) {
      let gridCopy = grid.slice()

      gridCopy[x][y] = player
      setGrid(gridCopy)
      setPlayer(player*-1)
      setMoves(moves+1)
    }
  }

  return (
    <Grid>
      <Row>
        <Tile onPress={() => playerMove(0,0)}>
          {renderIcon(0,0)}
        </Tile>
        <Tile onPress={() => playerMove(0,1)}>
          {renderIcon(0,1)}
        </Tile>
        <Tile onPress={() => playerMove(0,2)}>
          {renderIcon(0,2)}
        </Tile>
      </Row>
      <Row>
        <Tile onPress={() => playerMove(1,0)}>
          {renderIcon(1,0)}
        </Tile>
        <Tile onPress={() => playerMove(1,1)}>
          {renderIcon(1,1)}
        </Tile>
        <Tile onPress={() => playerMove(1,2)}>
          {renderIcon(1,2)}
        </Tile>
      </Row>
      <Row>
        <Tile onPress={() => playerMove(2,0)}>
          {renderIcon(2,0)}
        </Tile>
        <Tile onPress={() => playerMove(2,1)}>
          {renderIcon(2,1)}
        </Tile>
        <Tile onPress={() => playerMove(2,2)}>
          {renderIcon(2,2)}
        </Tile>
      </Row>
    </Grid>
  )
}

export default App

const Grid = styled.View`
    display: flex;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    height: 100%;
`