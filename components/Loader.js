import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { Colors } from '../assets/colors';

const Loader = () => {

  const isLoading = useSelector(store => store.game.loading)

  return (
    isLoading && (
    <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.oxblood} />
    </View>
    )
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.grain,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Loader