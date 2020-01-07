import React from 'react';
import { Button, Text, StyleSheet, View, TextInput } from 'react-native';

const Form = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.formLabel}>Sign up for Blue Sky news </Text>

      <TextInput placeholder="Email" style={styles.inputStyle} />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        style={styles.inputStyle}
      />

      <Button
        title="Submit"
        color="black"
        onPress={() => alert('You have signed up to Blue Sky news')}
      />

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  formLabel: {
    fontSize: 20,
    color: 'black',
    marginTop: 20,
  },
  inputStyle: {
    marginTop: 10,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#b9e4c9',
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    fontSize: 20,
  },

  text: {
    color: 'black',
    fontSize: 20,
  },
});

export default Form