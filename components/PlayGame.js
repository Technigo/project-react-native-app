import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import ScalableText from 'react-native-text'
import { useSelector, useDispatch } from 'react-redux'

import StyledButton from './StyledButton'
import DirectionButton from './DirectionButton'

import game, { getNextPosition } from '../reducers/game'
import { Colors } from '../assets/colors'

const PlayGame = () => {

    const currentPosition = useSelector((state) => state.game.currentPosition)
    const username = useSelector((state) => state.game.username)

    const dispatch = useDispatch()

    const handleAction = (actionDirection) => {
        dispatch(getNextPosition(actionDirection, username))
    }

    const handleRestart = () => dispatch(game.actions.restartGame())

    return (
        <>
            <ScalableText style={styles.currentText}>{currentPosition.description}</ScalableText>

            {currentPosition.actions.map((action, index) => {
                return (
                    <View style={styles.actionsContainer} key={index}>
                        <ScalableText style={styles.actionText}>{action.description}</ScalableText>
                        <View style={styles.buttonContainer}>
                            <DirectionButton
                              title={`Go ${action.direction.toLowerCase()}`}
                              onPress={() => handleAction(action.direction)}
                             />
                        </View>
                    </View>
                )
            })}
    
            <StyledButton 
              title="Restart"
              onPress={handleRestart}
            />
        </>
    )
}


const styles = StyleSheet.create({
    currentText: {
        marginHorizontal: 20,
        marginBottom: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.oxblood
    },
    actionsContainer: {
        backgroundColor: Colors.tan,
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 10,
        borderRadius: 30
    },  
    actionText: {
        marginHorizontal: 20,
        marginVertical: 10,
        fontSize: 16,
        color: Colors.black,
    },
    buttonContainer: {
        alignItems: 'center'
    },
});

export default PlayGame