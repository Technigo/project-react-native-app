import { Text, Share } from 'react-native';
import React from 'react'
import styled from 'styled-components/native'

export const TouchableOpacity = styled.TouchableOpacity`
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
`

const onShare = async url => {
  try {
    await Share.share({
      url
    });
  } catch (error) {
    alert(error.message);
  }
};

export default ShareButton = ({ giphy.image_url }) => {
  (
    <TouchableOpacity onPress={() => onShare(giphy.image_url)} title="Share">
      <Text>Share</Text>
    </TouchableOpacity>
  );
}


