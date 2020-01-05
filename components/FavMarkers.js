import React from 'react'

import { Marker } from 'react-native-maps';
import PLACES from '../data/dummy-data'

import Place from '../models/place'
PLACES.push(new Place('4', 'ESA', 'Stockholms bästa sushistället', { 'latitude': 59.3414519, 'longitude': 18.0373223 }))

export default FavMarkers = () => {
  return (
    PLACES.map(place => (
      <Marker
        key={place.id}
        coordinate={place.position}
        title={place.title}
        description={place.description}
        pinColor={'#413c69'}
      />

    ))
  )
}