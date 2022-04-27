import React, { useState, useEffect, useRef } from "react";
import { PixelRatio, Platform } from "react-native";
import { Accelerometer } from "expo-sensors";

import * as Sharing from "expo-sharing";
import { captureRef } from "react-native-view-shot";

import styled from "styled-components/native";

const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
  return totalForce > 1.6;
};

const StyledContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

const StyledTitle = styled.Text`
  font-size: 32px;
  color: white;
  font-weight: bold;
  margin-top: 20%;
`;

const StyledImageContainer = styled.View`
  background-color: pink;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const StyledShareButton = styled.TouchableOpacity`
  padding: 12px;
  border-radius: 10px;
  background-color: blue;
  margin-bottom: 20%;
`;

const StyledButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: white;
`;

export default function SensorCompnent({ cats }) {
  Accelerometer.setUpdateInterval(800);

  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  const [subscription, setSubscription] = useState(null);
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);

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

  useEffect(() => {
    if (isShaking(data)) {
      count === cats.length - 1 ? setCount(0) : setCount(count + 1);
    }
  }, [data]);

  let openSharingDialogAsync = async () => {
    const os = Platform.OS;
    if (os !== "android" && os !== "ios") {
      alert("Sharing isn't avaiable on web");
      return;
    }

    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    try {
      const targetPixelCount = 720;
      const pixelRatio = PixelRatio.get(); // The pixel ratio of the device
      // pixels * pixelratio = targetPixelCount, so pixels = targetPixelCount / pixelRatio
      const pixels = targetPixelCount / pixelRatio;

      const uri = await captureRef(containerRef, {
        result: "tmpfile",
        height: pixels,
        width: pixels,
        quality: 1,
        format: "png",
      });
      await Sharing.shareAsync(uri);
    } catch (err) {
      console.log("------- error message -------");
      console.log(err);
    }
  };

  return (
    <StyledContainer ref={containerRef}>
      <StyledImageContainer>
        <StyledImage resizeMode="contain" source={{ uri: cats[count].url }} />
      </StyledImageContainer>
      <StyledTitle>Shake Device 👋</StyledTitle>
      <StyledShareButton onPress={openSharingDialogAsync}>
        <StyledButtonText>Share</StyledButtonText>
      </StyledShareButton>
    </StyledContainer>
  );
}

/*

  background-color: ${props => props.bgColor};


const StyledContainer = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.Text`
  font-size: 24px;
  color: palevioletred;
`;

const ShakeDataView = styled.View``;
const ShakeDataTitle = styled.Text`
  font-weight: bold;
`;
const ShakeData = styled.Text``;
      {isShaking(data) && (
        <CatComponent service={service} onUpdate={onUpdate} />
      )}

      <ImageBackground
        source={{
          uri: `${
            catData
              ? catData.url
              : "https://cdn2.thecatapi.com/images/CzXQVvf23.jpg"
          }`,
        }}
        resizeMode="cover"
        style={{ flex: 1, backgroundColor: "red" }}
      />
      <ShakeDataView>
        <ShakeDataTitle>Shake Data</ShakeDataTitle>
        <ShakeData>X: {data.x.toFixed(2)}</ShakeData>
        <ShakeData>Y: {data.y.toFixed(2)}</ShakeData>
        <ShakeData>Z: {data.z.toFixed(2)}</ShakeData>
        {catData && <Text>Cat data updated, {data.url}</Text>}
      </ShakeDataView>

*/
