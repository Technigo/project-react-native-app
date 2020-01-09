import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { HeaderButtons, Item } from "react-navigation-header-buttons"

import FavMarkers from '../components/FavMarkers'
import HeaderButton from '../components/HeaderButton'
import PLACES from '../data/dummy-data'


export const MapScreen = (navData) => {
  let updatedPLACES = (navData.navigation.getParam('pl'))
  let newRegion = undefined
  try {
    let lastLat = updatedPLACES.slice(-1)[0].position.latitude
    let lastLon = updatedPLACES.slice(-1)[0].position.longitude
    newRegion = {
      latitude: lastLat,
      longitude: lastLon,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }
  }
  catch (err) {
  }
  return (

    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        showsMyLocationButton={true}
        showsUserLocation={true}
        mapType={"standard"}
        region={newRegion || {
          latitude: 59.3280118,
          longitude: 18.0691595,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <FavMarkers PLACES={PLACES} />

      </MapView>
    </View>

  )
}

MapScreen.navigationOptions = navData => {
  return {
    headerTitle: "Map",
    headerStyle: {
      backgroundColor: "#fff"
    },
    presentation: 'transparentModal',
    headerMode: 'none',
    headerTintColor: "#c70d3a",
    headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName={"ios-menu"}
        onPress={() => {
          navData.navigation.navigate("Menu")
        }}

      />
    </HeaderButtons>
  }
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

})