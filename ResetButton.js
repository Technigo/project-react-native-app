import React from "react"
import styled from 'styled-components/native'

const ButtonShell = styled.TouchableOpacity`
  border: 1px solid palevioletred;
  padding: 20px;
  border-radius: 8px;
  margin: 10px;
  width: 100;
  height: 100;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const ButtonText = styled.Text`
  color: palevioletred;
  font-size: 20px;
`

export const ResetButton = (props) => {
    const { setSolved, setPhotos, setSelectedCard, setMoves, setShuffled, setReady } = props
    const onClick = () => {
        setSolved([])
        setPhotos([])
        setSelectedCard('one', 'two')
        setMoves(0)
        setShuffled(false)
        setReady(false)
    }

    return (
        <ButtonShell onPress={onClick}>
            <ButtonText>Play Again</ButtonText>
        </ButtonShell>
    )
}