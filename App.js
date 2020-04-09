import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'
import * as Permissions from 'expo-permissions'
import { MapCards } from '../project-react-native-app/Components/MapCards'
import { UserCamera } from './Components/UserCamera'
import { Welcome } from './Components/Welcome'
import { ResetButton } from './ResetButton'

const LargeContainer = styled.View`
background-color: papayawhip;
justify-content: center;

`
const CardContainer = styled.View`
flex-direction: row;
  flex-wrap: wrap;
  padding: 20px 5px 0 5px;
`

const MovesCount = styled.Text`
font-size: 32px;
color: palevioletred;
margin: 10px;
width: 100;
height: 100;
text-align: center;
justify-content: space-around;
`

export default function App() {
  const [hasPermission, setHasPermission] = useState()
  const [showCamera, setShowCamera] = useState(false)
  const [photos, setPhotos] = useState([])
  const [shuffled, setShuffled] = useState(false)
  const [count, setCount] = useState(0)
  const [firstGuess, setFirstGuess] = useState()
  const [selectedCard, setSelectedCard] = useState(['one', 'two'])
  const [moves, setMoves] = useState(0)
  const [ready, setReady] = useState(false)
  const [solved, setSolved] = useState([])

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA) && await Permissions.askAsync(Permissions.AUDIO_RECORDING)
        && await Permissions.askAsync(Permissions.CAMERA_ROLL)
      setHasPermission(status === 'granted');
      if (hasPermission === null) {
        return <View />;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }
    })();
  }, []);

  return (
    <LargeContainer style={{ flex: 1 }}>
      {!showCamera && !ready &&

        <Welcome photos={photos} setPhotos={setPhotos} setShowCamera={setShowCamera} shuffled={shuffled} setShuffled={setShuffled}
          setReady={setReady} />
      }

      {showCamera &&
        <UserCamera photos={photos} setPhotos={setPhotos} setShowCamera={setShowCamera} />
      }

      {ready &&
        <CardContainer style={{ flex: 1 }}>
          <MapCards photos={photos} count={count} setCount={setCount} firstGuess={firstGuess}
            setFirstGuess={setFirstGuess} selectedCard={selectedCard} setSelectedCard={setSelectedCard} moves={moves}
            setMoves={setMoves} setSolved={setSolved} solved={solved} />
          {solved.length < 14 &&
            <MovesCount>Moves: {moves}</MovesCount>}
          {solved.length === 14 &&
            < ResetButton setSelectedCard={setSelectedCard} setMoves={setMoves} setReady={setReady} setPhotos={setPhotos}
              setShuffled={setShuffled} setSolved={setSolved} />
          }
        </CardContainer>}
    </LargeContainer >
  )
}