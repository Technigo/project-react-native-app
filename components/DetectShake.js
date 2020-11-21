import { Accelerometer } from 'expo-sensors'

// Threshold sets shake sensitivity - A lower number gives higher ensitivity. A higher number gives lower sensitivity.
const threshold = 190

export class DetectShake {

  static addListener(handler) {
    let last_x, last_y, last_z
    let lastUpdate = 0
    
    Accelerometer.addListener(accelerometerData => {
      let { x, y, z } = accelerometerData
      let time = Date.now()

      if ((time) - lastUpdate > 100) {
        let diffTime = (time - lastUpdate)
        lastUpdate = time
        let speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000

      if (speed > threshold) {
        handler()
      }
      last_x = x
      last_y = y
      last_z = z
      }
    })
  }
  
  static removeEventListener() {
  Accelerometer.removeAllListeners()
  }
}