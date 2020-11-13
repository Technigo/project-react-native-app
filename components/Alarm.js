import React from 'react'
import {Text, View, Button, Alert} from 'react-native'
// import AlarmClock from "react-native-alarm-clock";

export const Alarm = () => {
const setAlarm = () => {
    let date = new Date();
    // date.setDate(date.getDate() + 1);
    date.setHours(13, 55);
    Alert.alert(date.toString())

    
    AlarmClock.createAlarm(date.toISOString(), 'My Custom Alarm');
}

    return (
        <View>
            <Text>Hej då!</Text>
            <Button title="hej" onPress={setAlarm}></Button>
            
        </View>
    )
}