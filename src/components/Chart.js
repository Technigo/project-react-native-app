import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

export default class Chart extends Component {
    render() {
        return (
            <View style={{
                marginHorizontal: 20,
                marginTop: 20
            }}>
                <Text>
                    Chart
                </Text>
            </View>
        )
    }
}