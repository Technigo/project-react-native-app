import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import {useFonts, InriaSerif_400Regular_Italic} from '@expo-google-fonts/inria-serif';

const image = { uri: "https://i.postimg.cc/WbknmQ4T/Untitled-Artwork.png" };

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

      let [fontsLoaded] = useFonts({
        InriaSerif_400Regular_Italic,
      });

    return (
      <ImageBackground source={image} resizeMode="cover" style={styles.background}>
        <View style={styles.container}>
          
            <View style={styles.border}>
              <Text style={styles.title2}>{quote.content}</Text>
              <Text style={styles.title2}>- {quote.author}</Text> 
            </View>

            <View style={styles.btnWrapper}>
              <TouchableOpacity onPress={() => generateQuote()} style={styles.btn}>
                <Text style={styles.title3}>New quote</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Joke')} style={styles.btn}>
                <Text style={styles.title3}>Joke?</Text>
              </TouchableOpacity>
            </View>
           
        </View>
      </ImageBackground>
    )
}

export default Quote;

/////////////           STYLING        /////////////////

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 0,
    },
    title2: {
      marginRight: 50,
      marginBottom: 10,
      marginLeft: 10,
      fontSize: 26,
      fontFamily: 'InriaSerif_400Regular_Italic'
    },
    title3: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#3d3d3d',
      padding: 5,
      textAlign: 'center'
      },
      btn: {
        padding: 20,
        margin: 20,
        width: 140,
        alignSelf: "center",
        textAlign: 'center',
        backgroundColor: '#E6BA95',
        borderRadius: 10
      },
      background: {
        flex: 1,
      },
      btnWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
      }
})