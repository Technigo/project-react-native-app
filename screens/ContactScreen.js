import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import styled from 'styled-components/native'


const ContactContainer = styled.View`
  display: flex;
  align-items: center;
  height: 100%;
`;


export const Contact = () => {
  const [Name, onChangeName] = React.useState(null);
  const [Email, onChangeEmail] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [Text, onChangeText] = React.useState(null);
  
  return (
    <ContactContainer>
      <h1>Contact Us</h1>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        placeholder="Name"
        value={Name}
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        placeholder="E-mail"
        value={Email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Phone Number"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputDesc}
        onChangeText={onChangeText}
        value={Text}
        placeholder="write your problem here...."
        keyboardType="default"
      />
      <Button title="Send" onPress={() => navigation.navigate('ThankYou')} />
    </ContactContainer>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  inputDesc: {
    height: 80,
    borderWidth:1,
    padding:50,
    margin:12,
  },

  contactUs: {
    textDecorationLine:'underline',
  },
});


