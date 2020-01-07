import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, TextInput, Picker, processColor } from 'react-native'

import { LOCATION_API } from 'react-native-dotenv'

// const [location, getLocation] = useState("")

// const FindLocation = async (search) => {
//   const uri = `https://eu1.locationiq.com/v1/search.php?key=${LOCATION_API}&q=${search}&format=json`

//   const res = await fetch(uri)
//   const json = await res.json()
//   getLocation(json)
//   return json
// }

// FindLocation('Körsbärsvägen 9 Stockholm')
// console.log(location)

export const AddPlaceScreen = () => {
  const [category, setCategory] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

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
        <Text>{category}</Text>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{process.env.GOOGLE_API}</Text>
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
    margin: 10,
    padding: 10,
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