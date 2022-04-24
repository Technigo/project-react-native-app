import React, { useState } from "react"
import {Text, View, StyleSheet, Button} from "react-native"

export default function Counter() {
	const [count, setCount] = useState(0)

    return (
    <View>
    <Text style={styles.counterText}>{count}</Text>
	<Button style={styles.button} title="TAP FOR +1" onPress={() => setCount(count + 1)} />
    <Button style={styles.button} title="TAP FOR -1" onPress={() => setCount(count - 1)} />
    </View>
    )
}


const styles = StyleSheet.create({
    counterText: {
		fontSize: 50,
		color: "darkgreen"
	}
})