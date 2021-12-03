import React from "react";
import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    logo: {
      width: 30,
      height: 30,
    },

  });


const TabIcon = ({name}) => {
    const icons = {
        home: require("../assets/home.png"),
        die: require("../assets/die.png"),
        dice: require("../assets/dice.png")
    }

    return (
        <View>
            <Image
            style={styles.logo}
                source={icons[name]}
            />
        </View>
    );
};

export default TabIcon
