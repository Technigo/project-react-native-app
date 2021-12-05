import React from 'react';
import styled from 'styled-components/native';
import CharacterList from './components/CharacterList';
/* import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; */

const Container = styled.View`
  background-color: #303054;
  padding: 60px 30px;
`;

const Title = styled.Text`
  font-size: 40px;
  color: #a1d12b;
`;

/* const Stack = createNativeStackNavigator();
 */

const App = () => {
  return (
    <Container>
      <Title>Pick Your Rick</Title>
      <CharacterList />
    </Container>
  );
};

/* const App = () => {
  return (
    <Container>
      <Stack.Navigator>
        <Title>Pick Your Rick</Title>
        <Stack.Screen name='Home' component={HomeScreen} />
        <CharacterList />
      </Stack.Navigator>
    </Container>
  );
}; */

export default App;
