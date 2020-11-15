import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import {  ScrollView, View, Text, SafeAreaView, StatusBar, Button, Linking, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Details = ({ route, navigation }) => {
    const { title, author, image, description, buyLink } = route.params;
    return (
        <View>
            <Image
                    source={{ uri: `${image}` }}
                    style={{
                        width: 284,
                        height: 367,
                    }}
                />
            <Text>{title}</Text>
            <Text>{author}</Text>
            <Text>{description}</Text>
            <Button 
                title="Buy" 
                onPress={ ()=>{ Linking.openURL(buyLink).catch((err) => console.error('An error occurred', err));}} />
        </View>
    )
}

export default Details;