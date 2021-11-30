import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ButtonApi } from './screens/ButtonApi'
import { ShakeApi } from './screens/ShakeApi'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StartScreen } from './screens/StartScreen'
import { Contact } from './screens/Contact'
import { Profile } from './screens/Profile'
import { StatusBar } from 'expo-status-bar'
import { StepCount } from './screens/StepCount'
// import { Ionicons } from '@expo/vector-icons'


const Drawer = createDrawerNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<StatusBar />
			<Drawer.Navigator
			  screenOptions={{
				drawerStyle: {
				  backgroundColor: '#dedede',
				  width: 343,
				},
			  }}>
				<Drawer.Screen name="What's up?" component={StartScreen} />
				<Drawer.Screen name="Step on" component={StepCount} />
				<Drawer.Screen name="Click for Quote" component={ButtonApi} />
				<Drawer.Screen name="Shake for Quote" component={ShakeApi} />
				<Drawer.Screen name="Your profile" component={Profile} />
				<Drawer.Screen name="Contact" component={Contact} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default App
