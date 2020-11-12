import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import moment from 'moment';
import LottieView from 'lottie-react-native'
import { Platform } from 'react-native'



import forcast from '../assets/img/forcast.jpg'
import { baseAPI, apiKey } from "../config"

const BackgroundImg = styled.ImageBackground`
    flex: 1
    resizeMode: cover
    flex-direction: column
` ;

const Overlay = styled.View`
    flex: 1
    flex-grow: 1
    background-color: rgba(0, 0, 0, 0.4)
    padding: 50px
`;

const TxtTitle = styled.Text`
    font-size: 40px
    color: #6a0cad
    text-shadow: 2px 2px #9b90a3
    margin-top: 50px 
    
`;

const Txt = styled(TxtTitle)`
    font-size: 25px
    color:black
    text-shadow: 2px 2px white
`;

export const Forcast = ({ navigation, route }) => {

    const [cityData, setCityData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        navigation.setOptions({ headerShown: false })
    }, [])

    useEffect(() => {
        setLoading(true)
        const forcastUrl = `${baseAPI}forecast?q=${route.params.cityName}&units=metric&APPID=${apiKey}`
        fetch(forcastUrl)
            .then(response => response.json())
            .then(json => setCityData(json.list.filter((item) => item["dt_txt"].includes("12:00:00"))))
            .finally(() => setLoading(false))
    }, [])

    const dataFormat = (str) => {
        const forcastDate = moment(str).format('dddd');
        return forcastDate
    };

    return (
        <>
            {Platform.OS !== 'web' && loading && <LottieView
                autoPlay
                loop
                source={require('../assets/40-loading.json')}
            />}

            {!loading &&
                <BackgroundImg source={forcast}>
                    <Overlay>
                        <TxtTitle>Five Days Forkast for: {route.params.cityName}</TxtTitle>
                        {cityData.map((x) =>
                            <Txt key={x.dt}>{dataFormat(x.dt_txt)}: {Math.round(x.main.temp)} °C</Txt>
                        )
                        }
                    </Overlay>
                </BackgroundImg >
            }
        </>
    )

}