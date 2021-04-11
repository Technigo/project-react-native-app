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
                color='black'
                onPress={openMenu}
            />
            <View>
                <Text style={styles.headerText}>
                    Navigation in React Native
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#333",
        letterSpacing: 1,
    },
    icon:{
        position: "absolute",
    }
})

export default Header