import React from 'react';
import styled from 'styled-components/native'
import { Share, View, Button } from 'react-native';



export const ShareDog = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Here you will find the API used in the Dog randomizer: https://dog.ceo/dog-api/',
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
    <View style={{ marginTop: 0, marginBottom: 30 }}>
      <Button onPress={onShare} title="Share" />
    </View>
  );
};
