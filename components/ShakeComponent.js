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
    WorkSans_600SemiBold_Italic,
} from "@expo-google-fonts/work-sans"

import Loader from "./Loader"
import Header from "./Header"
import Footer from './Footer'


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
        WorkSans_600SemiBold_Italic,
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
        if (fetchedData.type === "social") {
            return <Image source={require("../assets/social.png")} 
                        style={{ resizeMode: "contain", height: 300, width: 300 }}  />
        } else if (fetchedData.type === "cooking") {
            return <Image source={require("../assets/cooking.png")} 
                        style={{ resizeMode: "contain", height: 300, width: 300 }} />
        } else if (fetchedData.type === "busywork") {
            return <Image source={require("../assets/busywork.png")} 
                        style={{ resizeMode: "contain", height: 300, width: 300 }} />
        } else if (fetchedData.type === "education") {
            return <Image source={require("../assets/education.png")} 
                        style={{ resizeMode: "contain", height: 300, width: 300 }} />
        } else if (fetchedData.type === "diy") {
            return <Image source={require("../assets/diy.png")} 
                        style={{ resizeMode: "contain", height: 300, width: 300 }} />
        } else if (fetchedData.type === "recreational") {
            return <Image source={require("../assets/recreational.png")} 
                        style={{ resizeMode: "contain", height: 300, width: 300 }} />
        } else if (fetchedData.type === "charity") {
            return <Image source={require("../assets/charity.png")} 
                        style={{ resizeMode: "contain", height: 300, width: 300 }} />
        } else if (fetchedData.type === "music") {
            return <Image source={require("../assets/music.png")} 
                        style={{ resizeMode: "contain", height: 300, width: 300 }} />
        } else {
            return <Image source={require("../assets/relaxing.png")} 
                        style={{ resizeMode: "contain", height: 300, width: 300 }} />
        }
    }

    if (loading) {
        return <Loader />
    } 
    
    if (!fontsLoaded) {
        return <AppLoading /> 
    } else {
        return (
            <>
                <Header />
                <View style={styles.container}>

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
            </>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingHorizontal: 20,
        marginTop: 90,
    },
    titleBackground: {
        backgroundColor: "pink",
        borderRadius: 8,
        padding: 18,
        marginBottom: 25,
        paddingHorizontal: 25,
    },
    mainTitle: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
        fontFamily: "WorkSans_700Bold",
    },
    text: {
        fontSize: 16,
        textAlign: "center",
        fontFamily: "WorkSans_400Regular",
        marginTop: 5,
    },
})


export default Shakecomponent
