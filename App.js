import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todo, setTodo] = useState([
    { text: "Buy ginger", key: "1" },
    { text: "Drink tea", key: "2" },
    { text: "Go to the park", key: "3" }
  ]);

  const pressHandler = key => {
    setTodo(prevTodo => {
      return prevTodo.filter(todo => todo.key != key);
    });
  };

  const submitHandler = text => {
    setTodo(prevTodo => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodo];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todo}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 30
  }
});
