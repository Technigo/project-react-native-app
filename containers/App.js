import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text, View, Navigator, TouchableHighlight,  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';

const appName = 'Step counter';

class HomeScreen extends React.Component {
  state= {
    counter: 0,
  }

  render() {
    const counter = this.state.counter;

    return (
      <View style={styles.container}>
        <Text>Counter: {counter}</Text>
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: appName,
    }),
  }
});

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <AppContainer />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 25,
  }
})


export default App
