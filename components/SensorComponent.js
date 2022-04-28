import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native';
import { Image, Share, Button, TouchableOpacity, Text } from 'react-native';

// ==========================
// = Function
const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
  return totalForce > 1.78;
};

// ==========================
// = Styled components
const ShakeView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.View`
  background-color: white;
  margin-top: 30%;
  align-items: center;
`

const Header = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #f54284;
  margin-top: 20px;
`;

const Shake = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: pink;
  margin-bottom: 20px;
`;

const ImageContainer = styled.View`
  margin: 5%;
`;



// const ShakeDataView = styled.View``;
// const ShakeDataTitle = styled.Text`
//   font-weight: bold;
// `;
// const ShakeData = styled.Text``;

// ==========================
// = Function
  //När ny data kommer in, kallas Accelerometer-eventet. Frekvensen är kontrollerad av setUpdateInterval(millisekunder).
  //Subscribe = för att sluta använda Accelerometer(oklart). Tar man bort unsubscribe blir det segt och dra mycket batteri.
  //useEffecten lyssnar när SensorComponent är aktiv.

export const SensorComponent = () => {
  
  Accelerometer.setUpdateInterval(400);

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData);
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

// ==========================
  //HANNAS HUNDAR
  const [dog, setDog] = useState({})

  const generateDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => setDog(data))
  }

  useEffect(() => {
    if (isShaking(data)) {
      generateDog();
    }
  }, [data])


//HANNAS HUNDAR

//DELA Social

const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        "React Native | A framework for building native apps using React",
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
}; 

//DELA Social

  return (
    <ShakeView>
      <Wrapper>
      <Header>Dog of the Day</Header>
      <ImageContainer>
        <Image style={{ width: 300, height: 300 }} 
        source={{ uri: `${dog.message}` }} />
      </ImageContainer>
      <Shake>Shake it!</Shake>
      {/* <Button onPress={ShareDog} title="Share">
        <Text>Share</Text>
      </Button> */}

        <TouchableOpacity onPress={onShare}>
            <Text>Dela&nbsp;&#8595;</Text>
        </TouchableOpacity> 
      </Wrapper>
    </ShakeView>
  );
};
