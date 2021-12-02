import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import styled from "styled-components/native";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderColor: "#FFE81F",
    elevation: 3,
    backgroundColor: "black",
    borderColor: "#FFE81F",
    borderWidth: 1,
    width: 150,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#FFE81F",
    fontFamily: "SWFontHollow",
  },
});

const CategoryButton = ({ buttonText, onPressed }) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => onPressed(buttonText)}
    >
      <Text style={styles.text}>{buttonText}</Text>
    </Pressable>
  );
};

export default CategoryButton;
