import { Dimensions } from 'react-native';
import { Accelerometer } from 'expo-sensors';

const tilt = {x:0, y:0}
let subscription;

Accelerometer.setUpdateInterval(32);

export const subscribeToAccelerometer = () => {
  subscription = Accelerometer.addListener(data => {
    tilt.x = data.x;
    tilt.y = data.y;
  })
}

export const unSubscribeToAccelerometer = () => {
  if (subscription) {
    subscription.remove();
  }
}

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
  const {babyBird} = state

  const newXPos = calculatePosition(babyBird.position[0], -tilt.x, Dimensions.get('window').width)
  const newYPos = calculatePosition(babyBird.position[1], tilt.y, Dimensions.get('window').height - 75)
  
  babyBird.position = [newXPos, newYPos]

  return state;
}