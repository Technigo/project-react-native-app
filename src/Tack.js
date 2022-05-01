import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Activity from './Activity';
import Header from './Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Saved from './Saved';

const Stack = createNativeStackNavigator();


const Tack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen               
                    name='Acitvity'
                    component={Activity}  
                    options={{
                        title:'',
                        headerStyle: {
                            backgroundColor:'red',
                            height: 0                    
                        }
                    }} 
                 
                />
                <Stack.Screen name="Activity Details" component={Saved} />

         
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Tack