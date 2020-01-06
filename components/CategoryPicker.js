import React, { useState } from 'react';
import { Picker, Text, StyleSheet, View, TextInput } from 'react-native';

const PickerDemo = () => {
  const [categories, setCategories] = useState('Climate');
  return (
    <View style={styles.container}>
      <Text style={styles.formLabel}>Sign up for Blue Sky news </Text>

      <TextInput placeholder="Email" style={styles.inputStyle} />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        style={styles.inputStyle}
      />
      <Picker
        style={{ height: 50, width: 100 }}
        selectedValue={categories}
        onValueChange={currentCategories => setCategories(currentCategories)}>
        <Picker.Item label="Climate News" value="Climate" />
        <Picker.Item label="Traveling" value="Traveling" />
        <Picker.Item label="Politics" value="Politics" />
      </Picker>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 10,
        }}>
        Selected: {categories}
      </Text>
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
  },
  inputStyle: {
    marginTop: 20,
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

export default PickerDemo