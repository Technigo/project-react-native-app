import 'react-native-gesture-handler';
import * as React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import { Animal } from './components/Animal';
import { Tilt } from './components/Tilt';

const Container = styled.View`
  background: green;
`

export const Game = () => {
  const entities = {
    babyBird: { position: [100, 100], text: '🐣', renderer: <Animal /> },
    mommyBird: { position: [50, 50], text: '🦆', size: 45, renderer: <Animal /> }
  }

  return (
    <Container>
      <GameEngine
        systems={[Tilt]}
        entities={entities}
      >
      </GameEngine>
    </Container>
  )
}