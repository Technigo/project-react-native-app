import React, { useState } from "react";
import {
        Linking,
        ActivityIndicator,
        View,
        Button,
        StyleSheet,
    } from 'react-native';
import * as Location from 'expo-location';

const LocationApi = () => {

    const [loading, setLoading] = useState(false)

    // v1 - Promise
    // const getLocation = () => {
    //     Location.requestForegroundPermissionsAsync()
    //     .then((data) => {
    //         if (data.status !== 'granted') {
    //             console.log('Permission to access location was denied');
    //         } else {
    //             return Location.getCurrentPositionAsync({});
    //         }
    //     })
    //     .then((locationData) => {
    //         Linking.openURL(
    //             `https://www.google.com/maps/place/${locationData.coords.latitude},${locationData.coords.longitude}`
    //         )
    //     .finally(() => setLoading(false))
    //     })
    // }

    // v2 - Async await
    const getLocation = async () => {
        setLoading(true)
        let data = await Location.requestForegroundPermissionsAsync();
        if (data.status !== 'granted') {
            setLoading(false)
            alert('Permission to access location was denied!');
        } else {
            let locationData = await Location.getCurrentPositionAsync({});
            Linking.openURL(
                `https://www.google.com/maps/place/${locationData.coords.latitude},${locationData.coords.longitude}`
            )
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <ActivityIndicator
                size="large"
                color="silver"
            />
        )
    }

    return(
        <View style={styles.view}>
            <Button
                title="Open Maps"
                onPress={getLocation}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
    }
})

export default LocationApi