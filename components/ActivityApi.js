import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'


const ActivityApi = () => {
    const [activity, setActivity] = useState({})

    const generateActivity = () => {
        fetch('http://www.boredapi.com/api/activity')
            .then(response => response.json())
            .then((data) => setActivity(data))
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={generateActivity}>
                <Text style={styles.buttonText}>Find activity!</Text>
            </TouchableOpacity>
            <Text style={styles.activityText}> {activity.activity}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%'
    },
    button: {
        backgroundColor: '#ED254E',
        width: 170,
        padding: 5,
        borderRadius: 50,
        margin: 15,
    },
    buttonText: {
        fontSize: 18,
        alignSelf: 'center',
        padding: 5,
        textTransform: 'uppercase',
    },
    activityText: {
        color: 'black',
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 30
    }
})


export default ActivityApi