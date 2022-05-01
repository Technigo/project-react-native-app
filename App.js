import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import Activity from './src/Activity';
import Header from './src/Header';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
//import * as Speech from 'expo-speech';
import { Dimensions } from 'react-native';
import Stacks from './src/Stacks';


const App = ( ) => {

    let [fontsLoaded] = useFonts({
        'Bulj': require('./assets/fonts/Bulj.ttf')
    })



	return (

			 <SafeAreaView style={{flex: 1}}>
					<Header />
					
					<Stacks />

			 </SafeAreaView>
		
	);

	}
export default App;


// const storeVakue = async () => {
// 	try {
// 		await AsyncStorage.setItem('value', 'hello')
// 	}
// 		catch (error) {
// 			console.log(error)
// 		}

// }
// storeVakue()

// const getValue = async () => {
// 	try {
// 		const data = await AsyncStorage.getItem('value');

// 		if (data !== null) {
// 			console.log(data)
// 		}
// 		}
// catch(error) {
// 	 console.log(error)
// }
// }

