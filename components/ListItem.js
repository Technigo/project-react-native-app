import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const ListItem = ({item, deleteItem}) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemtext}>{item.text}</Text>
                <Text onPress={() => deleteItem(item.id)}>X</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
   listItem: {
       padding: 15,
       backgroundColor: '#f8f8f8',
       borderBottomWidth: 1,
       borderColor: '#eee'
  },
  listItemView: {
      flexDirection: 'row', 
      justifyContent: 'space-between',
      alignItems: 'center'

  } ,
listItemtext: {
    fontSize:18
}


})

export default ListItem
