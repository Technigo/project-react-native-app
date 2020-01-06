import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

export default function TodoList(props) {
  return (
    <View style={styles.listContainer}>
      <Icon
        name={props.checked ? 'check' : 'square'}
        size={30}
        color="grey"
        style={{ marginLeft: 15 }}
        onPress={props.setChecked}
      />
      <View>
        {props.checked && <View style={styles.verticalLine} />}
        <Text style={styles.listItem}>{props.text}</Text>
      </View>
      <Icon
        name="trash-2"
        size={30}
        color="darkred"
        style={{ marginLeft: 'auto', marginRight: 15 }}
        onPress={props.deleteTodo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: '3%',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'stretch',
    minHeight: 40
  },
  listItem: {
    paddingBottom: 20,
    paddingLeft: 10,
    marginTop: 6,
    borderColor: 'grey',
    borderBottomWidth: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#514e4c'
  },
  verticalLine: {
    borderBottomColor: 'darkgreen',
    borderBottomWidth: 4,
    marginLeft: 10,
    width: '100%',
    position: 'absolute',
    marginTop: 15,
    fontWeight: 'bold'
  }
})