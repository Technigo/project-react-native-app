import React from "react";
import styled from "styled-components/native";
import { Share, TouchableOpacity, Text } from "react-native";

const onShare = async url => {
  try {
    const result = await Share.share({
      url
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
        console.log(result);
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

const ShareButton = ({ image_url }) => (
  <Button onPress={() => onShare(image_url)} title="Share">
    <ButtonText>Share</ButtonText>
  </Button>
);

const Button = styled.TouchableOpacity`
  background: #762bc2;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 20px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16;
`;

export default ShareButton;
