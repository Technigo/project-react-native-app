import React, { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";
import { useDispatch } from "react-redux";

import Cookie from "./Cookie";
import { quotes } from "../reducers/quotes";

const ShakeCookie = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) {
      getQuote();
    }
  }, [data]);

  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData);
      })
    );
  };

  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const getQuote = () => {
    dispatch(quotes.actions.getRandomQuote());
  };
  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.8;
  };

  return <Cookie />;
};

export default ShakeCookie;
