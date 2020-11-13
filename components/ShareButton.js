import React from 'react';
import { Share } from 'react-native';

import { ButtonShare, ButtonShareText } from '../styled-components/styles';

const ShareButton = ({ sharedMovie }) => {
  const onShare = async () => {
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
      <ButtonShareText>Share this movie</ButtonShareText>
    </ButtonShare>
  );
};

export default ShareButton;
