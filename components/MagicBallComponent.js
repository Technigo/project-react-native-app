import React from 'react'
import { View } from 'react-native';
import styled from 'styled-components/native';


const BallContainer = styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
`

const BallOuter = styled.View`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    border-radius: 150px;
    background-color: #262626;
`
const BallInner = styled.View`
    position: absolute;
    width: 170px;
    height: 170px;
    border-radius: 85px;
    background-color: black;
    border: 2px solid white;
`

const TriangleInner = styled.View`
    position: absolute;
    top: 10px;
    left: 12px;
    width: 0;
    height: 0;
    border-left: 70px solid transparent;
    border-right: 70px solid transparent;
    border-bottom: 110px solid #151b5e;
`

export const MagicBallComponent = () => {

    return(
        <BallContainer>
            <BallOuter>
                <BallInner>
                    <TriangleInner></TriangleInner>
                </BallInner>
            </BallOuter>
        </BallContainer>
    )


}