import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  ImageBackground,
} from 'react-native';

import { answers } from './components/answers';
import { MagicLoader } from '../components/MagicLoader';

const image = {
  url: 'https://media.istockphoto.com/illustrations/blue-glowing-energy-ball-on-black-background-illustration-id937266238?k=20&m=937266238&s=612x612&w=0&h=JIsUmWm9HzPbZ9LNLeJQpQWknqxCP5jdyalFE6ZNJJU=',
};

export const MagicBall = ({ navigation }) => {
  const [magicAnswer, setMagicAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');

  const generateMagicBall = () => {
    if (question !== '' && question.length > 3) {
      setLoading(true);
      const answer = answers[Math.floor(Math.random() * answers.length)];
      setMagicAnswer(answer);
      setTimeout(() => setLoading(false), 2000);
      setNewQuestion(question);
    } else {
      Alert.alert(
        'OOPS!',
        "Magic ball doesn't understand quiestions with less than 4 characters",
        { text: 'Got it' }
      );
    }
  };

  //resetting the state when navigating to another screen
  useEffect(() => {
    const resetState = navigation.addListener('focus', () => {
      setNewQuestion('');
      setMagicAnswer('');
    });
    return resetState;
  }, [navigation]);

  if (loading) {
    return (
      <View style={styles.magicBallWrapper}>
        <MagicLoader />
      </View>
    );
  }

  return (
    <View style={styles.magicBallWrapper}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <Text style={styles.magicHeader}>Ask a question</Text>
        <View style={styles.questionWrapper}>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={(value) => setQuestion(value)}
            placeholder='Type here'
            placeholderTextColor={'#000'}
          />

          <TouchableOpacity style={styles.button} onPress={generateMagicBall}>
            <Text style={styles.magicButtonText}>Send question</Text>
          </TouchableOpacity>
          <Text> {newQuestion}</Text>
        </View>
        <View style={styles.answerWrapper}>
          <Text style={styles.magicAnswerText}>
            The magic answer to your question is:
          </Text>
          <Text style={styles.magicAnswer}>{magicAnswer}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  magicBallWrapper: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  magicHeader: {
    fontSize: 40,
    color: '#cdf4fa',
    textShadowColor: 'rgba(237, 246, 247, 0.9)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 15,
  },
  questionWrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 140,
    marginTop: -20,
  },
  input: {
    height: 50,
    width: 300,
    borderWidth: 3,
    borderColor: '#cdf4fa',
    backgroundColor: 'rgba(205, 244, 250, 0.5)',
    marginLeft: 50,
    marginRight: 50,
    padding: 5,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 60,
    backgroundColor: '#0b0e29',
    color: 'white',
    borderRadius: 150,
  },
  magicButtonText: {
    color: '#cdf4fa',
    fontSize: 16,
  },
  answerWrapper: {
    display: 'flex',
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },
  magicAnswerText: {
    color: '#cdf4fa',
    textShadowColor: 'rgba(237, 246, 247, 0.9)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 15,
    fontSize: 20,
  },
  magicAnswer: {
    color: '#cdf4fa',
    textShadowColor: 'rgba(237, 246, 247, 0.9)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 15,
    fontSize: 40,
  },
});
