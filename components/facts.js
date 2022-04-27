import React, { useEffect, useState } from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"


const styles = StyleSheet.create({
    image: {
    width: 100,
    height: 100,
    margin: 10,
    },

    text: {
      color: 'white',
    }
})

export const Facts = () => {
    const [quote, setQuote] = useState([])
    // const onPress = () => setQuote();
    const generateFact = () => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=luBC7hHhG19fUe5tSWnL0sTNWq7NhgCjFcFpqigI&count=1")
    .then(response => response.json())
    .then(data => setQuote(data))
}

     useEffect(() => {
        generateFact();
     }, [])
 
 return (
     <View>
        {quote.map((item) => (
            <View key={item.url} >
            <Image 
             style={styles.image}
             source={item.url}/>
            <Text style={styles.text}>
            {item.title}
            </Text> 
            <Text style={styles.text}>
            {item.explanation}
            </Text> 
            </View> 
             ))
            }
                
     </View>
 )

}
