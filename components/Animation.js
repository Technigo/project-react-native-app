import React from "react";
import { Image } from "react-native";


const Animation = () => {
    return (
        <Image
            style={{
                width: 400,
                height: 300,
            }}
            source={require("../assets/ojisan.gif")} />
    )
};

export default Animation;