import React, { useState} from "react"
import {Container, Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native'

const Quotes = [
  {
    answear: "It is certain.",
  },
  {
    answear: "It is decidedly so.",
  },
  {
    answear: "Without a doubt.", 
  },
  {
    answear: "Yes, definitely.", 
  },
  {
    answear: "You may rely on it.", 
  },
  {
    answear: "As I see it, yes.", 
  },
  {
    answear: "Most likely.", 
  },
  {
    answear: "Outlook good.", 
  },
  {
    answear: "Yes.", 
  },
  {
    answear: "Signs point to yes.", 
  },
  {
    answear: "Reply hazy, try again.", 
  },
  {
    answear: "Ask again later.", 
  },
  {
    answear: "Better not tell you now.", 
  },
  {
    answear: "Cannot predict now.", 
  },
  {
    answear: "Concentrate and ask again.", 
  },
  {
    answear: "Don't count on it.", 
  },
  {
    answear: "My reply is no.", 
  },
  {
    answear: "My sources say no.", 
  },
  {
    answear: "Outlook not so good.", 
  },
  {
    answear: "Very doubtful.", 
  },
  ]  
    

export default function MagicBall  ()  {
  const [quote, setQuote] = useState(0) 

  const showQuote = () => {
    const randomIndex = Math.floor(Math.random() * Quotes.length)
    setQuote(Quotes[randomIndex])
  }

  return (

    <View style={styles.container}>

      <View style={styles.bigCircel}>
        <View style={styles.smallCircel}>
        <Text> {quote.answear} </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.TouchableOpacity} onPress={showQuote}>
      <Text style={styles.Text}>Ask me</Text>
      </TouchableOpacity>



      
    
    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    height: 210, 
    flex: 1,
    
  },
  bigCircel: {
    height: 215,
    width: 215,
    backgroundColor: "#000000",
    marginTop: 100,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  smallCircel: {
    height: 130,
    width: 130,
    backgroundColor: "#fff",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
  fontSize: 40,
  textAlign: "center",
  },
  TouchableOpacity: {
    backgroundColor: "#FCED84",
    borderRadius: 50,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 130,
    
  },
})