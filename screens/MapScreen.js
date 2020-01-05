import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import FavMarkers from '../components/FavMarkers'
import HeaderButton from '../components/HeaderButton'

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
        <FavMarkers />

      </MapView>
    </View>

  )
}

MapScreen.navigationOptions = navData => {
  return {
    headerTitle: "Map",
    headerStyle: {
      backgroundColor: "#413c69"
    },
    presentation: 'transparentModal',
    headerMode: 'none',
    headerTintColor: "#f4b0c7",
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