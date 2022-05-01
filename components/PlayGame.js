import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import ScalableText from 'react-native-text'
import { useSelector, useDispatch } from 'react-redux'

import StyledButton from './StyledButton'

import game, { getNextPosition } from '../reducers/game'

const PlayGame = () => {

    const currentPosition = useSelector((state) => state.game.currentPosition)
    const username = useSelector((state) => state.game.username)

    const dispatch = useDispatch()

    const handleAction = (actionDirection) => {
        dispatch(getNextPosition(actionDirection, username))
    }

    const handleRestart = () => dispatch(game.actions.restartGame())

    let restartButton

    if (currentPosition.actions.length === 0) {
        restartButton = (
            <TouchableOpacity
                style={styles.submitButton}
                onPress={handleRestart}
            >
                <Text>Restart</Text>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <ScalableText style={styles.currentText}>{currentPosition.description}</ScalableText>

            {currentPosition.actions.map((action, index) => {
                return (
                    <View key={index}>
                        <ScalableText style={styles.actionText}>{action.description}</ScalableText>
                        <View style={styles.buttonContainer}>
                            <StyledButton
                              title={`Go ${action.direction.toLowerCase()}`}
                              onPress={() => handleAction(action.direction)}
                             />
                        </View>
                    </View>
                )
            })}
            {/* Restart button is displayed when there are no actions left */}
            {restartButton}
        </>
    )
}


const styles = StyleSheet.create({
    currentText: {
        marginHorizontal: 20,
        marginBottom: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    actionText: {
        marginHorizontal: 20,
        marginVertical: 20,
        fontSize: 18,
        color: '#fff',
    },
    buttonContainer: {
        alignItems: 'center',
    },
});

export default PlayGame