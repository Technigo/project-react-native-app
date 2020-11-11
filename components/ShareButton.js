import React from 'react';
import { Share, View, Button } from 'react-native';

// Styling
import {
  ActiveRoundedButton,
  ActiveButtonText,
} from '../styling-components/Global';

// ----------------------------------------------------------------

const ShareExample = ({ navigation, SharableMessage }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `I want to share the BEST tip: ${SharableMessage}`,
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
    <ActiveRoundedButton onPress={onShare} title="Share">
      <ActiveButtonText>Share this tip</ActiveButtonText>
    </ActiveRoundedButton>
  );
};

export default ShareExample;
