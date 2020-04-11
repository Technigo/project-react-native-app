import React, { useState } from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';


const Container = styled.View`
  background-color: papayawhip;
  flex: 1; 
  justify-content: center;
  align-items: center;
`
const StyledBox = styled.View`
  margin-top: 30px;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const StyledGrid = styled.View`
  flex: 1;
  flex-direction: row;
`

const StyledView = styled.View`
  border: 5px solid palevioletred;
  border-radius: 50px;
  width: 100px;
  height: 100px;
  margin: 2px;
  padding: 0;
`
const Title = styled.Text`
  font-size: 65px;
  flex: 1;
  text-align: center;
  color: palevioletred;
`

const H1 = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
  color: palevioletred;
`

const ListItem = styled.View`
`
const Text = styled.Text`
  color: white;
  font-size: 20px;
`
const Click = styled.TouchableOpacity`
  background-color: palevioletred;
  padding: 20px;
  border-radius: 70px;
`

const Restart = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
`
const RestartText = styled.Text`
  font-family: Menlo;
`

const Square = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}>
      <StyledView><Title>{props.value}</Title></StyledView>
    </TouchableOpacity>
  )
}

const Board = () => {
  // short cut to create an array with 9 null values
  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null))
  //sets the state of who's turn it is to play
  const [xIsNext, setXIsNext] = useState(true)

  const handlePress = index => {
    const squares = [...boardSquares]

    if (squares[index]) return;

    squares[index] = xIsNext ? "💩" : "🐷"

    setBoardSquares(squares)

    setXIsNext(!xIsNext)
  }

  const renderSquare = index => {
    return (
      <Square
        value={boardSquares[index]}
        onPress={() => handlePress(index)}
      />
    )
  }

  let status;
  const winner = calculateWinner(boardSquares)
  status = winner ?
    `The winner is: ${winner} 🎉`
    : `Next player: ${xIsNext ? "💩" : "🐷"}`


  return (
    <StyledBox>
      <H1>{status}</H1>
      <StyledGrid>
        <ListItem>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </ListItem>
        <ListItem>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </ListItem>
        <ListItem>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </ListItem>
      </StyledGrid>
    </StyledBox>
  )
}

const calculateWinner = (squares) => {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i]
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c])
      return squares[a]
  }
  return null;
}

const Tictactoe = () => {
  return (
    <Container>
      <Board />
    </Container>
  )
};

export default Tictactoe;