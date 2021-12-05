import React, { useState, useEffect} from "react"
import { Accelerometer } from "expo-sensors"
import { Text, View, ActivityIndicator, StyleSheet, Image, SafeAreaView } from 'react-native'



export const ShakeApi = () => {

    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
      })

    const [quote, setQuote] = useState ({})
    const [loading, setLoading] = useState(false)
    const [subscription, setSubscription] = useState(null)

    useEffect(() => {
        generateQuote()
    }, [])

	useEffect(() => {
		Accelerometer.setUpdateInterval(1000)
		subscribe();
		return () => unsubscribe()
	}, [])

	useEffect(() => {
		if (isShakingEnough(data)) {
			generateQuote()
		}
	}, [data])


      const subscribe = () => {
        Accelerometer.setUpdateInterval(1000)
        setSubscription(
          Accelerometer.addListener(accelerometerData => {
            setData(accelerometerData);
          })
        )
      }
    
      const unsubscribe = () => {
        subscription && subscription.remove()
        setSubscription(null)
      }


    const generateQuote = () => {
        setLoading(true)
        fetch("http://api.quotable.io/random")
        .then((res) => res.json())
        .then((quote) => setQuote(quote))
        .finally(() => setLoading(false))
    }
  

    const isShakingEnough = (data) => {
		const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
		return totalForce > 1.5
	}

    if (loading) {
        return (
        <SafeAreaView  style={styles.activityindicator}>
          <ActivityIndicator size="large" color="#1a1a1a"/>
        </SafeAreaView>
        )
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <Text style={styles.quote}>{quote.content}</Text>
            <Text style={styles.author}>{quote.author}</Text>
        </View>


        <SafeAreaView style={styles.shadowProp}>
          <Image source={require('../assets/shake.gif')} 
          style={styles.containersmall}/> 
        </SafeAreaView>


        <Text style={styles.howtodo}> Just shake your phone firmly and I will give you a quote.</Text>
      </SafeAreaView>

    )
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#eee',
  },
    quote: {
      fontSize: 32,
      lineHeight: 36,
      fontWeight: '200',
      textAlign: 'center',
      marginBottom: 48,
      marginTop: 48,
      maxWidth: 343,
    },
    author: {
      fontSize: 18,
      lineHeight: 22,
      fontWeight: '400',
      textAlign: 'center',
      maxWidth: 343,
    },
    howtodo: {
      fontSize: 18,
      lineHeight: 22,
      fontWeight: '500',
      textAlign: 'center',
      maxWidth: 343,
      marginBottom: 32,
      color: '#1a1a1a',
    },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  containersmall: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 24,
    marginLeft: 8,
    marginRight: 8,
    padding: 16,
    borderRadius: 8,
    width: 160,
    maxHeight: 140,
    alignItems: 'center',
  },
  activityindicator: {
    flex: 1,
    justifyContent: "center",
  }
})

