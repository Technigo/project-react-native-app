import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Accelerometer } from "expo-sensors";


const Answer = ()=> {

    const [answer, setAnswer] = useState({})

    const generateAnswer = () => {
        fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => setAnswer(data))
    }
    //un comment this ig you want answer right away
    // useEffect(()=> {
    //     generateAnswer();
    // }, []);

//////////////////////////

const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);


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

    // component unmounts execute the function in the return statement
    return () => unsubscribe();
  }, []);


const isShaking = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
}


useEffect(()=> {
    if (isShaking(data)) {
        generateAnswer();
    }
}, [data])

    return (
        <View style={styles.container}>
            {/* <Text>{data.x}</Text>
            <Text>{data.y}</Text>
            <Text>{data.z}</Text> */}
            <Text style={styles.title}>{answer.content}</Text>
            <Text style={styles.title}>{answer.author}</Text>
        </View>
    )
}

export default Answer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#833471',
        margin: 20,
        padding: 20,
        textAlign: 'center'
    },
    
})