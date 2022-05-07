import React from "react"
import { View, Text, StyleSheet } from "react-native"
import AppLoading from "expo-app-loading"
import {
    useFonts,
    WorkSans_100Thin,
    WorkSans_200ExtraLight,
    WorkSans_300Light,
    WorkSans_400Regular,
    WorkSans_500Medium,
    WorkSans_600SemiBold,
    WorkSans_700Bold,
    WorkSans_800ExtraBold,
    WorkSans_900Black,
} from "@expo-google-fonts/work-sans"


const Header = () => {
    let [fontsLoaded] = useFonts({
        WorkSans_100Thin,
        WorkSans_200ExtraLight,
        WorkSans_300Light,
        WorkSans_400Regular,
        WorkSans_500Medium,
        WorkSans_600SemiBold,
        WorkSans_700Bold,
        WorkSans_800ExtraBold,
        WorkSans_900Black,
    })

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.questionTitle}>Nothing to do? Give the phone a shake for ideas!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: "5%",
    },
    questionTitle: {
        fontSize: 22,
        color: "black",
        textAlign: "center",
        paddingHorizontal: 30,
        fontFamily: "WorkSans_500Medium",
        color: "#000000ac"
    },
})

export default Header
