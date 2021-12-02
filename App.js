import * as React from 'react';
import styled from 'styled-components/native';
import { SensorComponent } from './components/SensorComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import { MovieList } from './components/MovieList';

const Container = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`;
const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Start" component={MovieList} />
          <Tab.Screen name="Christmas" component={MovieList} />
          <Tab.Screen name="Top Rated" component={MovieList} />
        </Tab.Navigator>
      </NavigationContainer>
    //  <Container>
    //    <MovieList></MovieList>
    //  </Container>
  );
};

export default App;
