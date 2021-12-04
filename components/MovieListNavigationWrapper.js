import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MovieList } from './MovieList';
import { MovieDetails } from './MovieDetails';


const Stack = createNativeStackNavigator();

export const MovieListNavigationWrapper = ({ route, navigation }) => {

//Navigation-wrapper - the one in the top
    return (
        <Stack.Navigator
        screenOptions={({ route, navigation }) => ({
            headerShown: false, })}>
            <Stack.Screen name="Main List" component={MovieList} initialParams={route.params} />
            <Stack.Screen name="Details" component={MovieDetails} />
        </Stack.Navigator>
    )
}



