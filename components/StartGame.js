import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import ScalableText from 'react-native-text'
import { useDispatch } from 'react-redux'

import StyledButton from './StyledButton'

import game, { startGame } from '../reducers/game'


const StartGame = () => {

    const [inputName, setInputName] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(game.actions.setUsername(inputName))
        dispatch(startGame())
        setInputName('')
    }

    return (
        <>
            <ScalableText style={styles.h1}>Welcome to the Labyrinth!</ScalableText>
            <ScalableText style={styles.label}>What's your name?</ScalableText>
            <TextInput
                style={styles.input}
                maxLength={25}
                value={inputName}
                onChangeText={newNameInput => setInputName(newNameInput)}
            />
            <StyledButton
                onPress={handleSubmit}
                title="Start the game"
            >
            </StyledButton>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#008080',
        alignItems: 'center',
        justifyContent: 'center',
    },
    h1: {
        fontSize: 24,
        textAlign: 'center',
        color: '#fff',
        marginBottom: 10
    },
    label: {
        fontSize: 16,
        textAlign: 'center',
        color: '#fff',
        marginBottom: 5
    },
    input: {
        height: 30,
        backgroundColor: '#fff',
        marginHorizontal: 30,
        marginVertical: 15,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        alignSelf: 'stretch'
    },
});

export default StartGame