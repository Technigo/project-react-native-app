import React, { useState } from 'react';
import { Share, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native'

// Detta är en component, lägg till den där
const ShareExample = ( {ShareURL} ) => {
    console.log(ShareURL)

  const onShare = async () => {
    try {
      const result = await Share.share({
        url: ShareURL,
        
        
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
      <Button onPress={onShare} title="Share" />
    </View>
  );
};

export default ShareExample;