import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import PLACES from '../data/dummy-data'

export const FavList = () => {
  return (
    PLACES.map(place => (
      <View style={styles.container} key={place.id}>

        <View style={styles.upper}>
          <View>
            <Text style={styles.title}>{place.title}</Text>
          </View>
          <View>
            <Text>{"ICON"}</Text>
          </View>
        </View>

        <View style={styles.lower}>
          <Text style={styles.description}>
            {place.description}
          </Text>
        </View>

        <View style={styles.upper}>
          <View>
            <Text style={{ fontSize: 12 }}>{place.location.street}</Text>
            <Text style={{ fontSize: 12 }}>{place.location.city}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 10 }}>{place.position.latitude.toFixed(5)}</Text>
            <Text style={{ fontSize: 10 }}>{place.position.longitude.toFixed(5)}</Text>
          </View>
        </View>

      </View>

    ))
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 15,
    backgroundColor: '#fae3d9',
    padding: 15,
    borderRadius: 10,
  },
  upper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lower: {
    color: '#f4b0c7',
  },
  title: {
    color: '#413c69',
    fontSize: 21,
    fontWeight: 'bold',
  },
  description: {
    color: '#413c69',
    fontSize: 18,
  },

})