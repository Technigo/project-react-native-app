import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const styles = StyleSheet.create({
  title: {
    color: 'white'
  },
  date: {
    color: 'white'
  },
  container : {
    paddingBottom: 25
  },
  textContainer: {
    display: 'none'
  }
});



const MovieCard = ({ title, release_date, poster_path, id }) => {

  return (
    <>
      <View style={styles.container}>
      <Image style={{width: 300, height: 430}}
      source={{uri: `https://image.tmdb.org/t/p/w342${poster_path}`}} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>Released {release_date}</Text>
        </View>
      </View>
    </>
  )
}

export default MovieCard