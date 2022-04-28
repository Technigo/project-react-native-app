import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import styled from "styled-components/native";


const Quote = ({navigation})=> {

    const [quote, setQuote] = useState({})

    const generateQuote = () => {
        fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => setQuote(data))
    }

      useEffect (()=> { 
        generateQuote()
      },[]);

    return (
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Inspirational quote:</Text>
            <View style={styles.border}>
              <Text style={styles.title2}>{quote.content}</Text>
              <Text style={styles.title2}>- {quote.author}</Text> 
            </View>
          </View>
            
          <Image 
                style={styles.bulb}
                source={require('../assets/light-bulb.png')}/>

            <View style={styles.joke}>
              <Text style={styles.title}>Now that you are inspired, do you want to hear a dad joke?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Joke')} style={styles.btn}>
                <Text style={styles.title3}>Joke</Text>
              </TouchableOpacity>
            </View>
           
        </View>
    )
}

export default Quote;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ae936f',
        padding: 5,
        margin: 10,
        textAlign: 'center'
    },
    title2: {
      fontSize: 24,
      color: '#6d5c45',
      padding: 5,
      margin: 10,
      textAlign: 'center'
  },
  title3: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6d5c45',
    padding: 5,
    textAlign: 'center'
},
    btn: {
      padding: 20,
      margin: 50,
      width: 100,
      alignSelf: "center",
      textAlign: 'center',
      backgroundColor: '#E6BA95',
      borderRadius: 10
    },
    border: {
      borderWidth: 1,
      borderColor: '#E6BA95',
      borderRadius: 10,
      margin: 10,
    },
    bulb: {
      width: 150,
      height: 150,
  }
    
})