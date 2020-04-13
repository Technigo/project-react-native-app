import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { PhotosPreview } from './PhotosPreview'
import * as ImagePicker from 'expo-image-picker'
import { Accelerometer } from 'expo-sensors';
import { Vibration, TouchableOpacity } from 'react-native';


const WelcomeWrapper = styled.View`
padding: 10px;
justify-content: space-around
flex: 1;
align-items: center;
`
const PreviewWrapper = styled.View`
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`
const Header = styled.Text`
font-size: 40px;
color: palevioletred;
`
const ButtonShell = styled.TouchableOpacity`
border: 1px solid palevioletred;
padding: 20px;
border-radius: 50;
`
const ButtonText = styled.Text`
color: palevioletred;
font-size: 40px;
`
const ButtonsContainer = styled.View`
flex-direction: row;
justify-content: space-around;
width: 100%;
`

const ShuffleText = styled.Text`
color: palevioletred;
font-size: 24px;
`

export const Welcome = (props) => {
    const { setShowCamera, setPhotos, photos, shuffled, setShuffled, setReady } = props

    useEffect(() => {
        Accelerometer.setUpdateInterval(1000)
    }, [])

    const handlePress = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Image,
            aspect: [4, 3],
            allowsMultipleSelection: true
        })
        if (!result.cancelled && photos.length < 14) {
            setPhotos(photos => [result.uri, ...photos])
            setPhotos(photos => [result.uri, ...photos])
        }
    }
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        setPhotos(array)
        setShuffled(true)
    }


    Accelerometer.addListener((data) => {
        if (data.x > 2.5 || data.y > 2.5) {
            Vibration.vibrate()
            shuffleArray(photos)
        }
    }
    )

    return (
        <WelcomeWrapper>
            <Header>Welcome! Start by picking 7 images from your camera or photo library.</Header>
            <PreviewWrapper>
                <PhotosPreview photos={photos} sizing={shuffled ? 60 : 95} shuffled={shuffled} />
            </PreviewWrapper>
            {photos.length < 14 &&
                <ButtonsContainer>
                    <ButtonShell onPress={() => setShowCamera(true)}>
                        <ButtonText>📸</ButtonText>
                    </ButtonShell>
                    <ButtonShell onPress={handlePress}><ButtonText>🎞</ButtonText></ButtonShell>
                </ButtonsContainer>}
            {photos.length === 14 && !shuffled &&
                <TouchableOpacity onPress={() => shuffleArray(photos)}>
                    <ShuffleText>Tap this text or shake your phone to shuffle the photos.</ShuffleText>
                </TouchableOpacity>}

            {photos.length === 14 && shuffled &&
                <ButtonShell onPress={() => setReady(true)}>
                    <ButtonText>Begin</ButtonText>
                </ButtonShell>
            }
        </WelcomeWrapper>
    )
}
