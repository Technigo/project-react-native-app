import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';


import { Home } from './screens/Home';
import { Feed } from './screens/Feed';
import { Likes } from './screens/Likes';
import Login from './screens/Login';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import image from './assets/office.jpg'
// import { Base } from './styles';

const Drawer = createDrawerNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [phrases, setPhrases] = useState([]);

  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home">
          {(screenProps) => <Home 
            {...screenProps}
            isLoggedIn={isLoggedIn} 
            image={image}
          />}
        </Drawer.Screen>
        {/* <Drawer.Screen name="Feed" component={Feed} /> */}
        <Drawer.Screen name="Feed">
          {(screenProps) => <Feed 
            {...screenProps}
            isLoggedIn={isLoggedIn}
            setPhrases={setPhrases}
            image={image}
          />}
        </Drawer.Screen>
        {/* <Drawer.Screen name="Likes" component={Likes} /> */}
        <Drawer.Screen name="Likes">
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

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

export default App;

// import * as React from 'react';
// import { View, Text, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from '@react-navigation/drawer';

// function Feed({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed Screen</Text>
//       <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
//       <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
//     </View>
//   );
// }

// function Notifications() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Notifications Screen</Text>
//     </View>
//   );
// }

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Close drawer"
//         onPress={() => props.navigation.closeDrawer()}
//       />
//       <DrawerItem
//         label="Toggle drawer"
//         onPress={() => props.navigation.toggleDrawer()}
//       />
//     </DrawerContentScrollView>
//   );
// }

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator
//       useLegacyImplementation
//       drawerContent={(props) => <CustomDrawerContent {...props} />}
//     >
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Notifications" component={Notifications} />
//     </Drawer.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyDrawer />
//     </NavigationContainer>
//   );
// }