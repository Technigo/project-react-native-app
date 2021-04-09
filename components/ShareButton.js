import React from 'react';
import { Share } from 'react-native';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons'

const ShareButton = ({ recipe }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: `${recipe.label}`,
        message: `Here is really cool recipe!`,
        url: `${recipe.shareAs}`
      });
      
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <Button onPress={onShare}>
      <AntDesign name="upload" size={24} color="white" />
    </Button>
  )
}

export default ShareButton

const Button = styled.TouchableOpacity`
  position: absolute;
  top:0;
  left:0;
  border: white 1px solid;
  width: 50px;  
  height: 50px;
  font-size: 16px;
  border-radius: 20px;
  padding: 1px;
  margin: 5px;
  justify-content: center;
  align-items:center;
  background: rgba(33, 32, 32, 0.3);
`