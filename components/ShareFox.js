import React from "react";
import { Share, TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

const ShareButton = styled.TouchableOpacity`
  height: 60px;
  width: 120px;
  border-radius: 20;
  background-color: #c35817;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0 0;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
`;

const ShareFox = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Hi friend! Check out this cute fox app!",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ShareButton onPress={onShare}>
      <ButtonText>Share app</ButtonText>
    </ShareButton>
  );
};

export default ShareFox;
