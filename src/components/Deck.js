import React, { Component } from 'react'
import {
    View,
    Text,
    UIManager,
    Animated,
    PanResponder,
    Dimensions,
    LayoutAnimation
} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;
export default class Deck extends Component {
    render() {
        return (
            <View>
                <Text>
                    Deck
                </Text>
            </View>
        )
    }
}