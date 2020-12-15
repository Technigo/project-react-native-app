import React from 'react';
import styled from 'styled-components/native'
import { Share, View, Button } from 'react-native'

const ButtonView = styled.View `
  margin-top: 0px;
  margin-bottom: 30px;
`

export const ShareDog = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Here you will find the API used in the Dog randomizer: https://dog.ceo/dog-api/',
      });
      if (result.action === Share.sharedAction) {
      
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <ButtonView>
      <Button onPress={onShare} title="Share" />
    </ButtonView>
  );
};
