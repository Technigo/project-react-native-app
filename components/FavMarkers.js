import React from 'react'

import { Marker } from 'react-native-maps';
import PLACES from '../data/dummy-data'

import Place from '../models/place'
PLACES.push(new Place('4', 'ESA', 'Stockholms bästa sushistället', { 'latitude': 59.3414519, 'longitude': 18.0373223 }))
PLACES.push(new Place('5', 'The Soap Bar', 'Bra ställe att hänga', { 'latitude': 59.3334122, 'longitude': 18.0760818 }))
PLACES.push(new Place('6', 'MR CAKE', 'Trevligt och mysigt fikaställe på sommaren', { 'latitude': 59.3434997, 'longitude': 18.0665918 }))

export default FavMarkers = () => {
  return (
    PLACES.map(place => (
      <Marker
        key={place.id}
        coordinate={place.position}
        title={place.title}
        description={place.description}
        pinColor={'#c70d3a'}
      />

    ))
  )
}