import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Accelerometer } from "expo-sensors";
import Header from "./Header";


const ShakeApi = () => {

    const [quote, setQuote] = useState({})

    const generateQuote = () => {
      fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(data => setQuote(data))
    }

  
    useEffect(() => {
      generateQuote();
    },[])

const [data, setData] = useState({
  x: 0,
  y: 0,
  z: 0,
});
const [subscription, setSubscription] = useState(null);

// const _slow = () => {
//   Accelerometer.setUpdateInterval(1000);
// };

// const _fast = () => {
//   Accelerometer.setUpdateInterval(16);
// };
const { x, y, z } = data;

const subscribe = () => {
  setSubscription(
    Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);
    })
  );
};


const unsubscribe = () => {
  subscription && subscription.remove();
  setSubscription(null);
};

useEffect(() => {
  // component mounts execute the function below
  subscribe();

  // component unmounts execute the function below
  return () => unsubscribe();
}, []);

const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
  return totalForce > 1.78;
}

useEffect(() => {
  if(isShaking(data)){
    generateQuote();
  }
}, [data])

    return (
      <View>
      <Header />
        <Text>{quote.content}</Text>
        <Text>{quote.author}</Text>
        
      </View>
    )
}

const styles = StyleSheet.create({
  view: {
      flex: 1,
      justifyContent: 'center',
      padding: 24
  }
})

export default ShakeApi;
