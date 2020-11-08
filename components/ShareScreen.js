import React from 'react';
import { View, Share } from 'react-native';
import styled from 'styled-components/native';

export const ShareScreen = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Place sweet TEST message I want to share here... <3',
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
    <View style={{ marginTop: 50 }}>
      <ShareButton onPress={onShare}>
        <ButtonText>SHARE BUTTON TEST</ButtonText>
      </ShareButton>
    </View>
  );
}

const ShareButton = styled.TouchableOpacity`
  background: lightblue;
  width: 90px;
  padding: 10px;
`;

const ButtonText = styled.Text`
  color: white;
`;
