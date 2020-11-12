import React, { useEffect, useState } from 'react'
import { Platform } from 'react-native'
import styled from 'styled-components/native'
import { Accelerometer } from 'expo-sensors'
import LottieView from 'lottie-react-native'

import { baseAPI, apiKey } from "../../config"
import SkopjeImg from '../../assets/img/skopje.jpg'
import StockholmImg from '../../assets/img/stockholm.jpg'
import ParisImg from '../../assets/img/paris.jpg'
import { Weather } from './Weather'

const Container = styled.View`
  display: flex
  flex: 1
  position: relative
`;

const BtnContainer = styled.View`
    position: absolute
    bottom: 50px
    display: flex
    flex-direction: row
    margin-top: 80px
`;
const BtnOpacity = styled.TouchableOpacity`
    width: 150px
    height: 50px
    justify-content: center
    align-items: center
    backgroundColor: #3449eb
    padding: 5px 
    border-radius: 25px
    margin: 15px
`;

const BtnTxt = styled.Text`
    font-size: 15px
    font-weight: bold
`;

const cities = ["Skopje", "Stockholm", "Paris"]

export const WeatherContainer = ({ navigation }) => {
    const navigateToForcast = () => {
        navigation.navigate("FiveDaysForcast", { cityName: cityName })
    }

    const [loading, setLoading] = useState(false);
    const [cityName, setCityName] = useState(cities[0])
    const [cityData, setCityData] = useState(null)
    const [cityImg, setCityImg] = useState(SkopjeImg)
    const [accelerometerData, setAccelerometerData] = useState({})

    const nextCity = () => {
        let index = cities.indexOf(cityName);
        if (index + 1 >= cities.length) {
            setCityName(cities[0])
        } else {
            setCityName(cities[index + 1]);
        }
    };

    useEffect(() => {
        navigation.setOptions({ headerShown: false });

        Accelerometer.setUpdateInterval(20)
        const listener = Accelerometer.addListener((data) => {
            const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
            if (totalForce > 3.5) {
                setAccelerometerData(data)
            }
        })

        return () => {
            listener && listener.remove()
        }
    }, [])

    useEffect(() => {
        nextCity()
    }, [accelerometerData])

    useEffect(() => {
        setLoading(true)

        const weatherUrl = `${baseAPI}weather?q=${cityName}&units=metric&APPID=${apiKey}`
        fetch(weatherUrl)
            .then(response => response.json())
            .then(json => {
                setCityData(json)
                switch (cityName) {
                    case 'Skopje':
                        setCityImg(SkopjeImg)
                        break
                    case 'Stockholm':
                        setCityImg(StockholmImg)
                        break
                    case 'Paris':
                        setCityImg(ParisImg)
                        break
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }, [cityName])


    return (
        <Container>
            {Platform.OS !== 'web' && loading && <LottieView
                style={{
                    width: 400,
                    height: 400,
                    backgroundColor: '#eee',
                }}
                autoPlay
                loop
                source={require('../../assets/40-loading.json')}
            />}

            {!loading && <>
                { cityData && <Weather cityData={cityData} img={cityImg} />}

                <BtnContainer>
                    <BtnOpacity onPress={nextCity}>
                        <BtnTxt>Next City</BtnTxt>
                    </BtnOpacity>

                    <BtnOpacity onPress={navigateToForcast}>
                        <BtnTxt>Weather Forcast</BtnTxt>
                    </BtnOpacity>
                </BtnContainer>
            </>}
        </Container >
    )
}