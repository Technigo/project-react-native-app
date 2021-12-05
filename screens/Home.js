import React, { useState } from 'react';
import {
  Text,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import styled from 'styled-components/native';

import { Bored } from './Bored';
import { TodoItem } from './TodoItem';
import { AddTodo } from './AddTodo';

// This is the main container for this screen
const FeedContainer = styled.View`
  display: flex;
  align-items: center;
  background: #faf0e6;
  height: 100%;
`;

const TextInputField = styled.TextInput`
  margin: 10px;
  border: 1px solid black;
  padding: 5px;
  border-radius: 10px;
`;

const NavButton = styled.TouchableHighlight`
  border: 2px solid black;
  padding: 8px;
  border-radius: 10px;
  background-color: #79b4b7;
  margin-top: 10px;
`;

const EnterName = styled.Text`
  font-size: 20px;
`;

const List = styled.FlatList`
  background-color: #e4efe7;
  padding: 15px;
  width: 250px;
  border-radius: 10px;
  margin-top: 5px;
`;

const ListContainer = styled.View`
  padding: 20px 40px 20px 40px;
  background: #79b4b7;
  margin: 10px;
  height: 270px;
  border-radius: 10px;
  border: 2px solid #161616;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const TodosTitle = styled.Text`
  text-align: center;
  font-weight: bold;
`;

// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
export const Home = ({ navigation }) => {
  const [todos, setTodos] = useState([{ text: 'buy coffee', key: 1 }]);

  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key !== key);
    });
  };

  const submitHandler = text => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS!', 'Todo must be over 3 chars long', [
        {
          text: 'Cancel',
          onPress: () => 'Cancel Pressed',
          style: 'cancel',
        },
        { text: 'OK', onPress: () => 'OK Pressed' },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <FeedContainer>
        <AddTodo submitHandler={submitHandler} />
        {todos.length > 0 && (
          <ListContainer>
            <TodosTitle>TODOS</TodosTitle>
            <List
              data={todos}
              // this renders the todos with title: text
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </ListContainer>
        )}

        <View>
          <NavButton onPress={() => navigation.navigate('Activities')}>
            <Text>No todos? go to activities</Text>
          </NavButton>
        </View>
      </FeedContainer>
    </TouchableWithoutFeedback>
  );
};
