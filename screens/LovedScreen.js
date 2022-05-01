import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';

const LovedScreen = (props) => {

    const lovedAnimals = props.route.params.lovedAnimals;

  return (    
    <ScrollView>
        <View style={styles.container}>
            <Text style={styles.textheading}>This is the Loved screen! Your loved animals are: </Text>
                {lovedAnimals.map((a) => <Image key={a} style={styles.lovedimage} source={{uri: a}} />)}
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        display: 'flex',
        alignItems: 'center'
    },
    lovedimage: {
        height: 300,
        resizeMode: 'contain',
        aspectRatio: 1    
    },
    textheading: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default LovedScreen;