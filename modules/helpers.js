import { useState } from "react";
import * as Sharing from 'expo-sharing';
import { Linking } from "react-native";



const helpers = {
    getPhrase: async function getPhrase() {
        // const [isSharingAvailable, setIsSharingAvailable] = useState(false);

        // const checkSharingAvailability = () => {
        //     Sharing-Sharing.isAvailableAsync().then(isAvailable => {
        //         setIsSharingAvailable(isAvailable);
        //     });
        // };

        // const share = () => {
        //     if (isSharingAvailable) {
        //         console.log("sharing is available")
        //     } else {
        //         console.log("sharing is not available")
        //     }
        // }

        // const generateLinkToShare = () => {
            
        // }
        const response = await fetch(`https://corporatebs-generator.sameerkumar.website/`);

        const result = await response.json();
        // console.log(result)
        return result.phrase;
    },
    getLikes: function getLikes() {
        const [likes, setLikes] = useState([
            "hello",
            "hello2",
            "hello3",
            "hello4",
            "hello5","hello",
            "hello2",
            "hello3",
            "hello4",
            "hello5","hello",
            "hello2",
            "hello3",
            "hello4",
            "hello5","hello",
            "hello2",
            "hello3",
            "hello4",
            "hello5","hello",
            "hello2",
            "hello3",
            "hello4",
            "hello5","hello",
            "hello2",
            "hello3",
            "hello4",
            "hello5",
        ]);
        return likes;
    },
    LoggedIn: function Loggedin() {
        const [isLoggedIn, setIsLoggedIn] = useState(false);
        return {isLoggedIn, setIsLoggedIn};
    },

    toggleIsLoggedIn: function toggleIsLoggedIn() {
        this.LoggedInObject.isLoggedIn = !this.LoggedInObject.isLoggedIn;
    }
    // addDelivery: async function addDelivery(delivery: Delivery) {
    //     try {
    //         delivery.api_key = config.api_key;
    //         await fetch(`${config.base_url}/deliveries`, {
    //             body: JSON.stringify(delivery),
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             method: 'POST'
    //         });
    //     } catch (error) {
    //         console.log("Could not add delivery:", delivery)
    //     }
    // },
};

export default helpers;
