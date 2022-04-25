import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native-web'
// import styled from 'styled-components-react-native'
import { Accelerometer } from 'expo-sensors'

const ShakeApi = () => {

    const [data, setData] = useState({

        x: 0,
        y: 0,
        z: 0,
    })

    const { x, y, z } = data


    const [subscription, setSubscription] = useState(null)

    const subscribe = () => {
        setSubscription(
            Accelerometer.addListener(accelerometerData => {
                SVGMetadataElement(accelerometerData)
            })
        )
    }

    ////////////////////////////////////////////////

    const isShaking = (data) => {
        const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
        return totalForce > 1.78
    }

    useEffect(() => {
        if(isShaking(data)) {
            generateQuote()
        }
    }, [data])



    const unsubscribe = () => {
        subscription && subscription.remove()
        setSubscription(null)
    }

    useEffect(() => {
        // components mounts execute the function
        subscribe()
        // component unmounts execute the function below
        return () => unsubscribe()
    }, [])


    return (
        <View>
        <Text>{quote.content}</Text>
       <Text>{quote.author}</Text>
    </View>
    )
}

export default ShakeApi