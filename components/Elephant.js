import React from 'react'
import {Image, View, Text} from 'react-native'
import {Elephant_v01} from '../assets/Elephant_v01.svg'

export const Elephant = () => {
    return (
        <View>
        <Image style={{
            width: 700,
            height: 700,
          }} source={require('./assets/Elephant_v01.svg')} />
          </View>
    )
}