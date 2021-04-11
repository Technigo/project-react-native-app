import React from 'react';
import styled from 'styled-components/native';
import { Pedometer } from 'expo-sensors';

const Container = styled.View`
    flex: 0.25;
    justify-content: center;
    align-items: center;
    background-color: #000;
    margin-bottom: -7px;
`;

const BaseText = styled.Text`
    color: white;
    font-family: 'Courier New';
`;

const Steps = styled(BaseText)`
    color: white;
    font-size: 16px;
    background-color: #000;
`;


const StepCounter = (props) => {

    Pedometer.watchStepCount(props.onStep)

    return (
        <Container>
            <Steps>Steps: {props.steps}</Steps>
            {/* <SensorComponent 
                steps={props.steps} 
                onStep={props.onStep} 
                stepCooldown={props.stepCooldown}
            /> */}
        </Container>
    )
}

export default StepCounter;