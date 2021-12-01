import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  StyleSheet,
  Alert,
  ImageBackground,
} from 'react-native';
import styled from 'styled-components/native';

const image = {
  url: 'https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFnaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
};

export const MagicBall = ({ navigation }) => {
  const [magicAnswer, setMagicAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  // const [isActive, setActive] = useState(false);

  const answers = ['yes', 'maybe', 'no'];

  // const onQuestionExist = () => {
  //   setActive(!isActive);
  // };
  // style={isActive ? styles.active : styles.hidden}

  const generateMagicBall = () => {
    if (question !== '' && question.length > 3) {
      setLoading(true);
      const answer = answers[Math.floor(Math.random() * answers.length)];
      setMagicAnswer(answer);
      console.log(answer);
      setTimeout(() => setLoading(false), 1000);
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
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.magicBallWrapper}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <Text>Write your question to the magic ball</Text>
        <View>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={(value) => setQuestion(value)}
            // value={question}
            placeholder='Type here'
          />
          <Text> {newQuestion}</Text>
          <TouchableOpacity style={styles.button} onPress={generateMagicBall}>
            <Text>Click</Text>
          </TouchableOpacity>
        </View>
        <Text>Answer: {magicAnswer}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  magicBallWrapper: {
    display: 'flex',
    flex: 1,
    // justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: 300,
    borderWidth: 1,
    borderColor: '#777',
    marginLeft: 50,
    marginRight: 50,
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
  // active: {
  //   display: 'flex',
  // },
  // hidden: {
  //   display: 'none',
  // },
});

// const QuoteText = styled.Text`
//   font-weight: 700;
// `;
