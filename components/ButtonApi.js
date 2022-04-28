import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native"
import styled from "styled-components/native";


const APIButton = styled.Button`
font-weight: 700;
background-color: blue;
width: 50%;
`


const ButtonApi = () => {
    const [quote, setQuote] = useState({})
    const [color, setColor] = useState({color: 'pink',});
  
    const randomHex =() =>{
      console.log("Func Called");
      let letters = "0123456789ABCDEF";
      let random = "#";
      for (let i = 0; i < 6; i++) {
          random += letters[Math.floor(Math.random() * 16)];
      }
      setColor({
        color: random,
      });
      console.log("New color: "+color.color);
    }

    const generateQuote = () => {
        fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(data => setQuote(data))
    }

    useEffect(() => {
        generateQuote()
    }, [])

    return(
        <View style={[styles.container, {backgroundColor: color.color }]}>
            <Text>
                {quote.content}
            </Text>
            <Text>
                {quote.author}
            </Text>
        <APIButton title="Click me!" onPress={generateQuote}/>
        <Button title="Color" onPress={randomHex}/>
        
        </View>
    )
}

var styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export default ButtonApi