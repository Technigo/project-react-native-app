import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import PLACES from '../data/dummy-data'

export const FavList = () => {

  const clickFavPlace = (place) => {
    console.log(place)
  }

  return (
    PLACES.map(place => (
      <View style={styles.card} key={place.id}>
        <TouchableOpacity onPress={(e) => clickFavPlace(place)}>
          <View style={styles.upper}>
            <View>
              <Text style={styles.title}>{place.title}</Text>
            </View>
            <View>
              <Ionicons style={styles.icon} color={'#c70d3a'} name={place.icon} />
            </View>
          </View>

          <View style={styles.lower}>
            <Text style={styles.description}>
              {place.description}
            </Text>
          </View>

          <View style={styles.upper}>
            <View>
              <Text style={{ fontSize: 15, color: '#c70d3a' }}>{place.location.street + ", " + place.location.city}</Text>
            </View>

            <View>
            </View>

          </View>
        </TouchableOpacity>
      </View>

    ))
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
  icon: {
    fontSize: 28,
  },
  upper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lower: {
    color: '#f4b0c7',
  },
  title: {
    color: '#c70d3a',
    fontSize: 21,
  },
  description: {
    color: '#c70d3a',
    fontSize: 18,
    marginVertical: 5,
  },

})