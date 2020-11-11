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
import styles from 'styled-components'

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

    renderCard(item) {
        return (
            <View key={item.id} style={styles.cardContainer}>
                <View styles={styles.card}>
                    <View>
                        <Text style={styles.title}>{item.title}</Text>
                        <Icon
                            name="ios-remove"
                            size={40}
                            color="blue"
                            style={{ marginTop: 25 }}
                        />
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <View style={{ marginLeft: 150 }}>
                        <Icon name="md-options" size={24} color='#FFF' />
                        <Text style={styles.textCovid}>COVID-19</Text>
                    </View>
                </View>
            </View>
        );
    }

    renderNoMoreCards() {
        return (
            <View title="All done">
                <Text style={styles.noCard}>no more cards here</Text>
                <Button backgroundColor="03A9F4" title="Get more!"></Button>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require("../images/background.jpg")}
                    style={styles.map}>

                    <View style={styles.col}>
                        <View style={{ width: "50%" }}>
                            <Icon name="md-remove" color="#FFF" size={26} />
                            <Icon name="md-remove" color="#FFF" size={26} style={styles.minusIcon} />
                        </View>
                    </View>
                </ImageBackground>
                <Text>Home</Text>
            </View>
        )
    }
}