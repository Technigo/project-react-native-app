import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import StartPage from './components/StartPage';
import ButtonApi from './components/ButtonApi';
import ShakeApi from './components/ShakeApi';


// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// const NotificationsScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Start">
        <Drawer.Screen name="Start" component={StartPage} />
        <Drawer.Screen name="Shake" component={ShakeApi} />
        <Drawer.Screen name="Button" component={ButtonApi} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  )
 
}
export default App



// const App = () => {

//   const [color, setColor] = useState({color: 'pink',});
  
//     const randomHex =() =>{
//       console.log("Func Called");
//       let letters = "0123456789ABCDEF";
//       let random = "#";
//       for (let i = 0; i < 6; i++) {
//           random += letters[Math.floor(Math.random() * 16)];
//       }
//       setColor({
//         color: random,
//       });
//       console.log("New color: "+color.color);
//     };


// 	return (
// 		<View style={[styles.container, {backgroundColor: color.color }]}>
// 			<Header />
// 			{/* <ButtonApi /> */}
// 			<ShakeApi />
// 			{/* <Button title="Color" onPress={randomHex} style={[styles.button]}/> */}
//       <Button 
//         title="Color"
//         onPress={randomHex}
//         // style={{ backgroundColor: 'black', marginTop: '40', color: 'black', }}
//         />
// 		</View>
// 	);
// }

// var styles = {
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     // button: {
//     //   color: 'black',
//     // }
//   }

//  export default App
