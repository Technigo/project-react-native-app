import React from 'react';
import { Share, View, Button } from 'react-native';
import styled from 'styled-components/native';

const ShareButton = () => {
  const onShare = async ({ navigation, sharedMovie }) => {
    try {
      const result = await Share.share({
        message: `Let's watch a movie! ${sharedMovie}`,
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
  return (
    <ButtonShare onPress={onShare} title="Share">
      <ActiveButtonText>Share this movie</ActiveButtonText>
    </ButtonShare>
  );
};

export default ShareButton;

const ButtonShare = styled.TouchableOpacity`
  width: 50%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  background: #fff;
  align-self: flex-end;
`;

// const ActiveRoundedButton = styled(RoundedButton)`
//   background: #454cd8;
//   align-self: flex-start;
// `;

const ButtonText = styled.Text`
  font-size: 20px;
  text-align: center;
`;

const ActiveButtonText = styled(ButtonText)`
  color: #000;
`;
