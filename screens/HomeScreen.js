import React, { useState, useEffect } from 'react';
import { RefreshControl, ScrollView, Text, Image, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const HomeScreen = ( props ) => {

    const [refreshing, setRefreshing] = React.useState(false);
    const [animal, setAnimals] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        getAnimalsInfo();
      }, []);

    const getAnimalsInfo = () => {
        setIsLoading(true);
            fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
                .then((res) => res.json())
                .then((animal) => {
                    setRefreshing(false);
                    setAnimals(animal);
                    setIsLoading(false);
            })
    };

    const imageSrc = { uri: animal.image_link };

    return (
            <ScrollView 
                contentContainerStyle={styles.scrollView} 
                refreshControl={
                    <RefreshControl 
                        refreshing={refreshing} 
                        onRefresh={getAnimalsInfo}
                    />
                }
            >
            <View style={styles.view}>
                <Text style={styles.text}>Welcome to Random Zoo Animals. To save an animal, click the heart and read more about it later!</Text>
            </View>
            <Image
                style={styles.randomimage}
                source={imageSrc}
            />  
            <Ionicons style={styles.icon} name='ios-heart' size={100} color='red' onPress={ () => props.route.params.onPressHeart(animal.image_link) } />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 0,
    },
    randomimage: {
        display: 'flex',
        flex: 1,
        height: undefined,
        width: undefined,
        resizeMode: 'contain',
        aspectRatio: 1,
        marginBottom: 0
    },
    view: {
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 20,
        marginTop: 20,
        textAlign: 'center',
    },
    text: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 26
    }
});

export default HomeScreen;