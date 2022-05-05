import React from "react";
import styled from "styled-components/native";
import ButtonApi from "./components/ButtonApi";
import ShakeApi from "./components/ShakeApi";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Avatar } from "react-native-paper";


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
  return (
    <>

      <NavigationContainer>
      <Avatar.Image size={60} source={require('./assets/Nabeel.jpg')} />
        <Drawer.Navigator initialRouteName="Button">
          <Drawer.Screen name="Today's quote" component={ButtonApi} />
          <Drawer.Screen name="Shake to get" component={ShakeApi} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;


