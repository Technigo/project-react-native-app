import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import "react-native-gesture-handler";

import {ChooseHero} from "../../pages/Game/ChooseHero"
import {PlayGame } from "../../pages/Game/PlayGame"
import { SetVillain } from "../Game/SetVillain";
import { WinLoseScreen } from "../Game/WinLoseScreen";

export const StackMenu = ({navigation}) => {
  //local const
  const Stack= createStackNavigator()

//render
  return (
    <Stack.Navigator initialRouterName="ChooseHero">
      <Stack.Screen name="ChooseHero" component={ChooseHero} initialParams={{navigation:navigation}} options={{title:"Choose a Hero"}}/>
      <Stack.Screen name="PlayGame" component={PlayGame} options={{title:"Battle", headerLeft: ()=> null}}/>
      <Stack.Screen name="SetVillain" component={SetVillain} options={{title:"Meet your opponent"}}/>
      <Stack.Screen name="WinLoseScreen" component={WinLoseScreen} options={{title:"Result", headerLeft: ()=> null}} />
    </Stack.Navigator>)

  }

