import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MovieList } from './MovieList';
import { MovieDetails } from './MovieDetails';


const Stack = createNativeStackNavigator();

export const MovieListNavigationWrapper = ({ route, navigation }) => {


    return (
        <Stack.Navigator>
            <Stack.Screen name="List" component={MovieList} initialParams={route.params} />
            <Stack.Screen name="Details" component={MovieDetails} />
        </Stack.Navigator>
    )
}



