import React from 'react'
import styled from "styled-components"
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

export default function TodoList(props) {

  return (
    <Container>
      <Icon name={props.checked ? "check" : "circle"}
        size={30}
        color="black"
        style={{ marginLeft: 15 }}
        onPress={props.setChecked}
      />
      <View>
        {props.checked && <VerticalLine />}
        <ListItem>{props.text}</ListItem>
      </View>
      <Icon
        name="delete"
        size={30}
        color="red"
        style={{
          marginLeft: "auto",
          marginRight: 15
        }}
        onPress={props.deleteTodo}
      />
    </Container>
  )
}

const Container = styled.View`
  margin-top: 5%;
  flex-direction: row;
  border-color: #aaaaaa;
  border-bottom-width: 1.5px;
  width: 100%;
  align-items: stretch;
  min-height: 40px;
`
const ListItem = styled.Text`
  padding-bottom: 15px;
  padding-left: 10px;
  margin-top: 6px;
  border-bottom-width: 1px;
  font-size: 17px;
  font-weight: bold;
  color: black;
`

const VerticalLine = styled.View`
  border-bottom-color: #e26d5a;
  border-bottom-width: 4px;
  margin-left: 10px;
  width: 100%;
  position: absolute;
  margin-top: 15px;
  font-weight: bold;
`
