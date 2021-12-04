import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { ButtonApi } from './screens/ButtonApi'
import { ShakeApi } from './screens/ShakeApi'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { RandomVideos } from './screens/RandomVideos'
import { HomeScreen } from './screens/HomeScreen'
import { StatusBar } from 'expo-status-bar'
import { StepCount } from './screens/StepCount'
import { DrawerContent } from './screens/DrawerContent'
import { Contact } from './screens/Contact'


const Drawer = createDrawerNavigator()


const App = () => {
	return (
		<NavigationContainer>
			<StatusBar />
		
			<Drawer.Navigator 
			  drawerContent={props => <DrawerContent {...props}/>}>
				  <Drawer.Screen name='Home' component={HomeScreen}></Drawer.Screen>
				  <Drawer.Screen name='Step on' component={StepCount}></Drawer.Screen>
				  <Drawer.Screen name='Click for Quote' component={ButtonApi}></Drawer.Screen>
				  <Drawer.Screen name='Shake for Quote' component={ShakeApi}></Drawer.Screen>
				  <Drawer.Screen name='Random videos' component={RandomVideos}></Drawer.Screen>
				  <Drawer.Screen name='Contact' component={Contact}></Drawer.Screen>
			</Drawer.Navigator>
		</NavigationContainer>
	)
}

export default App
