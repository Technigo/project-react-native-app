import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text, FlatList } from "react-native";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import FormInput from "./components/FormInput";
import Time from "./components/Time";

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "buy milk", key: "2" },
    { text: "drink coffee", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };

  return (
    <Container>
      {/* <Time /> */}
      <Header />
      <View>
        <FormInput submitHandler={submitHandler} />
        <View>
          {" "}
          {/* style={styles.list} */}
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoList item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </Container>
  );
};

export default App;

// const TopContainer = styled.View`
//   background-color: "black";
// `;

// const BottomContainer = styled.View`
//   background-color: "red;
//   color: "white";
// `;

// const Title = styled.Text`
//   font-size: 24px;
//   color: palevioletred;
// `;
