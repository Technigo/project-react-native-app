import React, { useState } from "react"
import { Text, View, StyleSheet, Button } from "react-native"

export default function Counter() {
    const [count, setCount] = useState(0)

    return (
        <View>
            <Text style={styles.counterText}>{count}</Text>
            {/* <Button title='TAP ME' onPress={() => setCount(count + 1)} /> */}
            <Button title="Press me" onPress={() => setCount(count + 1)} color="white" />


        </View>
    )
}

const styles = StyleSheet.create({
    counterText: {
        fontSize: 80,
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 20

    },
    TouchableText: {
        fontSize: 60,

    }

})