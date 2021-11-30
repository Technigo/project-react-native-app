import * as React from 'react';
import styled from 'styled-components/native';
import { SensorComponent } from './components/SensorComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import { MovieList } from './components/MovieList';

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`;
const Stack = createNativeStackNavigator();

const App = () => {
  return (
//     <NavigationContainer>
//        <Container>
//        <MovieList></MovieList>
//      </Container>

//  {/* <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={MovieList}
//         />
//         {/* <Stack.Screen name="Profile" component={ProfileScreen} /> 
//       </Stack.Navigator> */}

//     </NavigationContainer>

     <Container>
       <MovieList></MovieList>
     </Container>
  );
};

export default App;
