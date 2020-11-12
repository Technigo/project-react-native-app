import React from 'react';
import { Share, View, Button } from 'react-native';

export const ShareDog = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          '{uri: dogs.message}',
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
    <View style={{ marginTop: 0 }}>
      <Button onPress={onShare} title="Share" />
    </View>
  );
};
