import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet } from 'react-native';
import { Accelerometer } from "expo-sensors";
import styled from "styled-components/native";

const styles = StyleSheet.create({

  Image: {
    width: 350,
    height: 350,
    borderRadius: 10,
  },
});


export const SensorComponent = () => {
  const [image, setImage] = useState({})

  const generateImage = () => {
    fetch(`https://random.dog/woof.json`)
      .then(response => response.json())
      .then(data => setImage(data))
  }

  useEffect(()=> {
    generateImage();
  }, []);
  
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  
  const [subscription, setSubscription] = useState(null);

  const { x, y, z} = data;
  
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
    
  useEffect(() => {
      subscribe();
        return () => unsubscribe();
    }, []);

  const isShaking = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
      return totalForce > 1.78;
  };

  useEffect(()=> {
    if (isShaking(data)) {
        generateImage();
    }
  }, [data])

    return (
      <APIContainer>
        {isShaking(data) && <ShakeAlert>Shaky Shaky</ShakeAlert>}
        <View>
          <Image
            style={styles.Image}
            source={{
              uri: image.url
            }}
          />
          <Button onPress={generateImage}>
                <ButtonInfo>CLICK ME</ButtonInfo>
            </Button>
        </View>
    </APIContainer>
  );
};


//----------------------------------------------//


const APIContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

const ShakeAlert = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #aa0000;
  text-align: center;
`;

const ButtonInfo = styled.Text`
  text-align: center;
  font-weight: 700;
`;

const Button = styled.TouchableOpacity`
  padding: 15px 10px;
  width: 150px;
  background-color: tomato;
  border-radius: 8;
  margin: 30px;
  align-self: center;
`
 