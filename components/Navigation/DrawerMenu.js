import React, { useState} from "react";
import "react-native-gesture-handler";
import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { ComicsList } from "../../pages/ComicsList";
import { ComicDetails } from "../../pages/ComicDetails";
import { Home } from "../../pages/Home";
import {Game} from "../../pages/Game"

export const DrawerMenu = () => {
  const dimensions = useWindowDimensions();
  const [comicTitle, setComicTitle] = useState();
  const Drawer = createDrawerNavigator();

  const ComicsListScreen = ({ navigation }) => {
    return (
      <ComicsList
        comicTitle={comicTitle}
        setComicTitle={setComicTitle}
        navigation={navigation}
      />
    );
  };

  return (
    <Drawer.Navigator
      drawerType={dimensions.width >= 768 ? "permanent" : "front"}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        name="ComicList"
        component={ComicsListScreen}
        options={{ title: "Marvel" }}
      />
      {comicTitle && (
        <Drawer.Screen
          name="ComicDetails"
          component={ComicDetails}
          options={{ title: `${comicTitle}` }}
        />
        
      )}
        <Drawer.Screen
        name="Game"
        component={Game}
        options={{ title: "Game" }}
      />
    </Drawer.Navigator>
  );
};
