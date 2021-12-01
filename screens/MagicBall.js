import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import styled from 'styled-components/native';

export const MagicBall = () => {
  const [magicAnswer, setMagicAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);

  const answers = ['yes', 'maybe', 'no'];

  const generateMagicBall = (text) => {
    if (question.length > 3) {
      setLoading(true);
      const answer = answers[Math.floor(Math.random() * answers.length)];
      setMagicAnswer(answer);
      console.log(answer);
      setTimeout(() => setLoading(false), 1000);
      setQuestion(question);
    } else {
      Alert.alert(
        'OOPS!',
        "Magic ball doesn't understand quiestions with less than 4 characters",
        { text: 'Got it' }
      );
    }
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.magicBallWrapper}>
      <Text>Write your question to the magic ball</Text>
      <View>
        <TextInput
          multiline
          style={styles.input}
          onChangeText={(value) => setQuestion(value)}
          // value={question}
          placeholder='Type here'
        />
        <Text>You question is: {question}</Text>
        <TouchableOpacity style={styles.button} onPress={generateMagicBall}>
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
      <QuoteText>Answer: {magicAnswer}</QuoteText>
    </View>
  );
};

const styles = StyleSheet.create({
  magicBallWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: 200,
    borderWidth: 1,
    borderColor: '#777',
    margin: 10,
    padding: 5,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 150,
  },
});

const QuoteText = styled.Text`
  font-weight: 700;
`;
