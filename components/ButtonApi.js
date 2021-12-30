import React from "react";
import { View,
        Text,
        TouchableOpacity,
        ActivityIndicator,
        Button } from 'react-native';

const ButtonApi = () => {
    return(
        <View>
            <Text>Click to generate Quote.</Text>
            <Button title="Click" onPress={() => console.log('clicked')} />
        </View>
    )
}

export default ButtonApi