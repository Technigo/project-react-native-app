import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import ScalableText from 'react-native-text'
import { useDispatch } from 'react-redux'

import StyledButton from './StyledButton'

import game, { startGame } from '../reducers/game'
import { Colors } from '../assets/colors'


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
        <View style={styles.container}>
            <ScalableText style={styles.welcomeText}>The Labyrinth</ScalableText>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        backgroundColor: Colors.grain,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: 'bold',
		color: Colors.blackboard,
        textAlign: 'center',
        marginBottom: 10
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.oxblood,
        marginBottom: 5
    },
    input: {
        height: 35,
        backgroundColor: Colors.white,
        marginHorizontal: 30,
        marginVertical: 15,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        minWidth: 150
    },
});

export default StartGame