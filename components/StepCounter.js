//to in of itself contain A) SensorComponent and B) an actual display for the steps (with a bar that fills as a stretch goal ;))

import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import { SensorComponent } from './SensorComponent';

const Container = styled.View`
    flex: 0.5;
    justify-content: center;
    align-items: center;
    background-color: #3b6243;
`;

const Steps = styled.Text`
    color: white;
    font-size: 24px;
    margin: 30px;
    background-color: #352364;
`;

const StepCounter = (props) => {
    return (
        <Container>
            <SensorComponent 
                steps={props.steps} 
                onStep={props.onStep} 
                stepCooldown={props.stepCooldown}
            />
            <Steps>Movement: {props.steps}</Steps>
        </Container>
    )
}

export default StepCounter;