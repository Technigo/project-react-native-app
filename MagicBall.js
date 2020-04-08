import React, { useState} from "react"
import styled from 'styled-components/native'

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

    <View>

      <BigCircel>
          <TextNumber> 8</TextNumber>
        <SmallCircel>
          <Answear> {quote.answear} </Answear>
        </SmallCircel>
      </BigCircel>

      <TouchableOpacity onPress={showQuote}>
      <Text>Ask me</Text>
      </TouchableOpacity>
      
    </View>

  )

}

const View = styled.View`
  flex: 1;
  height: 210; 
`

const BigCircel = styled.View`
  height: 320;
  width: 320;
  background-color: #000000;
  margin-top: 160;
  border-radius: 320;
  justify-content: center;
  align-items: center;
`

const SmallCircel = styled.View`
  height: 190;
  width: 190;
  background-color: #fff;
  border-radius: 100;
  justify-content: center;
  align-items: center;
`
const Text = styled.Text`
  font-size: 40;
  text-align: center;
`

const TextNumber = styled.Text`
  color: #fff;
  font-size: 40;
  margin-top: -60;
  padding-bottom: 20;
  font-weight: bold;
`
const Answear = styled.Text`
  font-size: 25;
  text-align: center;
  font-weight: bold;
`
const TouchableOpacity = styled.TouchableOpacity`
  background-color: #FCED84;
  border-radius: 50;
  padding-left: 15;
  padding-right: 15;
  margin-top: 100;
`