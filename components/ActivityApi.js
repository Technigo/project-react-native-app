import React, {useState, useEffect} from 'react'   
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'



const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%'
    },
    button: {
        backgroundColor: 'red',
        width: 170,
        padding: 5,
        borderRadius: 15,
        margin: 15
    },
    buttonText: {
        fontSize: 16,
        alignSelf: 'center',
        padding: 5,
        textTransform: 'uppercase',
    },
    activityContainer: {
        backgroundColor: 'rgba(243, 236, 236, 0.1)',
        padding: 40,
    },
    activityText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center'
    }
  
})

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
            <View style={styles.activityContainer}>
            <Text style={styles.activityText}>{activity.activity}</Text>
            </View> 
        </View>


    )
}
    

export default ActivityApi