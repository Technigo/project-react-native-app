import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Button } from 'react-native';
import styled from "styled-components/native"
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={your api key}
const Container = styled.View`
display: flex;
flex-direction: row;
background-color: white;
opacity: 0.7;
align-items: center;
justify-content: space-around;
border-width: 1px;
border-color: black;

`;

const MyNewLocation = ({myCord, setMyCord, count}) => {
  const [state, setState] = useState({
    location: null,
    errorMessage: null,
  })
  const [long, setLong ] = useState(0)
  const [lat, setLat] = useState(0)

  useEffect(() => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      _getLocationAsync();
    }
  }, [count])

  const _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let geocode = await Location.getCurrentPositionAsync({});
    let location = await Location.reverseGeocodeAsync(geocode.coords);
    setState({ location })
    setLong(geocode.coords.longitude)
    setLat(geocode.coords.latitude)
    setMyCord({latitude: Math.round(geocode.coords.latitude), longitude: Math.round(geocode.coords.longitude)})
    ;
  };
 
  let text2 = ''
  let text = 'Waiting..';
  if (state.errorMessage) {
    text = state.errorMessage;
  } else if (state.location) {
    // text = JSON.stringify(state.location);
    text = `You are at ${state.location[0].region}!`
    text2 = `You are at ${Math.round(myCord.latitude)} ${Math.round(myCord.longitude)}!`
    console.log("state", state.location)
  }

  return (
    <Container>
      <Text style={styles.paragraph}>{text}</Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default MyNewLocation;