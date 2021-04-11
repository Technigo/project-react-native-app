import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import "react-native-gesture-handler";

import {ChooseHero} from "../Game/ChooseHero"
import {PlayGame } from "../Game/PlayGame"

export const StackNav = ({navigation}) => {
  const Tab = createBottomTabNavigator()
/*   const characters = require("../../assets/characters.json"); */
  
  const ChooseHeroes = ({navigation}) => {
    return <ChooseHero navigation={navigation} />
  }

  return (
    <Tab.Navigator initialRouterName="ChooseHero">
      <Tab.Screen name="ChooseHero" component={ChooseHeroes} options={{tabBarVisible: false}}/>
      <Tab.Screen name="PlayGame" component={PlayGame} options={{tabBarVisible: false}}/>
    </Tab.Navigator>)

  }

