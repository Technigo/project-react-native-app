import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native';
import { API_URL } from '../../utils/url'
import Instructions from '../Instructions';
import Concentrate from '../Concentrate';

const isShaking = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 2;
};

const AnswerContainer = styled.View`
    background: red;
    width: 80%;
    height: auto;
    margin: 10px;
    text-align: center;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const Answer = styled.Text`
	font-size: 28px;
    height: auto;
    margin: 32px auto;
    text-align: center;
    color: white;
    font-weight: bold;
`;

const TitleContainer = styled.View`
    margin: 10px auto;
    text-align: center;
    justify-content: center;
    flex: 0.5;
    background-color: black;
`;

const Title = styled.Text`
	font-size: 24px;
	color: yellow;
`;

export const SensorComponent = () => {
    Accelerometer.setUpdateInterval(400);
    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });

    const [subscription, setSubscription] = useState(null);
    const [isShakingNow, setIsChakingNow] = useState(false);
    const [answer, setAnswer] = useState(null)

    const _subscribe = () => {
        setSubscription(
            Accelerometer.addListener((accelerometerData) => {
                setData(accelerometerData);
            })
        );
    };

    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };

    useEffect(() => {
        _subscribe();
        return () => _unsubscribe();
    }, []);


    const fetchAnswer = () => {
        let params = encodeURIComponent("placeholder");
        fetch(API_URL(params))
            .then(res => res.json())
            .then(json => {
                setAnswer(json.magic.answer)
            }).catch((error) => {
                console.log('Error in Fetch:' + error.message);
            });
    }

    if (isShakingNow !== isShaking(data)) {
        setIsChakingNow(isShaking(data))
        if (!isShakingNow) {
            fetchAnswer()
        }
    }

    return (
        answer ?
            <>
                <TitleContainer>
                    <Title>Zoltar speaks:</Title>
                </TitleContainer>
                <AnswerContainer>
                    <Answer>{answer}</Answer>
                </AnswerContainer>
                <Instructions instructions={"Ask again and shake your phone"} />
            </> : <Concentrate />
    );
};