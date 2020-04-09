import * as React from 'react';
import { GameEngine } from 'react-native-game-engine';
import { Animal } from './components/Animal';
import { Tilt, subscribeToAccelerometer, unSubscribeToAccelerometer } from './components/Tilt';
import { GoalChecker } from './components/GoalChecker';
import { useFocusEffect } from '@react-navigation/native';
import { View } from 'react-native';
import { GameWon } from './GameWon'

export const Game = ({navigation}) => {
  const [running, setRunning] = React.useState(true)

  useFocusEffect(React.useCallback(() => {
    subscribeToAccelerometer();

    return () => {
      unSubscribeToAccelerometer();
    }
  }))

  const gameWon = () => {
    unSubscribeToAccelerometer();
    setRunning(false);
  }

  const entities = {
    gameWon,
    mommyBird: { position: [100, 100], text: '🦆', size: 45, renderer: <Animal /> },
    babyBird: { position: [150, 150], text: '🐥', size: 40, renderer: <Animal /> },
  }
  
  return (
    <View>
      {running && 
        <GameEngine
        systems={[Tilt, GoalChecker]}
        entities={entities}
        >
        </GameEngine>
      }
      {!running && <GameWon navigation={navigation} />}
    </View>
  )
}