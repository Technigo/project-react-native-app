import React from 'react';
import { Share, View, Button } from 'react-native';

const ShareExample = ( {MovieHomepage} ) => {
  
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Hey please check this webpage!',
        url: MovieHomepage,   
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View > 
      <Button onPress={onShare} title="Share" />
    </View>
  );
};

export default ShareExample;