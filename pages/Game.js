import * as React from 'react';
import { GameEngine } from 'react-native-game-engine';
import { Animal } from '../components/Animal';
import { View } from 'react-native';
import { Tilt, subscribeToAccelerometer, unSubscribeToAccelerometer } from '../components/Tilt';
import { GoalChecker } from '../components/GoalChecker';
import { useFocusEffect } from '@react-navigation/native';
import { GameEnded } from './GameEnded';

export const Game = ({navigation}) => {
  const [running, setRunning] = React.useState(true);
  const [won, setWon] = React.useState();

  useFocusEffect(React.useCallback(() => {
    subscribeToAccelerometer();

    return () => {
      unSubscribeToAccelerometer();
    }
  }, []))

  const collisionDetected = (gameWon) => {
    unSubscribeToAccelerometer();
    setRunning(false);
    setWon(gameWon);
  }

  const entities = {
    collisionDetected,
    mommyBird: { position: [190, 50], text: '🦆', size: 45, renderer: <Animal /> },
    babyBird: { position: [190, 550], text: '🐥', size: 40, renderer: <Animal /> },
    fox1: { position: [300, 300], text: '🦊', size: 40, renderer: <Animal /> },
    fox2: { position: [100, 500], text: '🦊', size: 40, renderer: <Animal /> },
    fox3: { position: [150, 150], text: '🦊', size: 40, renderer: <Animal /> },
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
      {!running && <GameEnded won={won} navigation={navigation} />}
    </View>
  )
}
