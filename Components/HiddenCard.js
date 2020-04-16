import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity, Vibration } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { AsyncStorage } from 'react-native';

const Image = styled.Image`
  border-radius: 8px;
  box-shadow: 2px 2px 10px grey;
  margin: 10px;
  width: 100px;
  height: 100px;
`
export const HiddenCard = (props) => {
    const { photo, photos, count, setCount, firstGuess, setFirstGuess, selectedCard,
        setSelectedCard, id, solved, setSolved, moves, setMoves } = props
    const [open, setOpen] = useState(true)
    const [checking, setChecking] = useState(false)

    useEffect(() => {
        setTimeout(() => setOpen(false), 3000)
    }, [])

    useEffect(() => {
        setChecking(true)
        setTimeout(() => setChecking(false), 1500)
    }, [selectedCard])

    const guess = (photoId, id) => {
        if (count === 0) {
            setMoves(moves + 1)
            setSelectedCard([...selectedCard, id])
            setFirstGuess(photoId)
            setCount(count + 1)
        } else if (count === 1) {
            setSelectedCard([...selectedCard, id])
            setTimeout(() => { check(photoId) }, 1000)
        }

    }
    const check = (photoId) => {
        if (firstGuess === photoId) {
            setSolved([...solved, id, selectedCard[selectedCard.length - 1]])
            setTimeout(() => { finished() }, 1000)


        } else if (firstGuess !== photoId) {
            Vibration.vibrate()
            setSelectedCard([...selectedCard, selectedCard.pop()])
            setSelectedCard([...selectedCard, selectedCard.pop()])
        }
        setCount(0)
        setFirstGuess('')
    }

    const finished = async () => {
        if (solved.length + 2 === photos.length) {
            const oldMoves = await AsyncStorage.getItem('moves')
            await AsyncStorage.setItem('moves', `${moves}`)
            const newMoves = await AsyncStorage.getItem('moves')
            window.alert(oldMoves === null ? `${newmoves}? Not bad for your first time!` : newMoves < oldMoves ?
                `${newMoves}? You're getting better!` : newMoves === oldMoves ?
                    `${newMoves} moves? Same as last time!` : `${newMoves} moves? 
            Last time it was ${oldMoves}!`)
        }
    }
    return (

        <TouchableOpacity disabled={checking || selectedCard.includes(id) || open} onPress={() => { guess(photo, id) }}>
            {!selectedCard.includes(id) && !open &&
                <Animatable.View animation="flipInY">
                    <Image source={require('./bg.jpg')} />
                </Animatable.View>}

            {selectedCard.includes(id) &&
                <Animatable.View animation={solved.includes(id) ? "tada" : ""}>
                    <Animatable.View animation="flipInY">
                        <Image source={{ uri: photo }} />
                    </Animatable.View>
                </Animatable.View>}
            {open &&
                <Animatable.View animation="flipInY">
                    <Image source={{ uri: photo }} />
                </Animatable.View>}
        </TouchableOpacity>


    )
}