import React, { useState, useEffect, useRef } from "react";
import { PixelRatio, Platform, Animated } from "react-native";
import Svg, { Path } from "react-native-svg";
import { DeviceMotion } from "expo-sensors";

import * as Sharing from "expo-sharing";
import { captureRef } from "react-native-view-shot";

import styled from "styled-components/native";

const StyledContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

const StyledIndicatorContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: pink;
  padding: 16px;
  padding-top: 32px;
`;

const StyledIndicator = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.Text`
  font-size: 16px;
  color: blue;
`;

const StyledBlinking = styled.Text`
  font-size: 22px;
  color: blue;
  font-weight: bold;
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
  border-radius: 5px;
  background-color: rgba(277, 277, 277, 0.4);
  border: 2px solid blue;
  margin-bottom: 12%;
`;

const StyledButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: blue;
`;

export default function SensorCompnent({ cats }) {
  DeviceMotion.setUpdateInterval(1000);

  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  const [subscription, setSubscription] = useState(null);
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);

  const _subscribe = () => {
    setSubscription(
      DeviceMotion.addListener((motionData) => {
        setData(motionData);
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

  /** orientation */
  useEffect(() => {
    const orientation = data.orientation;
    if (orientation === 90) {
      const index = count === cats.length - 1 ? 0 : count + 1;
      return setCount(index);
    }

    if (orientation === -90) {
      const index = count === 0 ? cats.length - 1 : count - 1;
      return setCount(index);
    }
  }, [data]);

  /** sharing */
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

  /** animation */
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <StyledContainer ref={containerRef}>
      <StyledImageContainer>
        <StyledImage resizeMode="contain" source={{ uri: cats[count].url }} />
      </StyledImageContainer>

      <StyledIndicatorContainer>
        <StyledIndicator>
          <Svg
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <Path
              fill="blue"
              d="M480 256c0 123.4-100.5 223.9-223.9 223.9c-48.86 0-95.19-15.58-134.2-44.86c-14.14-10.59-17-30.66-6.391-44.81c10.61-14.09 30.69-16.97 44.8-6.375c27.84 20.91 61 31.94 95.89 31.94C344.3 415.8 416 344.1 416 256s-71.67-159.8-159.8-159.8C205.9 96.22 158.6 120.3 128.6 160H192c17.67 0 32 14.31 32 32S209.7 224 192 224H48c-17.67 0-32-14.31-32-32V48c0-17.69 14.33-32 32-32s32 14.31 32 32v70.23C122.1 64.58 186.1 32.11 256.1 32.11C379.5 32.11 480 132.6 480 256z"
            />
          </Svg>
          <StyledTitle>Prev</StyledTitle>
        </StyledIndicator>
        <Animated.View
          style={[
            {
              // Bind opacity to animated value
              opacity: fadeAnim,
            },
          ]}
        >
          <StyledBlinking>Rotate Device</StyledBlinking>
        </Animated.View>
        <StyledIndicator>
          <Svg
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <Path
              fill="blue"
              d="M496 48V192c0 17.69-14.31 32-32 32H320c-17.69 0-32-14.31-32-32s14.31-32 32-32h63.39c-29.97-39.7-77.25-63.78-127.6-63.78C167.7 96.22 96 167.9 96 256s71.69 159.8 159.8 159.8c34.88 0 68.03-11.03 95.88-31.94c14.22-10.53 34.22-7.75 44.81 6.375c10.59 14.16 7.75 34.22-6.375 44.81c-39.03 29.28-85.36 44.86-134.2 44.86C132.5 479.9 32 379.4 32 256s100.5-223.9 223.9-223.9c69.15 0 134 32.47 176.1 86.12V48c0-17.69 14.31-32 32-32S496 30.31 496 48z"
            />
          </Svg>
          <StyledTitle>Next</StyledTitle>
        </StyledIndicator>
      </StyledIndicatorContainer>

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
