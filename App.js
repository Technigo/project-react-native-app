import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { View, Text, FlatList, ScrollView, Dimensions } from "react-native";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import FormInput from "./components/FormInput";
import Time from "./components/Time";
import Weather from "./components/Weather";
// import { Weather } from "./components/Weather";

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
  padding: 100px;
`;

const Scroll = styled.ScrollView`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ScrollScreen = Dimensions.get("window").width;

const App = () => {
  const [todos, setTodos] = useState([{ text: "Click me to undo" }]);

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
      <Header />
      <Weather />
      <Scroll />

      <View>
        <FormInput submitHandler={submitHandler} />
        <View>
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
