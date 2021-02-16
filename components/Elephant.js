import React from 'react'
import {View} from 'react-native'
import styled from 'styled-components/native'


export const Elephant = () => {
    return (
        <View>
            <ElephantImage source={require('./assets/Elephant_v01.svg')} />
        </View>
    )
}
const ElephantImage = styled.Image`
    width: 700px;
    height: 700px;
`