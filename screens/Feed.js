import React, { useState } from 'react'
import { Text, Button, TextInput } from 'react-native'
import styled from 'styled-components/native'


// This is the main container for this screen
const FeedContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

// const TextInput = styled.View`
//   height: 20px;
// `;

// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
export const Feed = ({ navigation }) => {

  const [text, setText] = useState('')

  return (
    <FeedContainer>
      <Text>FIRST SCREEN </Text>
      <TextInput 
        placeholder="Start typing"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      {/* Here is an example of how to open/toggle the drawer via javascript */}
      <Button 
        title="Toggle drawer" 
        onPress={() => navigation.toggleDrawer()} 
      />
    </FeedContainer>
  );
};
