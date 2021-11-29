import React, { useState, useEffect} from "react"
import { Accelerometer } from "expo-sensors"
import { Text, ActivityIndicator } from 'react-native'
import styled from "styled-components/native"


const CenteredView = styled.View`
display: flex;
align-items: center;
margin: 0 auto;
`

const QuoteText = styled.Text`
    font-weight: 700;
    text-align: center;
    padding: 32px;
    background-color: #1a1a1a;
    margin: 32px;
    font-size: 18px;
    color: #fff;
`


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
			generateQuote();
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
		return totalForce > 1.78
	}

    if (loading) {
        return <ActivityIndicator/>
    }

    return (
        <CenteredView>
		    <CenteredView>
                <QuoteText>{quote.content}</QuoteText>
            </CenteredView>
            <Text>Author: {quote.author}</Text>
        </CenteredView>

    )
}
