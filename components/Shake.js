// not used, I am testing to have the shake-functions in a seperate component to avoid repeating my code
import React, { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";

export const ShakeArray = (url) => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(false);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    generateActivity();
  }, []);

  useEffect(() => {
    // This function determines how often our program reads the accelerometer data in milliseconds
    Accelerometer.setUpdateInterval(1000);
    // Start listening to the data when this SensorComponent is active
    subscribe();
    // Stop listening to the data when we leave SensorComponent
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) {
      generateActivity();
    }
  }, [data]);

  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        // Whenever this function is called, we have received new data
        // The frequency of this function is controlled by setUpdateInterval
        setData(accelerometerData);
      })
    );
  };

  // This will tell the device to stop reading Accelerometer data.
  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const generateActivity = () => {
    setLoading(true);
    fetch({ url })
      .then((res) => res.json())
      .then((data) => setActivity(data[0]))
      // .then((data) => setPoem(data))
      .finally(() => setLoading(false));
  };

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
};

export const ShakeObject = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [activity, setActivity] = useState({});
  const [loading, setLoading] = useState(false);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    generatePoem();
  }, []);

  useEffect(() => {
    // This function determines how often our program reads the accelerometer data in milliseconds
    Accelerometer.setUpdateInterval(1000);
    // Start listening to the data when this SensorComponent is active
    subscribe();
    // Stop listening to the data when we leave SensorComponent
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) {
      generateActivity();
    }
  }, [data]);

  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        // Whenever this function is called, we have received new data
        // The frequency of this function is controlled by setUpdateInterval
        setData(accelerometerData);
      })
    );
  };

  // This will tell the device to stop reading Accelerometer data.
  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };
};
