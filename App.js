import React, { useState } from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import ShakeApi from './components/ShakeApi';
import ButtonApi from './components/ButtonApi';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

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

const Drawer = createDrawerNavigator();

const App = () => {
  // const [currentTab, setCurrentTab] = useState('Button');
  // return (
  //   <Container>

  //     <Button title="Button API" onPress={() => setCurrentTab('Button')} />
  //     <Button title="Shake API" onPress={() => setCurrentTab('Shake')} />
  //     {currentTab === 'Button' && <ButtonApi />}
  //     {currentTab === 'Shake' && <ShakeApi />}

  //   </Container>
  // );

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Button" component={ButtonApi} />
        <Drawer.Screen name="Shake" component={ShakeApi} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
