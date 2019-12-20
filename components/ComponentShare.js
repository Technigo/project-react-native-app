import React from 'react';
import { Share, Button } from 'react-native';

const ComponentShare = () => {
  onShare = async () => {
    const result = await Share.share({
      message: 'Hey! Look at this beautiful photo from Pexels',
      url: '',
      title: 'Wow, did you see that?'
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
  };

  return <Button onPress={onShare} title="Share" />;
};

export default ComponentShare;
