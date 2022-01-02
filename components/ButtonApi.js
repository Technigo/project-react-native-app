import React, { useState, useEffect } from 'react'
import { 
    View, 
    Text, 
    TouchableOpacity, 
    ActivityIndicator, 
    Button, 
    Linking,
    Image,
    ImageBackground 
} from 'react-native'
import styled from 'styled-components/native'
import * as Location from 'expo-location'


const WineText = styled.Text`
    font-weight: 700;
`

const WineButton = styled.TouchableOpacity`
    width: 50%;
    background-color: red;
`

const TechnigoImage = styled.Image`
    width: 100%;
    height: 100%;
`

const ScreenBackground = styled.ImageBackground`
    height: 100%;
`

const ButtonApi = () => {
    const [wine, setWine] = useState({})
    const [loading, setLoading] = useState(false)
    const [location, setLocation] = useState({})

    useEffect(() => {
        randomWine()
    }, [])

    const randomWine = () => {
        setLoading(true)
		fetch('https://winemag.herokuapp.com/wines/random')
        .then((res) => res.json())
        .then((wine) => setWine(wine))
        .finally(() => setLoading(false))
	}

    // v1 ~ promise

    const getLocation = () => {
            Location.requestForegroundPermissionsAsync().then((data) => {
            if (data.status !== 'granted') {
                console.log('Permission to access location was denied')
            } else {
                return Location.getCurrentPositionAsync({})
             }
        }).then((locationData) => {
            Linking.openURL(`http://www.google.com/maps/place/${locationData.coords.latitude},${locationData.coords.longitude}`)
        })
    }
    
    // v2 ~ async await

    // const getLocation = async () => {
    //     let data = await Location.requestForegroundPermissionsAsync()
    //     if (data.status !== 'granted') {
    //         console.log('Permission to access location was denied')
    //     } else {
    //         let locationData = await Location.getCurrentPositionAsync({})
    //         console.log('location data', locationData)
    //     }
    // }

    if (loading) {
        return <ActivityIndicator />
    }


    return (
        <ScreenBackground source={require('../assets/splash.png')}>
            <Text>What wine should I drink today?</Text>
            <WineButton onPress={randomWine}>
                <Text>Find out!</Text>
            </WineButton>
            <WineText>Variety: </WineText><Text>{wine.variety}</Text>
            <WineText>Title: </WineText><Text>{wine.title}</Text>
            <WineText>Description: </WineText><Text>{wine.description}</Text>
            <WineText>Points: </WineText><Text>{wine.points}</Text>

            <Button title='Get Location' onPress={getLocation} />
            <TechnigoImage source={require('../assets/favicon.png')}
            resizeMode='contain' />
        </ScreenBackground>
    )
}

export default ButtonApi