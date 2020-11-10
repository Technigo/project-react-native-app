import React from "react";
import styled from "styled-components/native";
import { Text, View, StyleSheet } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: blue;
`;

const App = () => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>MOVES</Title>
      <Text style={styles.text}> {new Date().toLocaleDateString("en-En", {
        weekday: "long"
        })}
      </Text>
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
  title: {
    fontSize: 60,
    color: '#0025ff',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 28,
    color: '#0025ff',
    textTransform: 'uppercase'
  },
});

export default App;
