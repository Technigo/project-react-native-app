import { Accelerometer } from 'expo-sensors';

const Threshold = 150;
//This variable stores the accelerometer sensitivity 
// lowering this value will increase that sensitivity and increasing it will decrease sensitivity

export class ShakeEventFunction {
  static addListener(handler) {
  let last_x, last_y, last_z;
    let lastUpdate = 0;
    Accelerometer.addListener(accelerometerData => {
      let { x, y, z } = accelerometerData;
      let currTime = Date.now();
      if ((currTime - lastUpdate) > 100) {
        let diffTime = (currTime - lastUpdate);
        lastUpdate = currTime;
        let speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
        if (speed > Threshold) {
          handler();
        }
        last_x = x;
        last_y = y;
        last_z = z;
      }
    });
  }
  static removeListener() {
    Accelerometer.removeAllListeners()
  }
};