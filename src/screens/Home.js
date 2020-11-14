import React, { useState, useEffect, Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    ImageBackground
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { ScrollView }
    from 'react-native'
import Deck from '../components/Deck';
import Cards from '../components/Cards';
import Buttons from '../components/Buttons';


const DATA = [
    {
        id: 1,
        title: "CORONAVIRUS CASES",
        number: "53.4M"
    },
    {
        id: 3,
        title: "RECOVERED",
        number: "34.5M"
    },
    {
        id: 2,
        title: "TOTAL DEATHS",
        number: "1.3M"
    }
]

export default class Home extends Component {

    renderCard(item) {
        return (
            <View key={item.id} style={styles.cardContainer}>
                <View style={styles.card}>
                    <View>
                        <Text style={styles.title}>{item.title} </Text>
                        <Icon
                            name="ios-remove"
                            size={60}
                            color="#D84727"
                            style={{ marginTop: 15 }}
                        />
                        <Text style={styles.number}>{item.number}</Text>
                    </View>
                    <View style={{ marginLeft: 145 }}>
                        <Icon name="md-options" size={24} color="#EF7B45" />
                        <Text style={styles.textCovid}>COVID-19</Text>
                    </View>
                </View>
            </View>
        );
    }

    renderNoMoreCards() {
        return (
            <View title="All Done!">
                <Text style={styles.noCard}>NO MORE CARDS HERE</Text>
                <Button backgroundColor="#03A9F4" title="Shake to reload"
                />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require("../images/map1.jpg")}
                    style={styles.map}
                >
                    <View style={styles.col}>
                        <View style={{ width: "50%" }}>
                            <Icon name="md-remove" color="#FFF" size={26} style={styles.minusIcon} />
                            <Icon
                                name="md-remove"
                                color="#FFF"
                                size={26}
                                style={styles.minusIcon}
                            />
                        </View>
                        <View style={styles.avatarContainer}>
                            <Image
                                source={require('../images/girl.jpg')}
                                style={styles.avatar}
                            />
                        </View>
                    </View>
                    <Text style={styles.textDash}>#STAYHOME DASH</Text>

                    <View style={styles.colContainer}>
                        <Text style={styles.textGlobal}>GLOBAL</Text>
                        <Text style={styles.textSweden}>Sweden</Text>
                        <View style={styles.reloadContainer}>
                            <Icon name="md-refresh" size={24} color="#D84727" justifyContent="center" />
                        </View>
                    </View>
                </ImageBackground>

                <Deck
                    data={DATA}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                />

                <ScrollView
                    style={{ marginTop: 200 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    justifyContent="center"
                >
                    <Cards
                        onPress={() => this.props.navigation.navigate('Detail')}
                        icon="md-pulse"
                        title="TOTAL CASES"
                        bg="#EF7B45"
                        number="177 355"
                    />
                    <Cards
                        onPress={() => this.props.navigation.navigate('Detail')}
                        icon="ios-git-network"
                        title="RECOVERED"
                        bg="#CDEDF6"
                        number="N / A"
                    />
                    <Cards
                        onPress={() => this.props.navigation.navigate('Detail')}
                        icon="ios-heart-dislike"
                        title="DEATH CASES"
                        bg="#CDEDF6"
                        number="6 164"
                    />
                </ScrollView>

                <View style={{ marginBottom: 34 }}>
                    <Buttons
                        name="ASYMPTOMATIC"
                        number="1 778"
                    />
                    <Buttons
                        name="SYMPTOMATIC"
                        number="1 578"
                    />

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#042A2B",
    },
    cardContainer: {
        height: 170,
        width: 330,
        alignSelf: "center",
        backgroundColor: "#CDEDF6",
        borderRadius: 30,
        flex: 1
    },
    card: {
        height: 170,
        width: 270,
        paddingTop: 25,
        paddingHorizontal: 30,
        backgroundColor: '#5EB1BF',
        borderRadius: 30,
        flexDirection: 'row',
        flex: 1

    },
    title: {
        color: "#042A2B",
        width: 120,
        fontSize: 12,
        textAlign: 'left',
        justifyContent: 'center',
        fontWeight: "bold"
    },
    number: {
        color: "#042A2B",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: -20,
        flex: 1
    },
    textCovid: {
        transform: [{ rotate: "-90deg" }],
        color: "#3a4b4f",
        fontSize: 12,
        width: 80,
        marginLeft: -30,
        fontWeight: 'bold',
        marginTop: 50
    },
    noCard: {
        marginBottom: 10,
        color: '#FFF',
        alignSelf: "center"
    },
    map: {
        height: 200,
        paddingTop: 25,
        paddingHorizontal: 20,
        marginBottom: 40
    },
    col: {
        flexDirection: 'row',
        marginTop: 25
    },
    minusIcon: {
        marginTop: -10,
        marginLeft: 5
    },
    avatarContainer: {
        width: "50%",
        alignItems: 'flex-end',
        marginTop: -10
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    textDash: {
        color: "#CDEDF6",
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 12,
        fontWeight: 'bold'
    },
    titleSweden: {
        color: "#CDEDF6",
        fontSize: 20,
        alignSelf: 'center',
    },
    colContainer: {
        flexDirection: "row",
        paddingHorizontal: 30,
        marginTop: 5,
        alignItems: 'flex-end',

    },
    textGlobal: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#D84727",
    },
    textSweden: {
        fontWeight: "bold",
        fontSize: 16,
        paddingHorizontal: 30,
        color: "#6a706e"
    },
    reloadContainer: {
        backgroundColor: "#CDEDF6",
        elevation: 2,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: "center",
        marginLeft: 50,
        marginTop: -2
    }


});