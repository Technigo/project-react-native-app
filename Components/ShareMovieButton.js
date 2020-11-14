import React from 'react';

import { Share, View } from 'react-native';
import { ShareButton, ShareText } from '../styled-components/styles';

const ShareMovieButton = ({ movieToShare }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          `I think watching this with you would be a lot more fun! ${movieToShare}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
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
    <View>
      <ShareButton onPress={onShare} title="Share">
        <ShareText>Share 🎬</ShareText>
      </ShareButton>
    </View>
  );
};
export default ShareMovieButton;