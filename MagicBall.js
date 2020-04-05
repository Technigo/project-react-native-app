import React, { useState} from "react"
import {Container, Text, View, StyleSheet, Button} from 'react-native'

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

      <View>
        <Text> {quote.answear} </Text>
      </View>

      <Button title="Pressme" onPress={showQuote}/>
    
    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    height: 90, 
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCED84", 
  },
  View: {
    height: 210,
    width: 210,
    backgroundColor: "#FCED84",
    marginTop: 100,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  titel: {
  fontSize: 50,
  },
  Button: {
    backgroundColor: "#CFFFE2",
    borderRadius: 50,
    marginTop: 200,
  },
})