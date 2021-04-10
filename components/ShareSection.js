/*import React from 'react';
import { Share } from 'react-native';
import styled from 'styled-components/native'

import * as Sharing from 'expo-sharing';

const CatView = styled.View `
  margin-bottom: 30px;
  margin-top: 0px;
`

const CatButton = styled.TouchableOpacity`
background-color: grey;
width: 200px;
padding: 10px;
align-items: center;
`

export const ShareSection = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Here you can see some really cute cats',
      });
      if (result.action === Share.sharedAction) {
     
      } else if (result.action === Share.dismissedAction) {
       
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <CatView>
      <CatButton onPress={onShare} title="Share"> </CatButton>
    </CatView>
  );
};
*/