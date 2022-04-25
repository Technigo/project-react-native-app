import React, { useState, useEffect} from "react";
import { View, Text, TextInput, Button } from "react-native"



const Search = () => {

    const [word, setWord] = useState([])
    const API = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

    const generateWord = () => {
        fetch(API)
        .then(res => res.json())
        .then(data => setWord(data))
    }

    useEffect(() => {
        generateWord()
    }, [])

    console.log(word)

        return(
            <View>
                <TextInput type="text" 
                placeholder="Search word here" 
                value={word}/>
                <Button
                title="Search"
                onPress={(e) => setWord(e.target.value)} />
                
                <Text>Have you ever wondered where a word comes from? You can find out here!</Text>
    
                {word.map((details) =>(
                    <Text key={details.word}>{details.phonetics[0].audio}</Text>
                ))}
                
            </View>
        )
    
}
export default Search