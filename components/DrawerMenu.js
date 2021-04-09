import React, { useState } from "react";
import "react-native-gesture-handler";
import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { ComicsList } from "../pages/ComicsList";
import { ComicDetails } from "../pages/ComicDetails";
import { Home } from "../pages/Home";

const Drawer = createDrawerNavigator();

export const DrawerMenu = () => {
  const dimensions = useWindowDimensions();
  const [comicsId, setComicsId] = useState();

  const ComicsL = ({ navigation }) => {
    return (
      <ComicsList
        comicsId={comicsId}
        setComicsId={setComicsId}
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
        component={ComicsL}
        options={{ title: "Marvel" }}
      />
      {comicsId && (
        <Drawer.Screen
          name="ComicDetails"
          component={ComicDetails}
          options={{
            drawerLabel: `${comicsId}`,
            activeTintColor: "red",
            activeBackgroundColor: "red",
            inactiveTintColor: "red",
          }}
        />
      )}
    </Drawer.Navigator>
  );
};
