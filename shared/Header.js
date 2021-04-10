import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Icon } from 'react-native-elements'

const Header = ( {navigation} ) => {

    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <View style={styles.header}>
            <Icon
                style={styles.icon}
                reverse
                name='menu'
                type='ionicon'
                color='#517fa4'
                onPress={openMenu}
            />
            <View>
                <Text style={styles.headerText}>
                    React Native Navigation
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        heigt: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
        letterSpacing: 1,
    },
    icon:{
        position: "absolute",

    }
})

export default Header