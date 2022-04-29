import React from "react";
import { Text, View, Button } from "react-native";

import Header from "./Header";

const StartPage = ({ navigation }) => {
    


    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Header />
        <Text>This is my startpage. Should I add an emoji?</Text>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Button
        onPress={() => navigation.navigate('Shake')}
        title="Go to shake"
      />
      </View>
    </View>
    )
}

export default StartPage