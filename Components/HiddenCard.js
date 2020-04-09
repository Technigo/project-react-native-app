import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity, Vibration } from 'react-native'
import { RotationGestureHandler } from 'react-native-gesture-handler'

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
    // const [flipped, setFlipped] = useState(selectedCard.includes(id))
    // const [turned, setTurned] = useState(solved.includes(id))
    // useEffect(() => {
    //     setTurned(solved.includes(id))
    //     setFlipped(selectedCard.includes(id))
    // }, [solved, selectedCard])
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
            setChecking(true)
            setSelectedCard([...selectedCard, id])
            setTimeout(() => { check(photoId) }, 1000)
        }

    }
    const check = (photoId) => {
        if (firstGuess === photoId) {
            setSolved([...solved, id, selectedCard[selectedCard.length - 1]])
            setTimeout(() => { finished() }, 1000)


        } else if (firstGuess != photoId) {
            Vibration.vibrate()
            setSelectedCard([...selectedCard, selectedCard.pop()])
            setSelectedCard([...selectedCard, selectedCard.pop()])
        }
        setCount(0)
        setFirstGuess('')
    }

    const finished = () => {
        if (solved.length + 2 === photos.length) {
            window.alert('Congratulations')
        }
    }
    return (
        <TouchableOpacity disabled={checking || selectedCard.includes(id) || open} onPress={() => { guess(photo, id) }}>
            {!selectedCard.includes(id) && !open &&
                <Image source={require('./bg.jpg')} />}
            {selectedCard.includes(id) &&
                <Image source={{ uri: photo }} />}
            {open &&
                <Image source={{ uri: photo }} />}
        </TouchableOpacity>

    )
}