import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Chart from '../components/Chart';

export default class Detail extends Component {
    render() {
        return (
            <View style={styles.page}>
                <View style={styles.headContainer}>
                    <View style={styles.humContainer}>
                        <AntDesign
                            onPress={() => this.props.navigation.navigate('Home')}
                            name="arrowleft" size={24} color="#042A2B"
                        />
                    </View>
                    <View style={styles.profileContainer}>
                        <Image
                            onPress={() => this.props.navigation.navigate('Home')}
                            source={require('../images/girl.jpg')}
                            style={styles.profile}
                        />
                    </View>
                </View>
                <View style={styles.optionCard}>
                    <View style={styles.optionCol}>
                        <Text style={styles.textLinear}>LINEAR</Text>
                    </View>
                    <Text style={styles.textLogarthimic}>LOGARTHIMIC</Text>
                </View>
                <View style={styles.locationContainer}>
                    <Text style={styles.textGlobal}>GLOBAL</Text>
                    <Text style={styles.textSweden}>SWEDEN</Text>
                    <View style={styles.reloadContainer}>
                    </View>
                </View>


                <Chart />

                <View style={styles.bottomCard}>
                    <View style={styles.bottomCol}>
                        <Text style={styles.textSymptoms}>SYMPTOMS</Text>
                        <View style={styles.infoContainer}>
                            <Text style={{ color: "#FFF" }}>i</Text>
                        </View>
                    </View>

                    <View style={styles.button}>
                        <Text style={styles.btnText}>See more graphs</Text>
                    </View>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    page: {
        backgroundColor: "#FFF",
        flex: 1,
        height: 200
    },
    headContainer: {
        marginHorizontal: 20,
        flexDirection: 'row',
        marginTop: 70
    },
    humContainer: {
        width: "50%"
    },
    hum: {
        marginTop: -20,
        marginLeft: 5
    },
    profileContainer: {
        width: "50%",
        alignItems: "flex-end"
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    optionCard: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 110,
    },
    optionCol: {
        backgroundColor: "#000",
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 2
    },
    textLinear: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 20
    },
    textLogarthimic: {
        color: "#042A2B",
        fontWeight: "bold",
        fontSize: 12,
        marginLeft: 15,
        marginTop: 20
    },
    locationContainer: {
        alignSelf: "center",
        flexDirection: "row",
        paddingHorizontal: 30,
        marginTop: 90,
        alignItems: "center"
    },
    textGlobal: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#D84727"
    },
    textSweden: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#6a706e",
        paddingHorizontal: 30
    },
    reloadContainer: {
        backgroundColor: "#FFF",
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50,
        elevation: 3
    },
    bottomCard: {
        backgroundColor: "#042A2B",
        height: 220,
        marginTop: 170,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    bottomCol: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20
    },
    textSymptoms: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: 'bold'
    },
    infoContainer: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#D84727",
        alignItems: "center",
        justifyContent: 'center',
        marginLeft: 10,
    },
    button: {
        borderRadius: 15,
        borderColor: '#D84727',
        borderWidth: 1,
        marginHorizontal: 30,
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 5
    },
    btnText: {
        color: "#D84727",
        fontSize: 16,
        fontWeight: 'bold'
    }


})