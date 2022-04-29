import { useState } from "react";
import { DeviceMotion } from "expo-sensors";

export default function useDeviceMotion(setData) {
  DeviceMotion.setUpdateInterval(1000);
  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(
      DeviceMotion.addListener((motionData) => {
        setData(motionData);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  return { _subscribe, _unsubscribe };
}
