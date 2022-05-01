import React from "react"
import { Text, View, StyleSheet } from "react-native"
import AppLoading from "expo-app-loading"
import {
    useFonts,
    WorkSans_300Light,
    WorkSans_400Regular,
} from "@expo-google-fonts/work-sans"


const Footer = () => {
    let [fontsLoaded] = useFonts({
        WorkSans_300Light,
        WorkSans_400Regular,
    })

    if (!fontsLoaded) {
        return <AppLoading /> 
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.name}>This app was made by Tiina Liukkonen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        paddingHorizontal: 60,
        position: "absolute",
        bottom: 0,
    },
    name: {
        textAlign: "center",
        fontSize: 12,
        fontFamily: "WorkSans_400Regular",
    }
})


export default Footer
