import React, { useState } from 'react';
import { View, Share, Text, TextInput, StyleSheet, Button } from 'react-native';
import styled from 'styled-components/native';

export const ShareScreen = () => {
  const [message, setMessage] = useState('');
  const [mood, setMood] = useState('Happy');

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${message} Today's mood is: ${mood}`,
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
    <View style={{ marginTop: 50}}>
      <Button title="Set a new mood" onPress={() => setMood('Dancing')}></Button>
      <Text>Enter your message here:</Text>
      <TextInput style={styles.inputField} placeholder="Enter some text here" multiline={true} onChangeText={text => setMessage(text)} value={message}/>
      <ShareButton onPress={onShare} mood={mood}>
        <ButtonText>SHARE BUTTON TEST</ButtonText>
      </ShareButton>
    </View>
  );
};

/*STYLED COMPONENTS AND STYLESHEETS*/
const ShareButton = styled.TouchableOpacity`
  background: ${props => (props.mood === 'Dancing' ? "yellow" : "lightblue")};
  width: 90px;
  padding: 10px;
  margin: auto;
  margin-top: 50px;
`;

const ButtonText = styled.Text`
  color: white;
`;

const styles = StyleSheet.create({
  inputField: {
    height: 150,
    width: "70%",
    borderColor: "tomato",
    borderWidth: 2,
    margin: "auto"
  }
});


// <img src="" style={{ border: mood === 'Dancing' ? "2px solid red" : "none" }}