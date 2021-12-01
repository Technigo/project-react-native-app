import React from 'react'
import { NavigationContainer, DrawerItemList, DrawerItem, DrawerContentScrollView } from '@react-navigation/native'
import { ButtonApi } from './screens/ButtonApi'
import { ShakeApi } from './screens/ShakeApi'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { RandomVideos } from './screens/RandomVideos'
import { HomeScreen } from './screens/HomeScreen'
import { Contact } from './screens/Contact'
import { StatusBar } from 'expo-status-bar'
import { StepCount } from './screens/StepCount'
import { Ionicons } from '@expo/vector-icons'
import { View, Image, Text } from 'react-native'


const Drawer = createDrawerNavigator()


const App = () => {
	return (
		<NavigationContainer>
			<StatusBar />
			<Drawer.Navigator 
			  screenOptions={{
				drawerStyle: {
					color: '#333',
					backgroundColor: '#dedede',
					width: 343,
				},
			  }}>

				<Drawer.Screen 
					name="Home" 
					component={HomeScreen}
					options={{
						drawerIcon: ({focused, size}) => (
							<Ionicons
								name="md-home"
								size={size}
								color={focused ? '#1a1a1a' : '#444'}
							/>
					),
				}}/>

				<Drawer.Screen 
					name="Random videos" 
					component={RandomVideos}
					options={{
						drawerIcon: ({focused, size}) => (
							<Ionicons
								name="videocam"
								size={size}
								color={focused ? '#1a1a1a' : '#444'}
						/>
					),
				}}/>

				<Drawer.Screen 
					name="Step on" 
					component={StepCount}
					options={{
						drawerIcon: ({focused, size}) => (
						<Ionicons
							name="planet"
							size={size}
							color={focused ? '#1a1a1a' : '#444'}
						/>
					),
				}}/>

				<Drawer.Screen 
					name="Click for Quote" 
					component={ButtonApi}
					options={{
						drawerIcon: ({focused, size}) => (
						<Ionicons
							name="book"
							size={size}
							color={focused ? '#1a1a1a' : '#444'}
						/>
					),
				}}/>

				<Drawer.Screen 
					name="Shake for Quote" 
					component={ShakeApi}
					options={{
						drawerIcon: ({focused, size}) => (
							<Ionicons
								name="heart-half"
								size={size}
								color={focused ? '#1a1a1a' : '#444'}
							/>
					),
				}}/>

				<Drawer.Screen 
					name="Contact" 
					component={Contact} 
					options={{
						drawerIcon: ({focused, size}) => (
							<Ionicons
								name="chatbubble"
								size={size}
								color={focused ? '#1a1a1a' : '#444'}
							/>
					),
				}}/>

			</Drawer.Navigator>
		</NavigationContainer>
	)
}

export default App
