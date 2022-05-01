import React from 'react'
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import Loader from './Loader';
import StartGame from './StartGame';
import PlayGame from './PlayGame';
import { Colors } from '../assets/colors';

const Game = () => {

    const username = useSelector(store => store.game.username)
    const isLoading = useSelector(store => store.game.loading)

    if (isLoading) {
        return <Loader />
    }

    return (
        <View style={styles.screenContainer}>
            {!username ? <StartGame /> : <PlayGame />}
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: Colors.grain,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Game