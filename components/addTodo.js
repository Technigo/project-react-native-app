import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = value => {
    setText();
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add todo..."
        onChangeText={changeHandler}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => submitHandler(text)}
      >
        <Text style={styles.addText}>Add New</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderBottomWidth: 2,
    borderBottomColor: "#ddd"
  },
  button: {
    padding: 20,
    marginTop: 20,
    backgroundColor: "#9cdcaa",
    borderStyle: "solid",
    borderRadius: 10
  },
  addText: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 17
  }
});
