import React from "react";
import { Text, View, Button } from "react-native";

import Header from "./Header";

const StartPage = ({ navigation }) => {
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>


    return(
    <View>
        <Header />
        <Text>This is my startpage!</Text>
    </View>
    )
}

export default StartPage