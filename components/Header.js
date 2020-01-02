import React from "react"
import { Text, View, StyleSheet } from "react-native"

export default function Header(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 60,
        width: "100%",
        backgroundColor: "peachpuff",
        // justifyContent: "center",
        // marginVertical: 5,
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        marginTop: 25,
        fontWeight: "bold",
        justifyContent: "center",
        textAlign: "center"
    },
    baseText: {
        fontFamily: 'ComicSans'

    },

})