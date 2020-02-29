import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Alert } from 'react-native'
import Place from '../models/place'
import { Ionicons } from '@expo/vector-icons'
import styled from "styled-components"
// import { LOCATION_API } from 'react-native-dotenv'
const LOCATION_API = "2c6dcd2dc446df"

import PLACES from '../data/dummy-data'

const fetchLocationData = async (street, city) => {
  let search = `${street} ${city} `
  const res = await fetch(`https://eu1.locationiq.com/v1/search.php?key=${LOCATION_API}&q=${search}&format=json`)
  const json = await res.json()
  return json
}

export const AddPlaceScreen = (navData) => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("Stockholm")

  let lastId = PLACES.slice(-1)[0].id


  const saveData = () => {
    fetchLocationData(street, city)
      .then((result) => {

        if (title == "" || street == "" || city == "") {
          Alert.alert("Fill in title, street and city")
          return
        }
        PLACES.push(new Place(lastId + 1, title, description, { 'latitude': Number(result[0].lat), 'longitude': Number(result[0].lon) }, { 'street': street, 'city': city }))
        Alert.alert('Place saved!')
        navData.navigation.navigate("Map", { pl: PLACES })

      })
  }

  const clickedIcon = () => {
    alert("Button pressed")
  }


  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          autoCorrect={false}
          style={styles.formInput}
          placeholder={'Title'}
          onChangeText={text => {
            setTitle(text)
          }}
        />
        <TextInput
          autoCorrect={false}
          style={styles.formInput}
          placeholder={'Description'}
          onChangeText={text => {
            setDescription(text)
          }}
        />

        <TextInput
          autoCorrect={false}
          style={styles.formInput}
          placeholder={'Street'}
          onChangeText={text => {
            setStreet(text)
          }}
        />

        <TextInput
          autoCorrect={false}
          style={styles.formInput}
          value={city}
          placeholder={'City'}
          onChangeText={text => {
            setCity(text)
          }}
        />


        <View style={styles.iconsContainer}>
          <IconButton>
            <Ionicons
              color={"#fff"}
              style={styles.icon}
              name="ios-home"
            />
          </IconButton>
          <IconButton>
            <Ionicons
              color={"#fff"}
              style={styles.icon}
              name="ios-contacts"
            />
          </IconButton>
          <IconButton>
            <Ionicons
              color={"#fff"}
              style={styles.icon}
              name="ios-cafe"
            />
          </IconButton>

          <IconButton>
            <Ionicons
              color={"#fff"}
              style={styles.icon}
              name="ios-restaurant"
            />
          </IconButton>
          <IconButton onPress={clickedIcon}>
            <Ionicons
              color={"#fff"}
              style={styles.icon}
              name="ios-wine"
            />
          </IconButton>

        </View>

        <StyledButton onPress={() => saveData()}>
          <StyledButtonText> Save place! </StyledButtonText>
        </StyledButton>
      </View>

    </View>

  )
}

AddPlaceScreen.navigationOptions = {
  headerTitle: "Add new place",
  headerStyle: {
    backgroundColor: "#fff"
  },
  headerTintColor: "#c70d3a",
}


const IconButton = styled.TouchableOpacity`
  width: 55;
  border: 1px solid white;
  border-radius: 5;
  align-items: center;
`
const StyledButton = styled.TouchableOpacity`
  background-color: transparent;
  border: solid #fff;
  border-radius: 4;
  margin-top: 30;
  margin-left: 0;
  margin-right: 0;
  padding-top: 10;
  padding-bottom: 10;
  padding-right: 8;
  padding-left: 8;
`
const StyledButtonText = styled.Text`
    color: #c70d3a;
    font-size: 22; 
    text-align: center;
`

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#45969b",
    flex: 1,
    justifyContent: "center",
  },
  form: {
    flexDirection: 'column',
    margin: 15,
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 10,
  },
  formInput: {
    backgroundColor: 'transparent',
    margin: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 5,
    height: 50,
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    borderWidth: 1,
    fontSize: 24,
    color: 'white',
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
  icon: {
    fontSize: 50,
  },
  iconsContainer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }

})