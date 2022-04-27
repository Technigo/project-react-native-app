import React from 'react'
import {
    StyleSheet, 
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'

    },
    button: {
        backgroundColor: 'yellow',
        width: '30%',
        height: 40,
        borderRadius: 5,
        margin: 5
    },
    buttonText: {
        fontSize: 20,
        alignSelf: 'center',
        padding: 5
    },
    speakerButton: {
        width: 45,
        height: 30
    }
})

const Buttons = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Search!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Clear</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image 
                style={styles.speakerButton}
                source={require('../assets/speaker-icon.png')}/>
            </TouchableOpacity>
        </View>
    )
}

export default Buttons