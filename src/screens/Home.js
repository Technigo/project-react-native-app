import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    ImageBackground
} from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'
import { ScrollView } from 'react-native-gesture-handler'
import Deck from '../components/Deck'
import Cards from '../components/Cards'
import Buttons from '../components/Buttons'

const DATA = [

    {
        id: 1,
        title: "NUMBER OF CASES",
        number: "1 838 456"
    },
    {
        id: 1,
        title: "TOTAL DEATHS",
        number: "1 029 863"
    },
    {
        id: 1,
        title: "RECOVERED",
        number: "838 456"
    }
]
export default class Home extends Component {
    render() {
        return (
            <View>
                <Text>Home</Text>
            </View>
        )
    }
}