import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import styled from 'styled-components'

export default function TodoList(props) {
  return (
    <ListContainer>
      <Icon
        name={props.checked ? 'check' : 'square'}
        size={30}
        color="grey"
        style={{ marginLeft: 15 }}
        onPress={props.setChecked}
      />
      <Container>
        {props.checked && <VerticalLine />}
        <ListItem>{props.text}</ListItem>
      </Container>
      <Icon
        name="trash-2"
        size={30}
        color="#aa4d6a"
        style={{ marginLeft: 'auto', marginRight: 15 }}
        onPress={props.deleteTodo}
      />
    </ListContainer>
  )
}

const ListContainer = styled.View`
    margin-top: 3%;
    flex-direction: row;
    width: 100%;
    align-items: stretch;
    min-height: 40;
    `

const Container = styled.View``

const ListItem = styled.Text`
  padding-bottom: 20;
  padding-left: 10;
  margin-top: 6;
  border-color: grey;
  border-bottom-width: 1;
  font-size: 17;
  font-weight: bold;
  color: #514e4c;
`
const VerticalLine = styled.View`
  border-bottom-color: darkgrey;
  border-bottom-width: 4;
  marginLeft: 10;
  width: 100%;
  position: absolute;
  marginTop: 15;
  fontWeight: bold;
`