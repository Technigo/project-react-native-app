import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, TextInput, Picker, TouchableOpacity } from 'react-native'
import Place from '../models/place'

import { LOCATION_API } from 'react-native-dotenv'
import PLACES from '../data/dummy-data'

const fetchLocationData = async (street, city) => {
  let search = `${street} ${city} `
  const res = await fetch(`https://eu1.locationiq.com/v1/search.php?key=${LOCATION_API}&q=${search}&format=json`)
  const json = await res.json()
  return json
}

export const AddPlaceScreen = (navData) => {
  const [location, setLocation] = useState({})
  const [category, setCategory] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [street, setStreet] = useState("")
  // const [postal, setPostal] = useState("")
  const [city, setCity] = useState("Stockholm")

  let lastId = PLACES.slice(-1)[0].id



  const saveData = () => {
    console.log("saveData()")
    fetchLocationData(street, postal, city)
      .then((result) => {
        console.log(result)
        setLocation(result)
        // let postno = postal.replace(/\s/g, '')
        PLACES.push(new Place(lastId + 1, title, description, { 'latitude': Number(result[0].lat), 'longitude': Number(result[0].lon) }, { 'street': street, 'city': city }))
        // navData.navigation.replace("Map", PLACES)
        navData.navigation.navigate("Map", { pl: PLACES })

      })


  }

  useEffect(() => {
    fetchLocationData()

  }, [])

  return (
    <ImageBackground source={require('../assets/wildberry-bg.jpg')} style={{ width: '100%', height: '100%' }}>
      <View style={styles.form}>
        <TextInput
          style={styles.formInput}
          placeholder={'Title'}
          onChangeText={text => {
            setTitle(text)
          }}
        />
        <TextInput
          style={styles.formInput}
          placeholder={'Description'}
          onChangeText={text => {
            setDescription(text)
          }}
        />
        <Picker
          selectedValue={category}
          style={styles.formPicker}
          onValueChange={(itemValue) => {
            setCategory(itemValue)
          }
          }>
          <Picker.Item label="Home" value="ios-home" />
          <Picker.Item label="Cafe" value="ios-cafe" />
          <Picker.Item label="Friend" value="ios-contacts" />
          <Picker.Item label="Bar" value="ios-wine" />
          <Picker.Item label="Restaurant" value="md-restaurant" />
        </Picker>

        <TextInput
          style={styles.formInput}
          placeholder={'Street'}
          onChangeText={text => {
            setStreet(text)
          }}
        />

        <TextInput
          style={styles.formInput}
          value={city}
          placeholder={'City'}
          onChangeText={text => {
            setCity(text)
          }}
        />


        <TouchableOpacity style={styles.button} onPress={saveData}>
          <Text style={styles.buttonTitle}>Save</Text>
        </TouchableOpacity>
      </View>

    </ImageBackground >

  )
}

AddPlaceScreen.navigationOptions = {
  headerTitle: "My fav places",
  headerStyle: {
    backgroundColor: "#fff"
  },
  headerTintColor: "#c70d3a",
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'column',
    margin: 15,
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
  },
  formInput: {
    margin: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 5,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 19,
  },

  formPicker: {
    margin: 10,
    padding: 10,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1
  },

  button: {
    backgroundColor: "yellow",
    borderWidth: 1,
    alignItems: "center",
  },

  buttonTitle: {
    fontSize: 20,
    padding: 10,
    color: "black",
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