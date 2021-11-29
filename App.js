import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ButtonApi } from './screens/ButtonApi'
import { ShakeApi } from './screens/ShakeApi'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StartScreen } from './screens/StartScreen'

const Drawer = createDrawerNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name="What's up?" component={StartScreen} />
				<Drawer.Screen name="Click for Quote" component={ButtonApi} />
				<Drawer.Screen name="Shake for Quote" component={ShakeApi} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default App
