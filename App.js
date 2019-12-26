import React from "react";
import styled from "styled-components/native";
import { Text, Button, View, Image } from "react-native";

// import { Header } from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import MoreInfo from "./components/MoreInfo";

//////
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// import HomeScreen from './components/HomeScreen';
// import AboutScreen from './components/AboutScreen';

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

export const App = () => {
  return (
    <AppContainer>
      <Container></Container>
    </AppContainer>
  );
};

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  MoreInfo: { screen: MoreInfo }
});

const AppContainer = createAppContainer(AppNavigator);
///////
// const App = () => {
//   return (
//     <Container>
//       <HomeScreen />
//     </Container>
//   );
// };

const Container = styled.View`
  flex-direction: ${props => (props.row ? "row" : "column")};
  background-color: #000;
  height: ${props => (props.full ? "100%" : "auto")};
  align-self: center;
  width: 100%;
`;

// const List = styled.FlatList`
//   flex: 3;
//   background-color: papayawhip;
//   align-self: center;
//   width: 100%;
// `;

const Title = styled.Text`
  font-size: 14px;
  color: palevioletred;

  width: 100%;
  margin: 0 auto;

  height: 20;
`;

// const Input = styled.TextInput`
//   border-color: black;
//   border-width: 1px;
//   width: 80%;
//   height: 30;
//   flex: 1;
// `;

// const ButtonPress = styled.Button`
//   margin: 0;
// `;

export default App;
