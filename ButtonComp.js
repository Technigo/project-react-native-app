import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import styled from 'styled-components/native'

import Quote from './Quote'



export const ButtonComp = () => {
    return (
        <Text>
        < Button 
            title="today's mantra"
            color="#C76F7D"
            onPress={(Quote)} >
        </Button >
        </Text>
    )
}