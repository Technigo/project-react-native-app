import React, { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";

function useIsShaking() {
  const [isShaking, setIsShaking] = useState(false);
  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        const { x, y, z } = accelerometerData;
        setIsShaking(Math.abs(x) + Math.abs(y) + Math.abs(z) > 1.78);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  return isShaking;
}

export { useIsShaking };
