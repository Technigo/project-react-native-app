import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import FavPlaces from '../components/FavPlaces'
import PLACES from '../data/dummy-data'
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';


export const MapScreen = () => {
  return (

    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        showsMyLocationButton={true}
        showsUserLocation={true}
        mapType={"standard"}
        region={{
          latitude: 59.3280118,
          longitude: 18.0691595,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <FavPlaces />

      </MapView>
    </View>

  )
}

MapScreen.navigationOptions = {
  headerTitle: "Map",
  headerStyle: {
    backgroundColor: "#413c69"
  },
  headerTintColor: "white"
}




const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});