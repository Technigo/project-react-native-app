import { Dimensions } from 'react-native';
import { Accelerometer } from 'expo-sensors';

const tilt = {x:0, y:0}

Accelerometer.setUpdateInterval(400);

const subscription = Accelerometer.addListener(data => {
  tilt.x = data.x;
  tilt.y = data.y;
})

const calculatePosition = (currentPosition, tilt, max) => {
  if (currentPosition >= max - 45 && tilt > 0) {
    return max - 45;
  } else if (currentPosition <= 0 && tilt < 0) {
    return 0;
  } else {
    return currentPosition + tilt * 5;
  }
}

export const Tilt = state => {
  const {mommyBird} = state

  const newXPos = calculatePosition(mommyBird.position[0], -tilt.x, Dimensions.get('window').width)
  const newYPos = calculatePosition(mommyBird.position[1], tilt.y, Dimensions.get('window').height - 75)
  
  mommyBird.position = [newXPos, newYPos]

  return state;
}