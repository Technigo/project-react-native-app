import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { 
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_900Black, 
} from '@expo-google-fonts/inter';

import Home from './screens/Home';
import Feed from './screens/Feed';
import Likes from './screens/Likes';
import Login from './screens/Login';

import image from './assets/office.jpg'

const Drawer = createDrawerNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [phrases, setPhrases] = useState([]);

  let [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="small" color="#0000ff" />;
  }

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
      </DrawerContentScrollView>
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation
        drawerContent={
          (props) => <CustomDrawerContent {...props} 
        />}
      >
        <Drawer.Screen name="Home">
          {(screenProps) => <Home 
            {...screenProps}
            isLoggedIn={isLoggedIn} 
            image={image}
          />}
        </Drawer.Screen>
        <Drawer.Screen name="Feed">
          {(screenProps) => <Feed 
            {...screenProps}
            isLoggedIn={isLoggedIn}
            setPhrases={setPhrases}
            image={image}
          />}
        </Drawer.Screen>
        <Drawer.Screen name="Saved">
          {(screenProps) => <Likes 
            {...screenProps}
            isLoggedIn={isLoggedIn}
            phrases={phrases}
            setPhrases={setPhrases}
            image={image}
          />}
        </Drawer.Screen>
        <Drawer.Screen name="Login">
          {(screenProps) => <Login 
            {...screenProps}
            isLoggedIn={isLoggedIn} 
            setIsLoggedIn={setIsLoggedIn}
            image={image}
          />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
