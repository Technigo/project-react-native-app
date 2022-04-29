import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native"
import styled from "styled-components/native";


const APIButton = styled.Button`
font-weight: 700;
background-color: blue;
width: 50%;
`


const ButtonApi = () => {
    // const [quote, setQuote] = useState({})
    const [color, setColor] = useState({color: 'pink',});
  
  // Add random background color with the press of a button
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

    // const generateQuote = () => {
    //     fetch("https://api.quotable.io/random")
    //     .then(res => res.json())
    //     .then(data => setQuote(data))
    // }

    // useEffect(() => {
    //     generateQuote()
    // }, [])

    return(
        <View style={[styles.container, {backgroundColor: color.color }]}>
            {/* <Text>
                {quote.content}
            </Text>
            <Text>
                {quote.author}
            </Text>
        <APIButton title="Click me!" onPress={generateQuote}/> */}

        

          <Text style={{ textAlign:"center" }}>Fox families live in underground dens. 
              These underground dens also provide shelter from predators, such as coyotes, wolves, and bears. 
              Humans, however, pose the largest threat to foxes.</Text>
            <Text style={{ textAlign:"center" }}>Foxes stink. They have a sickly, musty scent that comes from the glands at the base of their tails. 
              If you start smelling this around your home or in your crawl space, it may be an indicator that foxes are near.</Text>
            <Text style={{ textAlign:"center" }}>When you are reading this you might think: "Foxes have alot of similarities with developers.</Text>
            
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