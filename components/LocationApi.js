import React, { useState, useEffect } from "react";
import {
        View,
        ActivityIndicator,
        Button,
        StyleSheet
    } from 'react-native';
import * as Location from 'expo-location';

const LocationApi = () => {

    const [loading, setLoading] = useState(false)
    const [location, setLocation] = useState({})

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
                title="Get location"
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