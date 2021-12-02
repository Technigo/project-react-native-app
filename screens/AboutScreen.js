import styled from 'styled-components/native';
import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";


const AboutContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 15px;
  height: 100%;
`;

export const About = () => {
  const titleText = "We are Techers";
  const bodyText = "We fix your computers and phones!";
  const fillerText ="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. ipsum quia dolor sit amet, Neque porro quisquam est qui dolorem"

  return (
    <AboutContainer>
      <Text style={styles.baseText}>
        <Text style={styles.titleText}>
          {titleText}
          {"\n"}
        </Text>
        <Text style={styles.bodyText}>{bodyText}</Text>
          {"\n"}
          {"\n"}
        <Text style={styles.fillerText}>{fillerText}</Text>
      </Text>
    </AboutContainer>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto"
  },
  titleText: {
    fontSize: 32,
    fontWeight: "bold"
    },
  bodyText: {
    fontSize:24,
  },
  fillerText: {
    fontSize:16,
  }
});

