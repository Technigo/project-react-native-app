import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Feed } from './screens/Feed';
import { Notifications } from './screens/Notifications';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RandomQuote } from './screens/RandomQuote';
import { MagicBall } from './screens/MagicBall';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Feed' component={Feed} />
        <Drawer.Screen name='Notifications' component={Notifications} />
        <Drawer.Screen name='Get Random Quote' component={RandomQuote} />
        <Drawer.Screen name='Try the Magic Ball' component={MagicBall} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

// import React from 'react';
// import styled from 'styled-components/native';

// import ButtonApi from './components/ButtonApi';
// import ShakeApi from './components/ShakeApi';

// const Container = styled.View`
//   flex: 1;
//   background-color: papayawhip;
//   justify-content: center;
//   align-items: center;
// `;

// const Title = styled.Text`
//   font-size: 24px;
//   color: palevioletred;
// `;

// const App = () => {
//   return (
//     <Container>
//       <ShakeApi />
//     </Container>
//   );
// };

// export default App;
