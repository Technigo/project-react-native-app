import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RandomQuote } from "./screens/RandomQuote";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { About } from "./screens/About";
import { Home } from "./screens/Home";

const Drawer = createDrawerNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name="Today's Quote" component={RandomQuote} />
				<Drawer.Screen name="Home" component={Home} />
				<Drawer.Screen name="About" component={About} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default App;
