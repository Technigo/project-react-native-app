import React, { useCallback } from "react";
import { Alert, Linking } from "react-native";
import styled from "styled-components";
import * as Haptics from "expo-haptics";

const StyledButtonURL = styled.TouchableOpacity`
  background: #fffced;
  width: 150px;
  margin: 10px;
  padding: 10px;
  border: 2px solid #fed400;
  border-radius: 10px;
  align-self: center;

  shadow-opacity: 1;
  shadow-radius: 0px;
  shadow-color: #00813c;
  shadow-offset: 4px 4px;

  border-top-left-radius: 5px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 5px;
`;

const ButtonTextURL = styled.Text`
  color: #00813c;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  box-shadow: 0px 0px #a38733;
`;

export const OpenURLButton = ({ url, buttonText }) => {
  const handlePress = useCallback(async () => {
    //For some strange reason the Haptics only works when I have on two places?
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <StyledButtonURL onPress={handlePress}>
      <ButtonTextURL>{buttonText}</ButtonTextURL>
    </StyledButtonURL>
  );
};
