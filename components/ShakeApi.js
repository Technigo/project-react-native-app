import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native"
import { Accelerometer } from "expo-sensors";


const ShakeApi = ({ navigation }) => {

    const [images, setImages] = useState({})


const generateImage = () => {
        fetch("https://randomfox.ca/floof/")
        .then(res => res.json())
        .then(data => setImages(data))
        .catch((error) => {
          console.log(error)
        })      
}

useEffect(() => {
    generateImage()
}, [])

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
    subscribe();
    return () => unsubscribe();
  }, []);

 
  const isShaking = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
    return totalForce > 1.78
}

  useEffect(() => {
    if(isShaking(data)){
        generateImage()
    }
}, [data])

 
  return (  
    <View style={styles.container}>
        
        <Image 
        style={{ width: '100%', height: '80%', }}
        source={{ uri: `${images.image}` }}/>

      <Text style={{ textAlign: "center", }}>Shake your phone</Text>  

      <View style={styles.button}>
        <Button
        onPress={() => navigation.navigate('Facts')}
        title="Read fox facts"
        />
      </View>
  
    </View>
  
    );

}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#caf0f8',
  }, 
  button: {
    margin: 60,
  }
})



export default ShakeApi

