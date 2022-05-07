import React, { useEffect, useState } from "react"
import { Accelerometer } from "expo-sensors"
import { View, Text, StyleSheet, Image, Vibration } from "react-native"
import AppLoading from "expo-app-loading"
import {
    useFonts,
    WorkSans_100Thin,
    WorkSans_200ExtraLight,
    WorkSans_300Light,
    WorkSans_400Regular,
    WorkSans_500Medium,
    WorkSans_600SemiBold,
    WorkSans_700Bold,
    WorkSans_800ExtraBold,
    WorkSans_900Black,
    WorkSans_100Thin_Italic,
    WorkSans_200ExtraLight_Italic,
    WorkSans_300Light_Italic,
    WorkSans_400Regular_Italic,
    WorkSans_500Medium_Italic,
    WorkSans_600SemiBold_Italic,
    WorkSans_700Bold_Italic,
    WorkSans_800ExtraBold_Italic,
    WorkSans_900Black_Italic,
} from "@expo-google-fonts/work-sans"

import Loader from "./Loader"
import Header from "./Header"
import Footer from "./Footer"


const isShaking = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
    return totalForce > 1.78
}

const Shakecomponent = () => {
    let [fontsLoaded] = useFonts({
        WorkSans_100Thin,
        WorkSans_200ExtraLight,
        WorkSans_300Light,
        WorkSans_400Regular,
        WorkSans_500Medium,
        WorkSans_600SemiBold,
        WorkSans_700Bold,
        WorkSans_800ExtraBold,
        WorkSans_900Black,
        WorkSans_100Thin_Italic,
        WorkSans_200ExtraLight_Italic,
        WorkSans_300Light_Italic,
        WorkSans_400Regular_Italic,
        WorkSans_500Medium_Italic,
        WorkSans_600SemiBold_Italic,
        WorkSans_700Bold_Italic,
        WorkSans_800ExtraBold_Italic,
        WorkSans_900Black_Italic,
    })

    Accelerometer.setUpdateInterval(400)
    const [fetchedData, setFetchedData] = useState([])
    const [loading, setLoading] = useState(false)
    const [subscription, setSubscription] = useState(null)

    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    })

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        subscribe()
        return () => unsubscribe()
    }, [])

    useEffect(() => {
        if (isShaking(data)) {
            fetchData()
        }
    }, [data])

    const subscribe = () => {
        setSubscription(
            Accelerometer.addListener((accelerometerData) => {
                setData(accelerometerData)
            })
        )
    }

    const unsubscribe = () => {
        subscription && subscription.remove()
        setSubscription(null)
    }

    const fetchData = () => {
        setLoading(true)
        fetch("https://www.boredapi.com/api/activity")
            .then(res => res.json())
            .then(data => setTimeout(() => setFetchedData(data), 600))
            .finally(() => setTimeout(() => setLoading(false), 600))
            Vibration.vibrate()
    }

    const changeImage = () => {
        switch (fetchedData.type) {
            case "social":
                return <Image source={require("../assets/social.png")} 
                        style={{ resizeMode: "contain", height: 280, width: 280 }}  />
                break
            case "cooking":
                return <Image source={require("../assets/cooking.png")} 
                            style={{ resizeMode: "contain", height: 280, width: 280 }} />
                break
            case "busywork":
                return <Image source={require("../assets/busywork.png")} 
                        style={{ resizeMode: "contain", height: 280, width: 280 }} />
                break
            case "education":
                return <Image source={require("../assets/education.png")} 
                        style={{ resizeMode: "contain", height: 280, width: 280 }} />
                break
            case "diy":
                return <Image source={require("../assets/diy.png")} 
                        style={{ resizeMode: "contain", height: 280, width: 280 }} />
                break
            case "recreational":
                return <Image source={require("../assets/recreational.png")} 
                        style={{ resizeMode: "contain", height: 280, width: 280 }} />
                break
            case "charity":
                return <Image source={require("../assets/charity.png")} 
                        style={{ resizeMode: "contain", height: 280, width: 280 }} />
                break
            case "music":
                return <Image source={require("../assets/music.png")} 
                        style={{ resizeMode: "contain", height: 280, width: 280 }} />
                break
            default:
                return <Image source={require("../assets/relaxing.png")} 
                        style={{ resizeMode: "contain", height: 280, width: 280 }} />
        }
    }

    if (loading) {
        return <Loader />
    } 
    
    if (!fontsLoaded) {
        return <AppLoading /> 
    } else {
        return (
            <View style={styles.mainContainer}>
            <Header />
           
            <View style={styles.contentContainer}>

                <View style={styles.titleBackground}>
                    <Text style={styles.mainTitle}>{fetchedData.activity}</Text>
                </View>

                {changeImage()}

                <View>
                    <Text style={styles.text}>{fetchedData.participants > 1 ? "Grab your friends with you for this one!" : ""}</Text>
                    <Text style={styles.text}>{fetchedData.price <= 0 ? "No money needed for this activity!" : ""}</Text>
                </View>

            </View>

            <Footer />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f8ff",
    },
    contentContainer: {
        alignItems: "center",
        maxHeight: "75%",
        padding: 30,
        marginTop: 50,
        marginHorizontal: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#EDC9F9",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    titleBackground: {
        maxHeight: "25%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#88c6d3",
        borderRadius: 8,
        marginBottom: 20,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    mainTitle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
        fontFamily: "WorkSans_700Bold",
        width: 260,
        color: "white",
    },
    text: {
        fontSize: 16,
        textAlign: "center",
        fontFamily: "WorkSans_400Regular_Italic",
        marginTop: 5,
    },
})


export default Shakecomponent
