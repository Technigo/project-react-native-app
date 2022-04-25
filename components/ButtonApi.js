import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native-web'
import styled from 'styled-components/native'

const ButtonApi = () => {


    return (
        <View>
            <Text>{quote.content}</Text>
            <Text>{quote.author}</Text>
            <ButtonApi onPress={generateQuote}>
                <Text>Generate Quote</Text>
            </ButtonApi>
        </View>
    )
}



export default ButtonApi