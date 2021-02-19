import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class Note extends React.Component {
  render() {
    return (

      <View style={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>

      <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete} >
        <Text style={styles.noteDeleteText}>🛒</Text>
      </TouchableOpacity>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#263938',
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftcolor: '#E91E63',
  },
  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
  noteDeleteText: {
    color: 'white',
  },
 
});