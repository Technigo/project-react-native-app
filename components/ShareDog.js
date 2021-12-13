
import React from 'react';
import { Share, Text, TouchableOpacity } from "react-native";
import styled from 'styled-components/native';

const ShareButton = styled.TouchableOpacity`
  height: 40px;
  width: 120px;
  border-radius: 10;
  justify-content: center;
  align-items: center;
  background-color: #c7926c;
  margin: 20px 0 0 0;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
`;

// share directly from your phone and send a message with 
const ShareDog = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Hey! Look how cute these dogs are!`,
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
  }

  return (
    <ShareButton 
      onPress={onShare}>
      <ButtonText>Share app</ButtonText>
    </ShareButton>
  )
}
 
export default ShareDog
