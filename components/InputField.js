import React, {useState} from 'react'   
import { StyleSheet, View, TextInput, Text } from 'react-native'

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputText: {
        fontSize: 20,
        textAlign: 'center',
        width: '80%',
        height: 50,
        borderWidth: 3,
        borderColor: 'rgba(80,235,236,1)',
        marginTop: 80,
    }
})

const InputField = () => {
    const [word, setWord] = useState('')

    //This function will store the searched word in the 'word'
    //And its called for in the onChangeText
    const searchedWord = (inputWord) => (
        setWord(inputWord)
    )
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.inputText}
              value={word}
              placeholder='Search for...'
              onChangeText={searchedWord}
              >
            </TextInput>
            <Text>{word}</Text>
        </View>

    )
}

export default InputField