import React from "react";
import styled from "styled-components/native";
import { Text, View, StyleSheet } from "react-native";
import { StepCounter } from "./src/components/StepCounter.js"

const Container = styled.View`
  flex: 1;
  background-color: #0025ff;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 60px;
  color: #0025ff;
  font-weight: bold;
`;

const App = () => {
  return (
    <View style={styles.container}>
      <Title>MOVES</Title>
      <Text style={styles.text}> {new Date().toLocaleDateString("en-En", {
        weekday: "long"
        })}
      </Text>
      < StepCounter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE3C4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    color: '#0025ff',
    textTransform: 'uppercase'
  },
});

export default App;
