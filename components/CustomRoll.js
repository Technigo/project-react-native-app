import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
    Vibration,
    ScrollView,
} from "react-native";
import styled from "styled-components/native";
import { Accelerometer } from "expo-sensors";

import { useSwipe } from "../hooks/useSwipe";

import Swipe from "./Swipe";
import Header from "./Header";

// const styles= StyleSheet.create({
//     container:{
//      height:'100%',
//      widht:'100%'
//     },
//     swipesGestureContainer:{
//      height:'100%',
//      width:'100%'
//     },
//    })

const CustomRoll = ({ navigation }) => {
    const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6);

    const onSwipeLeft = () => {
        navigation.navigate("Roll D6");
    };

    const onSwipeRight = () => {
        navigation.navigate("Roll D6");
    };

    return (
        <View onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <Text>This is react native swipe gesture</Text>
            <Text>Used to detect the user swipes and function accordingly</Text>
        </View>
    );
};

export default CustomRoll;
