import * as React from 'react';
import styled from 'styled-components/native';
import { SensorComponent } from './components/SensorComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import { MovieList } from './components/MovieList';
import { MovieDetails } from './components/MovieDetails';

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
        <Tab.Navigator backBehavior="history">
          <Tab.Screen name="Start" component={MovieList} initialParams={{ listId: 'default' }} />
          <Tab.Screen name="Christmas" component={MovieList} initialParams={{ listId: 'christmas' }} />
          <Tab.Screen name="Top Rated" component={MovieList} initialParams={{ listId: 'toprated' }} />
          <Tab.Screen options={{
        tabBarButton: () => null,
        tabBarVisible: false, // if you don't want to see the tab bar
      }}
      name="Details" component={MovieDetails}  />
        </Tab.Navigator>
      </NavigationContainer>
    //  <Container>
    //    <MovieList></MovieList>
    //  </Container>
  );
};

export default App;
