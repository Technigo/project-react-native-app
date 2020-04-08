import React, { useState } from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

const Container = styled.View`
  background-color: papayawhip;
  flex: 1; 
  justify-content: center;
  align-items: center;
`
const StyledBox = styled.View`
  margin: 0;
  padding: 0;
`

const StyledView = styled.View`
  border: 3px solid darkslategrey;
  width: 100px;
  height: 100px;
  margin: 2px;
  padding: 0;
`
const Title = styled.View`
`
const H2 = styled.Text`
  font-size: 20px;
  margin: 0;
  padding: 0;
`
const H1 = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`

const Square = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}>
      <StyledView>{props.value}</StyledView>
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

    squares[index] = xIsNext ? "X" : "O"

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
  status = winner ? `Congratz ${winner} 🎉` : `Next player: ${xIsNext ? "X" : "O"}`

  return (
    <StyledBox>
      <H1>{status}</H1>
      <H2>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </H2>
      <H2>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </H2>
      <H2>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </H2>
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

export default Tictactoe

