import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const Header = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>
                Hello, I'm 
                <Text style={styles.name}> PennyWise.</Text>
            </Text>
            <Text style={styles.text}>I am here to answer whatever question that may bother you (only if it's a 'yes' or 'no' question) .</Text>
            <Text style={styles.text}>
                Gently 
                <Text style={styles.shake}> shake your phone </Text> 
                to reveal my answers.
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    view: {
        marginBottom: 70,
    },
    text: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18
    },
    name: {
        color: "tomato",
        fontWeight: '700',
        fontSize: 18
      },
    shake: {
        color: "tomato"
    },
});

export default Header; 
