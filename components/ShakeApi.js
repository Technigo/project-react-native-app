import React, { useState, useEffect, useRef } from "react";
import { Accelerometer } from "expo-sensors";
import { answers } from "./Answers";
import { QuoteText, TextWrapper } from "./StyledComponents";

const isShakingEnough = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
  return totalForce > 2.58;
};

const ShakeApi = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [answer, setAnswer] = useState("Ask me");
  const [subscription, setSubscription] = useState(null);
  const lastUpdate = useRef(Date.now());

  useEffect(() => {
    Accelerometer.setUpdateInterval(50);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const now = Date.now();
    if (isShakingEnough(data) && now - lastUpdate.current > 1000) {
      lastUpdate.current = now;
      setAnswer((answer) => {
        if (answer !== "Ask me") {
          return "Ask me";
        } else {
          const randomReplyNumber = Math.floor(Math.random() * answers.length);
          return answers[randomReplyNumber];
        }
      });
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

  return (
    <TextWrapper>
      <QuoteText>{answer}</QuoteText>
    </TextWrapper>
  );
};

export default ShakeApi;
