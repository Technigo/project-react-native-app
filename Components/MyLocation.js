import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

//{"coords":{"latitude":59.342165300000005,"longitude":18.0621661,"altitude":null,"accuracy":34,"altitudeAccuracy":null,"heading":null,"speed":null},"timestamp":1585901296536}
// latitude: this.state.location.coords.latitude,
//longitude: this.state.location.coords.longitude
export default class City extends Component {
  state = {
    location: null,
    errorMessage: null,
  };

  constructor(props) {
    super(props);
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  render() {
    let text = 'Waiting..';
    let city 
    let myCity = ''
    let long = ''
    let lat = ''
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
      city = Location.reverseGeocodeAsync( {latitude: this.state.location.coords.latitude, longitude:this.state.location.coords.longitude})
      lat = this.state.location.coords.latitude
      long = this.state.location.coords.longitude
    }

    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
        {text}</Text>
        <Text style={styles.paragraph}>
        {`long: ${long} + lat: ${lat}`}</Text>
           <Text style={styles.paragraph}>
        {myCity}</Text>
      </View>
    );
  }
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