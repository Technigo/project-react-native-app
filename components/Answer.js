import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styled from "styled-components/native";


const Answer = ({navigation})=> {

    const [answer, setAnswer] = useState({})

    const generateAnswer = () => {
        fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => setAnswer(data))
    }

      useEffect (()=> { 
        generateAnswer()
      },[]);

    return (
        <View style={styles.container}>
            {/* <Text>{data.x}</Text>
            <Text>{data.y}</Text>
            <Text>{data.z}</Text> */}
            <Text style={styles.title}>{answer.content}</Text>
            <Text style={styles.title}>{answer.author}</Text> 
            <Text>Now that you are inspired, do you want to hear a dad joke?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Joke')} style={styles.btn}>
              <Text>Joke</Text>
            </TouchableOpacity>
           
        </View>
    )
}

export default Answer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#833471',
        margin: 20,
        padding: 20,
        textAlign: 'center'
    },
    btn: {
      padding: 20,
      width: 100,
      alignSelf: "center",
      textAlign: 'center',
      borderWidth: 1,
      backgroundColor: 'lightblue'



    }
    
})