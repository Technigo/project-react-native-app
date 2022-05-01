import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

const Loader = () => {

  const isLoading = useSelector(store => store.game.loading)

  return (
    isLoading && (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="#ffff00" />
    </View>
    )
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#483d8b',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Loader